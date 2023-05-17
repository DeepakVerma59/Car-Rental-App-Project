//page 1
import React ,{useState} from 'react';
import "../styles/login.css"
import Home from '../../components/Home';
import {useNavigate} from "react-router-dom"
import toast from "react-hot-toast";
import axios from 'axios';
function Login() {

    const navigate = useNavigate()
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
      
    const submitSignin=async(e)=>{
      e.preventDefault();
     //  console.log(name,email,password,phone,address)
     try{
      const res = await axios.post("http://localhost:5000/login",{
        email,password});
      if(res.data.success){
         toast.success(res.data.message);
         console.log(res.data.token)
      }
      else{
         toast.error(res.data.message);
      }
     }
     catch(err){
         console.log(err);
         toast.error("something went wrong")
     }
     }

    return(
        <>
        <Home/>
        <div className='row'>
        <div className='col-md-7 text-center'>
            <a href="/Register">Register</a><a href=''>Admin Login</a>
            </div>
        </div>
        <div className="col-md-5">
            <form method='post' onSubmit={submitSignin}>
                <h3>Sign In To Your Account</h3>
                <input type='text' value={email} onChange={e=>{setEmail(e.target.value)}} placeholder='Email'/><br/>
                <input type='password' value={password} onChange={e=>{setPassword(e.target.value)}} placeholder='Password'/><br/>
                <a id="forgot-password" href="/forgot-password">Forgot Password</a><br/><br/>
                <button id="create-account">Create Account</button>
                <button id="sign-in" type='submit'>Sign IN</button>
            </form>
        </div>

        </>
    )
}

export default Login;