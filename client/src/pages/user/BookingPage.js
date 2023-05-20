import React, { useEffect, useState } from 'react'
import "../styles/BookingDetails.css"
import UserHeader from './userHeader'
import { useCar } from '../../context-api/carContaxt'
import {Link, useNavigate} from "react-router-dom"
import toast from 'react-hot-toast'
import axios from 'axios'
import { useAuth } from "../../context-api/auth-context"
import OrderPageHeader from './orderpageheader/OrderPageHeader'

function BookingPage() {
  const [auth] = useAuth(); 

  const navigate = useNavigate()
  const [ orderHeader, setOrderHeader,carData,setCarData] = useCar()
  
  const date = new Date();
  let day = date.getDate() +"/"+ date.getMonth()+"/"+date.getFullYear()
  let hour = parseInt(date.getHours())
  let ampm= hour===12 ?"AM":"PM"
  let time = hour +":"+date.getMinutes()+" "+ampm;
  
  const Distance=Math.floor(Math.random()*300)
  const Pricing= parseInt(carData.pricePerKm)
  const Subtotal=(Pricing*Distance)
  const Tax = parseInt((Subtotal)*0.18);
  const Total = Subtotal + Tax;

  const handleSubmit =async(e)=>{
    e.preventDefault();
    try{
      const bookingData = new FormData()
        bookingData.append("name",carData.name);
        bookingData.append("carDetails",carData.carDetails);
        bookingData.append("details",carData.details);
        bookingData.append("origin",orderHeader.origin);
        bookingData.append("destination",orderHeader.destination);
        bookingData.append("startDate",orderHeader.startDate);
        bookingData.append("endDate",orderHeader.endDate);
        bookingData.append("bookingId",carData._id);
        bookingData.append("bookingDate",day);
        bookingData.append("bookingTime",time);
        bookingData.append("pricePerKm",carData.pricePerKm);
        
        
    const res = await axios.post(`${process.env.REACT_APP_PORT}/create-booking` ,bookingData,
    {headers:
      {Authorization:`${auth?.token}`}})
  
    if(res.data.success){
      toast.success("booking created successfully");
      navigate(`/user-bookings/${carData._id}`);
    }
    else{
      toast.error(res.data?.message)
    }
    }
    catch(err){
      console.log(err)
      toast.error("something went wrong");

    }
  }
  return (
    <>
    <UserHeader/>
    <OrderPageHeader/>
    {/* <div id='header'>
      <div className='container'>
        <form id="form" action="">

          <li className='Origin'
          >O: {orderHeader.origin}

        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
        </svg>

           D: {orderHeader.destination}</li>

          <li type="date" className="Origin"
          >S: {orderHeader.startDate} 
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
             </svg>
          E: {orderHeader.endDate}</li>


          <Link to="/user-bookingcheck" id="modify" onClick={''}>MODIFY</Link>
        </form>

      </div> */}
    {/* </div> */}
    <div>
<div className="card  card1 ">
  <div className="card-body mx-5" >
    <h5 className="card-title">Booking details</h5>
  
    <form >
  <div className="form-group row mt-4 ">
    <label for="carname" className="col-sm-2 col-form-label">Car name</label>
    <div className="col-sm-5">
      <input type="text"  className="form-control " id="carname" value={carData.name}/>
    </div>
  </div>
  <div className="form-group row mt-4">
    <label for="CarNumber" className="col-sm-2 col-form-label">Car Number</label>
    <div className="col-sm-5">
      <input type="text" className="form-control" id="CarNumber" value="HR 22N 6595"/>
    </div>
  </div>
  <hr/>
  <div className="form-group row mt-2">
    <label for="origin" className="col-sm-2 col-form-label">Origin</label>
  
    <div className="col-sm-5">
      <input type="text"  className="form-control" id="origin" value={orderHeader.origin}/>
    </div>
    </div>

  <div className="form-group row mt-2">
    <label for="destination" className="col-sm-2 col-form-label">Destination</label>
    <div className="col-sm-5">
      <input type="text"  className="form-control" id="destination" value={orderHeader.destination}/>
    </div>
  </div>
  <div className="form-group row mt-2">
    <label for="startdate" className="col-sm-2 col-form-label">Start Date</label>
    <div className="col-sm-5">
      <input type="text"  className="form-control" id="startdate" value={orderHeader.startDate}/>
    </div>
  </div>
  <div className="form-group row mt-2">
    <label for="enddate" className="col-sm-2 col-form-label">End Date</label>
    <div className="col-sm-5">
      <input type="text"  className="form-control" id="enddate" value={orderHeader.endDate}/>
    </div>
  </div>
  <hr/>
  <div className="form-group row mt-2">
    <label for="bookingid" className="col-sm-2 col-form-label">Booking ID</label>
    <div className="col-sm-5">
      <input type="text"  className="form-control" id="bookingid" value={carData._id}/>
    </div>
  </div>
  <div className="form-group row mt-2">
    <label for="btime" className="col-sm-2 col-form-label">Booking Time</label>
    <div className="col-sm-5">
      <input type="text"  className="form-control" id="btime"  value={time}/>
    </div>
  </div>
  <div className="form-group row mt-2">
    <label for="bdate" className="col-sm-2 col-form-label">Booking Date</label>
    <div className="col-sm-5">
      <input type="text"  className="form-control" id="bdate" value={day}/>
    </div>
  </div>
  

</form>
   
    
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
      <input type="text"  className="form-control " id="Priceperkm" value={Pricing}/>
    </div>
  </div>
  
  <div className="form-group row mt-2">
    <label for="pricing" className="col-sm-5 col-form-label">Distance</label>
    <div className="col-sm-5">
      <input type="text" className="form-control" id="pricing" value={Distance}/>
    </div>
  </div>
  
  <div className="form-group row mt-2">
    <label for="taxcharge" className="col-sm-5 col-form-label">Tax charges</label>
    <div className="col-sm-5">
      <input type="text"  className="form-control" id="taxcharge" value="18%"/>
    </div>
  </div>
  <hr/>
  <div className="form-group row mt-2">
    <label for="subTotal" className="col-sm-5 col-form-label">Total</label>
    <div className="col-sm-5">
      <input type="text"  className="form-control" id="subTotal" value={Total}/>
    </div>
  </div>
<br/>
<br/>
  <div className="custom-control custom-checkbox">
  <input type="checkbox" className="custom-control-input" id="customCheck1"/>
  <label className="custom-control-label mx-2" for="customCheck1">check me</label>
</div>
<br/>
</form>

</div>
<button type="button" onClick={handleSubmit} className="btn  btn-primary btn-lg btn-block mx-4">Proceed</button>
</div>
</div>
    </>
        )
}

export default BookingPage