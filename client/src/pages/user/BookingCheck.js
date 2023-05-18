//page 1
import React, {useState}  from 'react';
import {AiFillCar} from "react-icons/ai"
import "../styles/bookingcheck.css"
import toast from "react-hot-toast";
import axios from 'axios';


function BookingCheck() {

    const [startDate,setStartDate] = useState("");
    const [returnDate,setReturnDate] = useState("");
    const [origin,setOrigin] = useState("");
    const [destination,setDestination] = useState("");
      
    const submitCheck=async(e)=>{
      e.preventDefault();
     
     try{
      const res = await axios.get(`${process.env.REACT_APP_PORT}/get-product`,{
        startDate, returnDate,origin,destination});
      if(res.data.success){
         toast.success(res.data.message);
        
         console.log(res.data)
      }
      else{
         toast.error(res.data.message);
      }
     }
     catch(err){
         console.log(err);
         toast.error("something went wrong")
     }
     }



    return(
        <>
        <div className='booking-check-div'>
        <nav id="home-nav"><AiFillCar size={30}/><div class="nav-right"><button className='nav-button'>My Bookings</button><button className='nav-button'>Logout</button></div></nav>
        <div className="check-form">
            <form method='get' onSubmit={submitCheck}>
                <h3>Check For Available Car Option According To Your Choice</h3>
                <label htmlFor="">Start Date</label><br/>
                <input className='input-booking' type='date' value={startDate} onChange={e=>{setStartDate(e.target.value)}} placeholder='Start Date'/><br/>
                <label htmlFor="">Return Date</label><br/>
                <input className='input-booking' type='date' value={returnDate} onChange={e=>{setReturnDate(e.target.value)}} placeholder='Return Date'/><br/>
                <label htmlFor="">Origin</label><br/>
                <input className='input-booking' type='text' value={origin} onChange={e=>{setOrigin(e.target.value)}}  placeholder='Origin'/><br/>
                <label htmlFor="">Destination</label><br/>
                <input className='input-booking' type='text' value={destination} onChange={e=>{setDestination(e.target.value)}} placeholder='Destination'/><br/>
                <button id="check" type='submit'>Check</button>
            </form>
        </div>
        </div>
        </>
    )
}

export default BookingCheck;