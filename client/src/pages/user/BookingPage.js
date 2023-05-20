import React from 'react'
import "../styles/BookingDetails.css"
import UserHeader from './userHeader'
import { useCar } from '../../context-api/carContaxt'
import {Link} from "react-router-dom"
import OrderPageHeader from './orderpageheader/OrderPageHeader'



function BookingPage() {
  const [ orderHeader, carData] = useCar()
  const date = new Date();
  let day = date.getDate() +"/"+ date.getMonth()+"/"+date.getFullYear()
  let hour = parseInt(date.getHours())
  let ampm= hour==12 ?"AM":"PM"
  let time = hour +":"+date.getMinutes()+" "+ampm;
  
  const Distance=200
  const Pricing= 222//parseInt(CarData.perKm)
  const Subtotal=(Pricing*Distance)
  const Tax = parseInt((Subtotal)*0.18);
  const Total = Subtotal + Tax;
  return (
    <>
    <UserHeader/>
    <OrderPageHeader/>
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
      <input type="text" className="form-control" id="CarNumber" value={carData.pricePerKm}/>
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
      <input type="text"  className="form-control" id="bookingid" value="GOTAP6"/>
    </div>
  </div>
  <div className="form-group row mt-2">
    <label for="btime" className="col-sm-2 col-form-label">Booking Time</label>
    <div className="col-sm-5">
      <input type="text"  className="form-control" id="btime" value={time}/>
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
<Link to="/user-bookings"><button type="button" className="btn  btn-primary btn-lg btn-block mx-4">Proceed</button></Link>
</div>
</div>
    </>
        )
}

export default BookingPage