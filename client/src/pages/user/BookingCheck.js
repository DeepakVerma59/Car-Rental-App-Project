
import React, {useContext, useState}  from 'react';

import "../styles/bookingcheck.css"
import UserHeader from './userHeader';
import { Link ,useNavigate} from 'react-router-dom';
import { useCar } from '../../context-api/carContaxt';


function BookingCheck() {

    const navigate = useNavigate()
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [origin, setOrigin] = useState('')
    const [destination, setDestination] = useState('')
    const [orderHeader,setOrderHeader] = useCar()

    function submitCheck(e){
        e.preventDefault();
    setOrderHeader({
        ...orderHeader,
        startDate:startDate,
        endDate:endDate,
        origin:origin,
        destination:destination
    })
    localStorage.setItem("order", JSON.stringify({startDate,endDate,origin,destination}));
    navigate('/user-homepage')
}


    return(
        <>
            <UserHeader/>
        <div className='booking-check-div allbg '>
        {/*<nav id="home-nav"><AiFillCar size={30}/><div class="nav-right"><button className='nav-button' onClick={handleMyBooking}>My Bookings</button><button className='nav-button' onClick={handleLogout} >Logout</button></div></nav>*/}
        <div className="check-form bg">
            <form method='post' onSubmit={submitCheck}>
                <h3>Check For Available Car Option According To Your Choice</h3>
                <label htmlFor="">Start Date</label><br/>
                <input className='input-booking' required name='StartDate'value={startDate} type='date' onChange={(e)=>{setStartDate(e.target.value)}} placeholder='Start Date'/><br/>
                <label htmlFor="">Return Date</label><br/>
                <input className='input-booking' required name='EndDate' value={endDate} type='date' onChange={(e)=>{setEndDate(e.target.value)}}   placeholder='Return Date'/><br/>
                <label htmlFor="">Origin</label><br/>
                <input className='input-booking' required name='Origin' value={origin} type='text' onChange={(e)=>{setOrigin(e.target.value)}} placeholder='Origin'/><br/>
                <label htmlFor="">Destination</label><br/>
                <input className='input-booking' name='Destination' required value={destination} type='text' onChange={(e)=>{setDestination(e.target.value)}} placeholder='Destination'/><br/>
                <button id="check" type='submit'>Check</button>
            </form>
        </div>
        </div>
       {/*} <OrderPageHeader startDate={startDate} endDate={endDate} origin={origin} destination={destination} />*/}
        </>
    )
}

export default BookingCheck;