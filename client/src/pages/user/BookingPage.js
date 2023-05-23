import React, { useEffect, useState } from 'react'
import "../styles/BookingDetails.css"
import UserHeader from './userHeader'
import { useCar } from '../../context-api/carContaxt'
import { Link, useNavigate } from "react-router-dom"
import toast from 'react-hot-toast'
import axios from 'axios'
import { useAuth } from "../../context-api/auth-context"
import Map from './map'
import "../styles/orderPageHeader.css"
import '../styles/map.css'
import OrderPageHeader from './OrderPageHeader'


function BookingPage() {
  const [auth] = useAuth();

  const navigate = useNavigate()
  const [orderHeader, setOrderHeader, carData, setCarData] = useCar()

  const date = new Date();
  let day = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()
  let hour = parseInt(date.getHours())
  let ampm = hour === 12 ? "AM" : "PM"
  let time = hour + ":" + date.getMinutes() + " " + ampm;

  const Distance = 200
  const Pricing = parseInt(carData.pricePerKm)
  const Subtotal = (Pricing * Distance)
  const Tax = parseInt((Subtotal) * 0.18);
  const Total = Subtotal + Tax;


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const bookingData = new FormData()
      bookingData.append("userId", auth?.user.id)
      bookingData.append("name", carData.name);
      bookingData.append("carDetails", carData.carDetails);
      bookingData.append("details", carData.details);
      bookingData.append("origin", orderHeader.origin);
      bookingData.append("destination", orderHeader.destination);
      bookingData.append("startDate", orderHeader.startDate);
      bookingData.append("endDate", orderHeader.endDate);
      bookingData.append("bookingId", carData._id);
      bookingData.append("bookingDate", day);
      bookingData.append("bookingTime", time);
      bookingData.append("pricePerKm", carData.pricePerKm);


      const res = await axios.post(`${process.env.REACT_APP_PORT}/create-booking`, bookingData,
        {
          headers:
            { Authorization: `${auth?.token}` }
        })

      if (res.data.success) {
        toast.success("booking created successfully");
        navigate(`/user-bookings/${carData._id}`);
      }
      else {
        toast.error(res.data?.message)
      }
    }
    catch (err) {
      console.log(err)
      toast.error("something went wrong");

    }
  }

  return (
    <>
      <UserHeader />
      <OrderPageHeader />
      <div>
        <div className="card  card1 ">
          <div className="card-body mx-5" >
            <h5 className="card-title">Booking details</h5>

            <form >
              <div className='car-container'>
                <div className="form-group row mt-4 ">
                  <label for="carname" className="col-sm-2 col-form-label">Car name</label>
                  <div className="col-sm-5">
                    <input type="text" className="form-control-plaintext " id="carname" value={carData.name} />
                  </div>
                </div>

                <div className="form-group row mt-4">
                  <label for="CarNumber" className="col-sm-2 col-form-label">Car Number</label>
                  <div className="col-sm-5">
                    <input type="text" className="form-control-plaintext" id="CarNumber" value="HR 22N 6595" />
                  </div>
                </div>


                <div className='mb-3 car-img'>
                  <img src={`${process.env.REACT_APP_PORT}/get-photo/${carData._id}`}
                    alt='product-img'
                    width={"200px"}
                    height={"150px"}
                    className='img img-responsive' />
                </div>
              </div>
              <hr />

              <div className='car-container'>
              <div className="form-group row mt-2">
                <label for="origin" className="col-sm-2 col-form-label">Origin</label>
                <div className="col-sm-5">
                  <input type="text" className="form-control-plaintext" id="origin" value={orderHeader.origin} />
                </div>
              </div>

              <div className="form-group row mt-2">
                <label for="destination" className="col-sm-2 col-form-label">Destination</label>
                <div className="col-sm-5">
                  <input type="text" className="form-control-plaintext" id="destination" value={orderHeader.destination} />
                </div>
              </div>

              <div>
              <Map origin={orderHeader.origin} destination={orderHeader.destination} className='map' />
            </div>

              <div className="form-group row mt-2">
                <label for="startdate" className="col-sm-2 col-form-label">Start Date</label>
                <div className="col-sm-5">
                  <input type="text" className="form-control-plaintext" id="startdate" value={orderHeader.startDate} />
                </div>
              </div>
              <div className="form-group row mt-2">
                <label for="enddate" className="col-sm-2 col-form-label">End Date</label>
                <div className="col-sm-5">
                  <input type="text" className="form-control-plaintext" id="enddate" value={orderHeader.endDate} />
                </div>
              </div>
              </div>

              <hr />
              <div className="form-group row mt-2">
                <label for="bookingid" className="col-sm-2 col-form-label">Booking ID</label>
                <div className="col-sm-5">
                  <input type="text" className="form-control-plaintext" id="bookingid" value={carData._id} />
                </div>
              </div>
              <div className="form-group row mt-2">
                <label for="btime" className="col-sm-2 col-form-label">Booking Time</label>
                <div className="col-sm-5">
                  <input type="text" className="form-control-plaintext" id="btime" value={time} />
                </div>
              </div>
              <div className="form-group row mt-2">
                <label for="bdate" className="col-sm-2 col-form-label">Booking Date</label>
                <div className="col-sm-5">
                  <input type="text" className="form-control-plaintext" id="bdate" value={day} />
                </div>
              </div>

             

            </form>
            {/* <div className="map">

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAppNv_hKiqWizwpVnzD4j8xCH1YY8VqsE' }}
        defaultCenter={location.center}
        defaultZoom={location.zoom}
      >
        <LocationPin
          lat={location.center.lat}
          lng={location.center.lng}
        />
      </GoogleMapReact>
    </div>
  </div> */}
           

            <Link to='/user-homepage'><button type="button" class="btn btn-outline-primary mt-4">Cancel</button></Link>
          </div>
        </div>



        <div className="card card2 ">
          <div className="card-body mx-5" >
            <h5 className="card-title">Payment Details</h5>

            <form>
              <div className="form-group row mt-4 ">
                <label for="Priceperkm" className="col-sm-5 col-form-label">Price/KM</label>
                <div className="col-sm-5">
                  <input type="text" className="form-control-plaintext " id="Priceperkm" value={Pricing} />
                </div>
              </div>

              <div className="form-group row mt-2">
                <label for="pricing" className="col-sm-5 col-form-label">Distance</label>
                <div className="col-sm-5">
                  <input type="text" className="form-control-plaintext" id="pricing" value={Distance} />
                </div>
              </div>

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
                <label style={{fontSize:15 }} className="custom-control-label mx-2" for="customCheck1" > I Agree To "Terms And Conditions"</label>
              </div>
              <br />
            </form>

          </div>
          <button type="button" onClick={handleSubmit} className="btn  btn-primary btn-lg btn-block mx-4">Proceed</button>
        </div>
      </div>
    </>
  )
}

export default BookingPage