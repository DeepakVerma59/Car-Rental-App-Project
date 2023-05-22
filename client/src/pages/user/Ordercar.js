import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../styles/orderCar.css"
import UserHeader from './userHeader'
import { useAuth } from "../../context-api/auth-context"
import { useCar } from '../../context-api/carContaxt'
import toast from "react-hot-toast"
import axios from 'axios'
import OrderPageHeader from './OrderPageHeader'


function Ordercar() {

  const navigate = useNavigate()
  const [auth] = useAuth();
  const [orderHeader, setOrderHeader, carData, setCarData] = useCar()
  let [data, setdata] = useState([])
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [origin, setOrigin] = useState('')
  const [destination, setDestination] = useState('')
  const [filter,setFilter] = useState({
    XUV:false,
    UV:false,
    ALL:true
  })
  async function getProduct() {
    try {
      const res = await axios.get(`${process.env.REACT_APP_PORT}/get-product`, {
        headers: {
          Authorization: `${auth?.token}`
        }
      });
      if (res.data.success) {
        toast.success(res.data.message);
        if(filter.XUV==true){
        let filteredData = res.data.products.filter(item=>item.type=="XUV")
        setdata(filteredData);
      }
      else if(filter.UV==true){
        let filteredData = res.data.products.filter(item=>item.type=="UV")
        setdata(filteredData)
      }
      else if(filter.ALL==true){
        setdata(res.data.products)
      }
      else{
        setdata(res.data.products)
      }
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
  useEffect(() => {
    getProduct();
  }, [filter])



  const bookNow = (data) => {
    console.log(data.photo)
    setCarData(data);
    localStorage.setItem("cardata",JSON.stringify(data))
    navigate("/user-bookingconfirm")
  }

  return (
    <>
      <UserHeader />
     <OrderPageHeader/>
      <div className='header head'>
        <div className="dropdown">
          <button type="button" className="btn button btn-primary dropdown-toggle" data-bs-toggle="dropdown">
            Car Type
          </button>
          <ul className="dropdown-menu">
            <li onClick={()=>setFilter({...filter,XUV:true,ALL:false})}>XUV</li>
            <li onClick={()=>setFilter({...filter,UV:true,XUV:false})}>UV</li>
            <li onClick={()=>setFilter({...filter,UV:false,ALL:true})}>All</li>
          </ul>
        </div>

        <div className="dropdown">
          <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
            Seating
          </button>
          <ul className="dropdown-menu">
            <li>6 seater</li>
            <li>8 seater</li>
            <li>All</li>
          </ul>
        </div>

        <div className="dropdown">
          <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
            Milage
          </button>
          <ul className="dropdown-menu">
            <li>15 KM/Hour</li>
            <li>12 KM/Hour</li>
            <li>All</li>
          </ul>
        </div>
      </div>
      
        <div className='d-flex flex-wrap' style={{marginLeft:"90px"}}>
          {
        data.map(d => (
          <div key={d._id}>
            <div className="row m-3">
              <div className="col">
                <div className="card">
                  <img className="card-img-top" src={`${process.env.REACT_APP_PORT}/get-photo/${d._id}`} alt="car" style={{width:"250px",height:"166px"}}/>
                  <div className="card-body">
                    <div>
                      <span className="card-title" style={{fontWeight:"bold",fontSize:"large"}} >{d.name}</span>
                      <span className='button' style={{color:"green",fontWeight:"bold"}}>{d.pricePerKm} ₹/Km</span></div>
                    <div className='mt-2 '>
                      <span className='pl-4'>Fare Details</span>
                      <button type="button" className=" button btn btn-primary" onClick={() => bookNow(d)}>Book Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
  </div>
    </>
  )
        }
export default Ordercar