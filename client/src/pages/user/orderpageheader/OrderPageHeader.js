import React from 'react';
import { Link } from 'react-router-dom';
import './orderPageHeader.css'
import { useCar } from '../../../context-api/carContaxt';
function OrderPageHeader() {
  const [orderHeader] = useCar()

  return (
    <div id='header'>
      <div className='container'>
        <form id="form" action="">

          <li className='Origin'
          >Origin :{orderHeader.origin}</li>

          <i className="fa-solid fa-arrow-right  arrow" style={{ color: "#4279cd" }}></i>

          <li className="Origin"
          >Destination :{orderHeader.destination}</li>

          <li type="date" className="Origin"
          >Starting from :{orderHeader.startDate}</li>

          <li type="date" className="Origin"
          >Ending :{orderHeader.endDate}</li>


          <Link to="/booking-check" id="modify" onClick={''}>Edit</Link>
        </form>

      </div>
    </div>
  )
}
export default OrderPageHeader;