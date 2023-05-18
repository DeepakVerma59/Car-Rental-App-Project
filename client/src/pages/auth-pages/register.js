//registration form
import React, { useState } from 'react'
import "../styles/register.css"
import Home from '../../components/Home'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import toast from "react-hot-toast";

function Register() {
  const navigate = useNavigate()
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [contact,setContact] = useState("");
    
  const submitData=async(e)=>{
    e.preventDefault();
   //  console.log(name,email,password,phone,address)
   try{
    const res = await axios.post(`${process.env.REACT_APP_PORT}/register`,{
       name,email,password,contact});
    if(res.data.success){
       toast.success(res.data.message);
       navigate("/")
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
    
  return (
    <>
  
    <div className=".main-container">
    <h3>Register in your account</h3>
      <form  className='div-2' action='/register' method='post' onSubmit={submitData}>
        <div>
        <input className="input" type='text' placeholder='Name' value={name} onChange={e=>{setName(e.target.value)}}/>
        </div>
        <div>
        <input className="input" type='text' value={email} onChange={e=>{setEmail(e.target.value)}}/>
        </div>
        <div>
        <input className="input" type='number' value={contact} onChange={e=>{setContact(e.target.value)}} placeholder='Contact' maxLength={10}/>
        </div>
        <div>
        <input className="input" type='password' value={password} onChange={e=>{setPassword(e.target.value)}} placeholder='Password'/>
        </div>
        <div>
        <input className="input" type='password' id='confirm password' placeholder='Confirm Password'/>
        </div>
        <div>
        <button className='sign-in'>Sign In</button>
        <button className='submit' type='submit'>Register</button>
        </div>
      </form>
      </div>
    </>
  )
}

export default Register
