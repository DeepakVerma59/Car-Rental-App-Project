import React, { useEffect, useState } from 'react'
import Options from './Options'
import { Link,useNavigate } from 'react-router-dom'
import "../styles/adminhome.css"
import UserHeader from './userHeader'
import { useAuth } from "../../context-api/auth-context"
import { useCar } from '../../context-api/carContaxt'
import toast from "react-hot-toast"
import axios from 'axios'
import OrderPageHeader from './orderpageheader/OrderPageHeader'


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
      <OrderPageHeader/>
      <Options />
      {
        data.map(d => (
           <div key={d._id}>
            <div className="row row-cols-3 g-3 mt-2 pl-2">
              <div className="col">
                <div className="card ">
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