import React from 'react'
import Header from '../admin/Header'
import Options from './Options'
import { Link } from 'react-router-dom'
import "../styles/adminhome.css"

function Ordercar() {
  return (
    <>
    <Header/>
    <Options/>

    <div class="row row-cols-3 g-3 mt-2 pl-2">
  <div class="col">
    <div class="card">
      <img src="../styles/images/15313ec8-9d19-47ec-80d0-09bba5219001.png" class="card-img-top"
        alt="car" />
      <div class="card-body">
        <div>
        <span class="card-title">innova crysta</span>
        <span className='button'>100KM/Hour</span></div>
        <div className='mt-2 '>
        <span className='pl-4'>Fare Details</span>
        <Link to="./BookingPage.js">
<button type="button" className=" button btn btn-primary">Book Now</button></Link>
        </div>
      </div>
    </div>
  </div>

  </div>
    </>
  )
}

export default Ordercar
