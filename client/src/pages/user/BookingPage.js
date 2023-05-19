import React from 'react'
import "../styles/BookingDetails.css"
import UserHeader from './userHeader'
import car from "../styles/images/booking page car demo.png"
import map from "../styles/images/map demo.png"
import { Link } from 'react-router-dom'



function BookingPage() {
  return (
    <>
    <UserHeader/>
    
    <div>
<div className="card  card1 ">
  <div className="card-body mx-5" >
    <h5 className="card-title">Booking details</h5>
  
    <form >
<div className='text'>
  <div>
  <div className="form-group row mt-4 text ">
    <label for="carname" className="col-sm-4 col-form-label">Car name</label>
    <div className="col-sm-8">
      <input type="text"  className="form-control-plaintext " id="carname" value=""/>
    </div>
 
   
  </div>
  <div className="form-group row mt-4">
    <label for="CarNumber" className="col-sm-4 col-form-label">Car Number</label>
    <div className="col-sm-8 ">
      <input type="text" className="form-control-plaintext px-4" id="CarNumber" placeholder="KA 37 BB 9999"/>
    </div>
    </div>
  </div>
  <div className='democar'><img className="democar" src={car} alt="car" />  <Link to="/order-car"> <span class="bi bi-pencil style='color: black;'"> </span></Link></div>
  </div>
  <hr/>


<div className='text'>
<div>
  <div className="form-group row mt-2">
    <label for="origin" className="col-sm-4 col-form-label">Origin</label>
    <div className="col-sm-8">
      <input type="text"  className="form-control-plaintext" id="origin" value=""/>
    </div>
    </div>

  <div className="form-group row mt-2">
    <label for="destination" className="col-sm-5 col-form-label">Destination</label>
    <div className="col-sm-6">
      <input type="text"  className="form-control-plaintext" id="destination" value=""/>
    </div>
  </div>
  <div className="form-group row mt-2">
    <label for="startdate" className="col-sm-4 col-form-label">Start Date</label>
    <div className="col-sm-6">
      <input type="text"  className="form-control-plaintext" id="startdate" value=""/>
    </div>
  </div>
  <div className="form-group row mt-2">
    <label for="enddate" className="col-sm-4 col-form-label">End Date</label>
    <div className="col-sm-6">
      <input type="text"  className="form-control-plaintext" id="enddate" value=""/>
    </div>
  </div>
</div>
  <div className='democar'><img className="democar" src={map} alt="car" /><Link to="/order-car"> <span class="bi bi-pencil style='color: black;'"> </span></Link></div>
  </div>
  <hr/>
  <div className="form-group row mt-2">
    <label for="bookingid" className="col-sm-4 col-form-label">Booking ID</label>
    <div className="col-sm-6">
      <input type="text"  className="form-control-plaintext" id="bookingid" value="GOTAP6"/>
    </div>
  </div>
  <div className="form-group row mt-2">
    <label for="btime" className="col-sm-4 col-form-label">Booking Time</label>
    <div className="col-sm-6">
      <input type="text"  className="form-control-plaintext" id="btime" value=""/>
    </div>
  </div>
  <div className="form-group row mt-2">
    <label for="bdate" className="col-sm-4 col-form-label">Booking Date</label>
    <div className="col-sm-6">
      <input type="text"  className="form-control-plaintext" id="bdate" value=""/>
    </div>
  </div>
  

</form>
   
    
<button type="button" class="btn btn-outline-primary mt-4">Cancel</button>
  </div>
</div>



<div className="card card2 ">
  <div className="card-body mx-5" >
    <h5 className="card-title">Payment Details</h5>
  
    <form>
  <div className="form-group row mt-4 ">
    <label for="Priceperkm" className="col-sm-5 col-form-label">Price perkm</label>
    <div className="col-sm-5">
      <input type="text"  className="form-control-plaintext " id="Priceperkm" value=""/>
    </div>
  </div>
  
  <div className="form-group row mt-2">
    <label for="pricing" className="col-sm-5 col-form-label">Pricing</label>
    <div className="col-sm-5">
      <input type="text" className="form-control-plaintext" id="pricing" value=""/>
    </div>
  </div>
  
  <div className="form-group row mt-2">
    <label for="taxcharge" className="col-sm-5 col-form-label">Tax charges</label>
    <div className="col-sm-5">
      <input type="text"  className="form-control-plaintext" id="taxcharge" value=""/>
    </div>
  </div>
  <hr/>
  <div className="form-group row mt-2">
    <label for="subTotal" className="col-sm-5 col-form-label">Sub Total</label>
    <div className="col-sm-5">
      <input type="text"  className="form-control-plaintext" id="subTotal" value=""/>
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
<button type="button" className="btn  btn-primary btn-lg btn-block mx-4">Proceed</button>
</div>
</div>
    </>
        )
}

export default BookingPage
