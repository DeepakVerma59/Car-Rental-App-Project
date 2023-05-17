//page 1
import React  from 'react';
import "../styles/login.css"
import Home from '../../components/Home';
function Login() {




    return(
        <>
        <Home/>
        <div className='row'>
        <div className='col-md-7 text-center'>
            <a href="/Register">Register</a><a href=''>Admin Login</a>
            </div>
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

        </>
    )
}

export default Login;