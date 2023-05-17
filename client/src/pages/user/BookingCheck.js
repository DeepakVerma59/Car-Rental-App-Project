//page 1
import React  from 'react';
//import "../styles/login.css"
import {AiFillCar} from "react-icons/ai"
import "../styles/bookingcheck.css"

function BookingCheck() {




    return(
        <>
        <div className='row'>
        <nav id="home-nav"><AiFillCar size={30}/><button id='my-bookings'>My Bookings</button><button id='logout'>Logout</button></nav>
        <div className="col-md-5">
            <form>
                <h3>Check For Available Car Option According To Your Choice</h3>
                <label htmlFor="">Start Date</label>
                <input type='date' placeholder='Start Date'/><br/>
                <label htmlFor="">Return Date</label>
                <input type='date' placeholder='Return Date'/><br/>
                <label htmlFor="cars-model">Car Model</label>
                <select name="cars-model" id="cars-model">
                    <option value="SUV">SUV</option>
                    <option value="XUV">XUV</option>
                    <option value="Sedan">Sedan</option>
                </select><br/>
                <button id="check">Check</button>
            </form>
        </div>
        </div>
        </>
    )
}

export default BookingCheck;