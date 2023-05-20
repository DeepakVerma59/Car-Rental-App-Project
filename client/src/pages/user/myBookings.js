import React, { useEffect, useState } from "react"
import { Link ,useParams} from "react-router-dom"
import "../styles/myBooking.css"
import UserHeader from "./userHeader"
import { useCar } from "../../context-api/carContaxt"
import toast from "react-hot-toast"
import axios from "axios"

export default function MyBookings() {
 const params = useParams();
 const [value,setValue]=useState({})
 const [orderHeader,carData] = useCar()
    const getSingleProduct = async()=>{
        try{
       const res = await axios.get(`${process.env.REACT_APP_PORT}/get-product/${params.id}`)
       setValue(res.data.singleProduct)
       console.log(value)
        }
        catch(err){
            toast.error(err)
        }
    }

    useEffect(()=>{
        getSingleProduct();
    },[])

    return <>
   
        <div id="outer" key={value._id}>
            <UserHeader/>
            <p>My Booking </p>
            <div className="bookings">
                <div id="myimg" className="smallerDiv" >
                    <img src={`${process.env.REACT_APP_PORT}/get-photo/${params.id}`} width="250px" alt="img" />
                </div>

                <div id="car" className="smallerDiv">
                    <h6>Name:{value.name}</h6>
                    <h6>Type:{value.type}</h6>
                    <h6>Details:{value.details}</h6>
                    <h6>Car Details:{value.carDetails}</h6>
                </div>

                <div className="smallerDiv">
                    <div><span id="booking-label">Origin:{orderHeader.origin} </span></div>
                    <div><span id="booking-label">Destination:{orderHeader.destination} </span></div>
                    <div> <span id="booking-label">Start Date:{orderHeader.startDate}</span></div>
                    <div><span id="booking-label">Start Date:{orderHeader.endDate} </span></div>
                </div>
                <div className="smallerDiv">
                    <img src="" alt="map is unable to render" id="Abcdefghijklmn" />
                </div>

                <div className="smallerDiv">
                    <h6> <span id="booking-label">Booking ID</span>:{value._id} </h6>
                    <h6> <span id="booking-label">Booking Date</span>:{orderHeader.bookingDate}</h6>
                    <h6> <span id="booking-label" >Booking Time</span>:{orderHeader.bookingTime}</h6>
                </div>
                <div className="smallerDiv" >
                    <div className="buttons">
                        <Link to="" id="edit-booking-button"><button>Edit</button></Link>
                        <button id="cancel-booking-button">Cancel</button>
                    </div>
                </div>
            </div>
        </div>

    </>

}
