import React, { useState, useEffect } from "react"
import { Link, useParams,useNavigate } from "react-router-dom"
import axios from "axios"
import "../styles/myBooking.css"
import UserHeader from "./userHeader"
import { useCar } from "../../context-api/carContaxt"
import toast from "react-hot-toast"
import Map from "./map"
import { useAuth } from "../../context-api/auth-context"


export default function MyBookings() {
  const navigate = useNavigate()
  const [auth] = useAuth();
  const [orderHeader, carData] = useCar()
  const params = useParams();
  const [value, setValue] = useState([])
  const getBookingProduct = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_PORT}/get-booking`)
      console.log(res.data.products)
      // setValue(res.data.products)
      const filteredValue = res.data.products.filter(item => auth?.user.id === item.userId);
      setValue(filteredValue);
      console.log(value)
    }
    catch (err) {
      toast.error(err)
    }
  }

  useEffect(() => {
    getBookingProduct();
  },[])


  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${process.env.REACT_APP_PORT}/delete-booking/${id}`,
        {
          headers: {
            Authorization: `${auth?.token}`
          }
        })
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/user-homepage")
      }
    }
    catch (err) {
      toast.error("something went wrong")
    }
  }


  return <>

      <UserHeader />
    <div id="outer" className="allbg">
      <p>My Booking </p>
      {
        value?.map(v => (

          <div className="bookings">
            <div id="myimg" className="smallerDiv" >
              <img src={`${process.env.REACT_APP_PORT}/get-photo/${v.bookingId}`} width="250px" alt="img" />
            </div>

            <div id="car" className="smallerDiv">
            <h6><span id="booking-label">Name</span>: {v.name}</h6>
            <h6><span id="booking-label">Car No</span>: HR 22N 6595</h6>
            <h6><span id="booking-label">Details</span>: {v.details}</h6>
            <h6><span id="booking-label">Car Details</span>: {v.carDetails}</h6>
            </div>

            <div className="smallerDiv">
            <h6><span id="booking-label">Origin</span>: {v.origin}</h6>
            <h6><span id="booking-label">Destination</span>: {v.destination}</h6>
            <h6><span id="booking-label">Start Date</span>: {v.startDate}</h6>
            <h6><span id="booking-label">End Date</span>: {v.endDate}</h6>
            </div>

            {/* <div className="smallerDiv">
              <Map origin={v.origin} destination={v.destination} alt="map" />
            </div> */}

            <div className="smallerDiv">
              <h6> <span id="booking-label">Booking ID</span>: {(v.bookingId).slice(-10)}</h6>
              <h6> <span id="booking-label">Booking Date</span>: {v.bookingDate}</h6>
              <h6> <span id="booking-label" >Booking Time</span>: {v.bookingTime}</h6>
            </div>
            <div className="smallerDiv" >
              <div className="buttons">
                <Link to={`/user-editbooking/${v._id}`} id="edit-booking-button"><button className="newbtn">Edit</button></Link>
                <button className="newbtn px-3" id="cancel-booking-button" onClick={() => handleDelete(v._id)}>Cancel</button>
              </div>
            </div>
          </div>
        ))
      }
    </div>

  </>

}