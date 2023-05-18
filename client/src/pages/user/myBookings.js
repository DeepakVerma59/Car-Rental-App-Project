import React from "react"
import { Link } from "react-router-dom"
import "./myBooking.css"

export default function MyBookings() {


    return <>
        <div id="outer">
            <p>My Booking </p>
            <div className="bookings">
                <div id="myimg" className="smallerDiv" >
                    <img src="" width="250px" alt="img" />
                </div>

                <div id="car" className="smallerDiv">
                    <h6 >Name</h6>
                    <h6>Type</h6>
                    <h6>Details: </h6>
                    <h6>Car Details:</h6>
                </div>

                <div className="smallerDiv">
                    <div><span id="booking-label">Origin </span></div>
                    <div><span id="booking-label">Destination </span></div>
                    <div> <span id="booking-label">Start Date</span></div>
                    <div><span id="booking-label">Start Date </span></div>
                </div>
                <div className="smallerDiv">
                    <img src="" alt="map is unable to render" id="Abcdefghijklmn" />
                </div>

                <div className="smallerDiv">
                    <h6> <span id="booking-label">Booking ID</span>: </h6>
                    <h6> <span id="booking-label">Booking Date</span>:</h6>
                    <h6> <span id="booking-label" >Booking Time</span>:</h6>
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
