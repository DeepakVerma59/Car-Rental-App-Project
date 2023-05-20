import React ,{useState, useEffect}from "react"
import { Link ,useParams} from "react-router-dom"
import axios from "axios"
import "../styles/myBooking.css"
import UserHeader from "./userHeader"
import { useCar } from "../../context-api/carContaxt"
import toast from "react-hot-toast"
export default function MyBookings() {

    const [orderHeader, carData] = useCar()
   const params = useParams();
    const [value, setValue] = useState([])
    const getBookingProduct = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_PORT}/get-booking`)
            console.log(res.data.products)
            setValue(res.data.products)
            console.log(value)
        }
        catch (err) {
            toast.error(err)
        }
    }

    useEffect(() => {
        getBookingProduct();
    }, [])


    return <>
    
        <div id="outer">
            <UserHeader/>
            <p>My Booking </p>
            {
                value.map(v=>(
            
            <div className="bookings">
                <div id="myimg" className="smallerDiv" >
                    <img src={`${process.env.REACT_APP_PORT}/get-photo/${v.bookingId}`} width="250px" alt="img" />
                </div>

                <div id="car" className="smallerDiv">
                    <h6 >Name: {v.name}</h6>
                    <h6>HR 22N 6595</h6>
                    <h6>Details:{v.details} </h6>
                    <h6>Car Details:{v.carDetails}</h6>
                </div>

                <div className="smallerDiv">
                    <div><span id="booking-label">Origin:{v.origin} </span></div>
                    <div><span id="booking-label">Destination:{v.destination} </span></div>
                    <div> <span id="booking-label">Start Date:{v.startDate}</span></div>
                    <div><span id="booking-label">Start Date:{v.endDate} </span></div>
                </div>
                <div className="smallerDiv">
                    <img src="" alt="map is unable to render" id="Abcdefghijklmn" />
                </div>

                <div className="smallerDiv">
                    <h6> <span id="booking-label">Booking ID</span>:{v.bookingId}</h6>
                    <h6> <span id="booking-label">Booking Date</span>:{v.bookingDate}</h6>
                    <h6> <span id="booking-label" >Booking Time</span>:{v.bookingTime}</h6>
                </div>
                <div className="smallerDiv" >
                    <div className="buttons">
                        <Link to="user-bookingconfirm" id="edit-booking-button"><button>Edit</button></Link>
                        <button id="cancel-booking-button">Cancel</button>
                    </div>
                </div>
            </div>
            ))
            }
        </div>
    </>

}
