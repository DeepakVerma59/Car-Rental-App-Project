import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../styles/adminhome.css"
import UserHeader from './userHeader'
import { useAuth } from "../../context-api/auth-context"
import { useCar } from '../../context-api/carContaxt'
import toast from "react-hot-toast"
import axios from 'axios'


function Ordercar() {

  const navigate = useNavigate()
  const [auth] = useAuth();
  const [orderHeader, setOrderHeader, carData, setCarData] = useCar()
  let [data, setdata] = useState([])
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
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
              </svg>

              D: {orderHeader.destination}</li>

            <li type="date" className="Origin"
            >S: {orderHeader.startDate}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
              </svg>
              E: {orderHeader.endDate}</li>


            <Link to="/user-bookingcheck" id="modify" onClick={""}>MODIFY</Link>
          </form>

        </div>
      </div>
      <div className='header'>
        <div className="dropdown">
          <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
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
            <li><Link className="dropdown-item" to="#">6 seater</Link></li>
            <li><Link className="dropdown-item" to="#">8 seater</Link></li>
            <li><Link className="dropdown-item" to="#">All</Link></li>
          </ul>
        </div>

        <div className="dropdown">
          <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
            Milage
          </button>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#">15 KM/Hour</Link></li>
            <li><Link className="dropdown-item" to="#">12 KM/Hour</Link></li>
            <li><Link className="dropdown-item" to="#">All</Link></li>
          </ul>
        </div>
      </div>
      <div className='d-flex flex-wrap' style={{marginLeft:"90px"}}>
      {
        data.map(d => (
          <div key={d._id}>
            <div className="row ">
              <div className="col ">
                <div className="card">
                  <img style={{width:"250px",height:"166px"}} className="card-img-top" src={`${process.env.REACT_APP_PORT}/get-photo/${d._id}`} alt="car" />
                  <div className="card-body">
                    <div>
                      <span className="card-title" >{d.name}</span>
                      <span className='button'>{d.pricePerKm}/ Km</span></div>
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