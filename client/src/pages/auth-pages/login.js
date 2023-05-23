//page 1
import React, { useEffect, useState } from 'react';
import "../styles/login.css"
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useAuth } from "../../context-api/auth-context";
import toast from "react-hot-toast"
import Home from './Home';

function Login() {
    const navigate = useNavigate()
    const [auth, setAuth] = useAuth()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loader,setLoader] = useState(false)

    const submitSignin = async (e) => {
        e.preventDefault();
        setLoader(true);
        //  console.log(name,email,password,phone,address)
        try {
            const res = await axios.post(`${process.env.REACT_APP_PORT}/login`, {
                email, password
            });
            if (res.data.success) {
                toast.success(res.data.message);
                console.log(res.data.token)
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token
                })
                localStorage.setItem("auth", JSON.stringify(res.data));
                navigate("/user-bookingcheck")
            }
            else {
                toast.error(res.data.message);
            }
        }
        catch (err) {
            console.log(err);
            toast.error("something went wrong")
        }
    }

    window.onpopstate = () => {
        navigate("/");
      }

    return (
        <>
       
        <div className='main-container'>
            <Home/>
            <h3 className='heading'>
                <small className="text-muted display-6">The perfect car for your next trip is just around the corner...</small>

              </h3>

              <div class="wrapper one">
        <div class="drop-main">
            <div class="d">BOOK &nbsp;</div>
            <div class="r">YOUR &nbsp;</div>
            <div class="o">RIDE &nbsp; </div>
            <div class="p">NOW &nbsp; </div>
            <div class="s">!</div>
        </div>
    </div>



        <div classNameName='row'>
        <div className='col-md-7 text-center div-1'>
            <Link to="/register">User SignUp</Link><Link to='/'>User SignIn</Link>
            </div>
       
            <div className='col-md-7 text-center div-1'>
            <Link to="/admin-register">Admin SignUp</Link><Link to='/admin-login'>Admin SignIn</Link>
            </div>
        </div>
        <div className="col-md-5 div-2">
            <form method='post' onSubmit={submitSignin}>
                <h3 id='sign-in-div'> User Sign In </h3><br/>
                <label>Email</label><br/>
                <input type='text' value={email} onChange={e=>{setEmail(e.target.value)}} placeholder='Email'/><br/>
                <label>Password</label><br/>
                <input type='password' value={password} onChange={e=>{setPassword(e.target.value)}} placeholder='Password'/><br/>
                <Link to="/forgot-password" style={{textDecoration:"none"}}><span>Forgot Password</span></Link><br/>
                <Link to="/register"><button id="create-account" className='mt-4' >Create Account</button></Link>
                <button id="sign-in" type='submit'>{loader?<div id= "spinner"></div> :"SIGN IN"}</button>
            </form>
        </div>
        </div>

        </>
    )
}

export default Login;