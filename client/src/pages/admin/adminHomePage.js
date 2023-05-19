import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import "../styles/adminhome.css"

function AdminHomePage() {
  return (
    <>
    <Header/>
    <div className='main'>
    <h1>Hello Admin....</h1>
    <br/>
    <div className="car ">Cars</div>
<Link to="./addProducts.js">
<button type="button" className=" button btn btn-primary">Add Cars</button></Link>
 <div>
  <br/>
<div class="row row-cols-3 g-3 mt-2 ">
  <div class="col">
    <div class="card">
      <img src="../styles/images/15313ec8-9d19-47ec-80d0-09bba5219001.png" class="card-img-top"
        alt="car" />
      <div class="card-body">
        <span class="card-title">innova crysta</span>
        <span className='button'>100KM/Hour</span>
        <div>
        <span >Available from</span>
        <span className='button'>16 oct - 20 oct</span>
        </div>
      </div>
    </div>
  </div>
  </div>
      </div>
      </div>
    </>
  )
}

export default AdminHomePage
