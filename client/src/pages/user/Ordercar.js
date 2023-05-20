import React, { useEffect, useState } from 'react'

import Options from './Options'
import { Link,useNavigate } from 'react-router-dom'
import "../styles/adminhome.css"
import UserHeader from './userHeader'
import { useAuth } from "../../context-api/auth-context"
import { useCar } from '../../context-api/carContaxt'
import toast from "react-hot-toast"
import axios from 'axios'


function Ordercar() {

  const navigate = useNavigate()
  const [auth] = useAuth();
  const [orderHeader,setOrderHeader,carData,setCarData]= useCar()
  let [data, setdata] = useState([])
 async function getProduct(){
  try {
    const res = await axios.get(`${process.env.REACT_APP_PORT}/get-product`, {
      headers: {
        Authorization: `${auth?.token}`
      }
    });
    if (res.data.success) {
      toast.success(res.data.message);
      setdata(res.data.products)
      console.log(res.data.products)
      
    }
    else {
      toast.error(res.data?.message)
    }
  } catch (err) {
    console.log(err);
    toast.error("something went wrong")
  }
  
 }
 useEffect(()=>{
    getProduct();
 },[])


 const bookNow =(data)=>{
  setCarData(data);
  navigate("/user-bookingconfirm")
 }

  return (
    <>
      <UserHeader />
      <div id='header'>
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


          <Link to="/user-bookingcheck" id="modify" onClick={""}>MODIFY</Link>
        </form>

      </div>
    </div>
      <Options />
      {
        data.map(d => (
           <div key={d._id}>
            <div className="row row-cols-3 g-3 mt-2 pl-2">
              <div className="col">
                <div className="card">
                  <img  className="card-img-top" src={`${process.env.REACT_APP_PORT}/get-photo/${d._id}`}  alt="car" />
                  <div className="card-body">
                    <div>
                      <span className="card-title" >{d.name}</span>
                      <span className='button'>{d.pricePerKm}/ Km</span></div>
                    <div className='mt-2 '>
                      <span className='pl-4'>Fare Details</span>
                      <button type="button" className=" button btn btn-primary" onClick={()=>bookNow(d)}>Book Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  )
}

export default Ordercar