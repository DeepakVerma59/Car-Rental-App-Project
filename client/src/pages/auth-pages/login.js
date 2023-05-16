//page 1
import React  from 'react';
import "../styles/login.css"
import {AiFillCar} from "react-icons/ai"
import Home from './Home';
function Login() {




    return(
        <>
        <Home/>
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

        </>
    )
}

export default Login;