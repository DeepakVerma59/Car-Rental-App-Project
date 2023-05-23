import React, { useState, useEffect } from 'react'
import "../styles/BookingDetails.css"
import UserHeader from './userHeader'
import { useCar } from '../../context-api/carContaxt'
import { Link, useParams, useNavigate } from "react-router-dom"
import toast from 'react-hot-toast'
import axios from 'axios'
import Map from './map'
import "../styles/map.css"
import { useAuth } from "../../context-api/auth-context"


function EditMyBooking() {
    const [auth] = useAuth();

    const navigate = useNavigate()
    const params = useParams()
    const [orderHeader, setOrderHeader, carData, setCarData] = useCar()
    const [bookingData, setBookingData] = useState({})

    const date = new Date();
    let day = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()
    let hour = parseInt(date.getHours())
    let ampm = hour == 12 ? "AM" : "PM"
    let time = hour + ":" + date.getMinutes() + " " + ampm;

    const Distance = 200
    const Pricing = parseInt(bookingData.pricePerKm)
    const Subtotal = (Pricing * Distance)
    const Tax = parseInt((Subtotal) * 0.18);
    const Total = Subtotal + Tax;


    const getSingleBooking = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_PORT}/get-booking/${params.id}`);
            setBookingData(res.data.singleBooking)
        }
        catch (err) {
            console.log(err)
            toast.error("something went wrong")
        }
    }

    useEffect(() => {
        getSingleBooking();
    }, [])


    async function handleSubmit() {
        try {
            console.log(bookingData)
            const res = await axios.put(`${process.env.REACT_APP_PORT}/update-booking/${bookingData._id}`, bookingData,
                {
                    headers: {
                        Authorization: `${auth?.token}`
                    }
                })
            if (res.data.success) {
                toast.success("updated successfully")
                navigate(`/user-bookings/:id`)
            }
        }
        catch (err) {
            console.log(err)
            toast.error(err)
        }
    }
    return (
        <>
            <UserHeader />
            <div>
                <div className="card  card1 ">
                    <div className="card-body mx-5" >
                        <h5 className="card-title">Edit Booking details</h5>

                        <form >
                            <div className='car-container'>
                            <div className="form-group row mt-4 ">
                                <label for="carname" className="col-sm-2 col-form-label">Car name</label>
                                <div className="col-sm-5">
                                    <input type="text" className="form-control-plaintext " id="carname" value={bookingData.name} />
                                </div>
                            </div>
                            <div className="form-group row mt-4">
                                <label for="CarNumber" className="col-sm-2 col-form-label">Car Number</label>
                                <div className="col-sm-5">
                                    <input type="text" className="form-control-plaintext" id="CarNumber" value="HR 22N 6595" />
                                </div>
                            </div>

                            <div className='mb-3 car-img'>
                               {carData._id ? <img src={`${process.env.REACT_APP_PORT}/get-photo/${carData._id}`}
                                    alt='product-img'
                                    width={"200px"}
                                    height={"150px"}
                                    className='img img-responsive' />
                                :
                                <img src={`${process.env.REACT_APP_PORT}/get-photo/${bookingData._id}`}
                                    alt='product-img'
                                    width={"200px"}
                                    height={"150px"}
                                    className='img img-responsive' />
                               } 
                            </div>
                            </div>

                    <hr />
                    <div className='car-container'>
                    <div className="form-group row mt-2">
                        <label for="origin" className="col-sm-2 col-form-label">Origin</label>

                        <div className="col-sm-5">
                            <input type="text" className="form-control-plaintext" id="origin" value={bookingData.origin} />
                        </div>
                    </div>

                    <div className="form-group row mt-2">
                        <label for="destination" className="col-sm-2 col-form-label">Destination</label>
                        <div className="col-sm-5">
                            <input type="text" className="form-control-plaintext" id="destination" value={bookingData.destination} />
                        </div>


                        <div id="map-of-the-edit-payment-details">
                            <Map origin={bookingData.origin} destination={bookingData.destination} className='map-of-doom image-of-hte-map-of-the-edit-page' />
                        </div>


                    </div>
                    <div className="form-group row mt-2">
                        <label for="startdate" className="col-sm-2 col-form-label">Start Date</label>
                        <div className="col-sm-5">
                            <input type="date" className="form-control-plaintext" id="startdate" value={bookingData.startDate} onChange={(e) => setBookingData({ ...bookingData, startDate: e.target.value })} />
                        </div>
                    </div>
                    <div className="form-group row mt-2">
                        <label for="enddate" className="col-sm-2 col-form-label">End Date</label>
                        <div className="col-sm-5">
                            <input type="date" className="form-control-plaintext" id="enddate" value={bookingData.endDate} onChange={(e) => setBookingData({ ...bookingData, endDate: e.target.value })} />
                        </div>
                    </div>
                    </div>
                    <hr />
                    <div className="form-group row mt-2">
                        <label for="bookingid" className="col-sm-2 col-form-label">Booking ID</label>
                        <div className="col-sm-5">
                            <input type="text" className="form-control-plaintext" id="bookingid" value={bookingData.bookingId} />
                        </div>
                    </div>
                    <div className="form-group row mt-2">
                        <label for="btime" className="col-sm-2 col-form-label">Booking Time</label>
                        <div className="col-sm-5">
                            <input type="text" className="form-control-plaintext" id="btime" value={bookingData.bookingTime} />
                        </div>
                    </div>
                    <div className="form-group row mt-2">
                        <label for="bdate" className="col-sm-2 col-form-label">Booking Date</label>
                        <div className="col-sm-5">
                            <input type="text" className="form-control-plaintext" id="bdate" value={bookingData.bookingDate} />
                        </div>
                    </div>
                    

                </form>


                <Link to='/user-bookings/:id'><button type="button" class="btn btn-outline-primary mt-4">Cancel</button></Link>
            </div>
        </div >



            <div className="card card2 ">
                <div className="card-body mx-5" >
                    <h5 className="card-title">Payment Details</h5>

                    <form>
                        <div className="form-group row mt-4 ">
                            <label for="Priceperkm" className="col-sm-5 col-form-label">Price/KM</label>
                            <div className="col-sm-5">
                                <input type="text" className="form-control-plaintext " id="Priceperkm" value={bookingData.pricePerKm} />
                            </div>
                        </div>

                        {<div className="form-group row mt-2">
                            <label for="pricing" className="col-sm-5 col-form-label">Distance</label>
                            <div className="col-sm-5">
                                <input type="text" className="form-control-plaintext" id="pricing" value={Distance} />
                            </div>
                        </div>}

                        <div className="form-group row mt-2">
                            <label for="taxcharge" className="col-sm-5 col-form-label">Tax charges</label>
                            <div className="col-sm-5">
                                <input type="text" className="form-control-plaintext" id="taxcharge" value="18%" />
                            </div>
                        </div>
                        <hr />
                        <div className="form-group row mt-2">
                            <label for="subTotal" className="col-sm-5 col-form-label">Total</label>
                            <div className="col-sm-5">
                                <input type="text" className="form-control-plaintext" id="subTotal" value={Total} />
                            </div>
                        </div>
                        <br />
                        <br />
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label style={{fontSize:15 }} className="custom-control-label mx-2" for="customCheck1" > I Agree To "Terms And Conditions”</label>
                        </div>
                        <br />
                    </form>

                </div>
                <button type="button" onClick={() => handleSubmit()} className="btn  btn-primary btn-lg btn-block mx-4">Update</button>
            </div>
            </div >
        </>
    )
}

export default EditMyBooking