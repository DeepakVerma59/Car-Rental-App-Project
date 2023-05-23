import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/orderCar.css"
import { useCar } from '../../context-api/carContaxt';
function OrderPageHeader() {
  const [orderHeader] = useCar()

  return (
    <div id='header'>
        <div className='container'>
          <form id="form" action="">

            <li className='Origin'
            > {orderHeader.origin}

              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
              </svg>

             {orderHeader.destination}</li>

            <li type="date" className="Origin"
            >{orderHeader.startDate}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
              </svg>
             {orderHeader.endDate}</li>


            <Link to="/user-bookingcheck" id="modify" onClick={""}>MODIFY</Link>
          </form>
          </div>
          </div>
  )
}
export default OrderPageHeader;