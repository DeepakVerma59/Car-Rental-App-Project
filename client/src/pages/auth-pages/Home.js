//page 1
import React  from 'react';
import "../styles/login.css"
import {AiFillCar} from "react-icons/ai"
function Home() {




    return(
        <>
        <nav id="home-nav"><AiFillCar size={30}/></nav>
        <div className='row'>
        <div className='col-md-7 text-center'>
            <p id='p1'>Best place get a car on rent</p>
            <p id='p2'>Let's Drive</p>
            <a href=''>Register</a><a href=''>Admin Login</a>
            </div>
        </div>
        </>
    )
}

export default Home;