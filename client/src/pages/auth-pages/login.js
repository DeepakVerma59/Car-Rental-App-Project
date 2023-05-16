//page 1
import "../styles/login.css"
import React  from 'react';
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
       
        <div className="col-md-5">
            <form>
                <h3>Sign In To Your Account</h3>
                <input type='text' placeholder='Email'/><br/>
                <input type='password' placeholder='Password'/><br/>
                <a id="forgot-password" href="">Forgot Password</a><br/><br/>
                <button id="create-account">Create Account</button>
                <button id="sign-in">Sign IN</button>
            </form>
        </div>
        </div>
        </>
    )
}

export default Home;