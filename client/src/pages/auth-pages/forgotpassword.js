import { useState} from "react"
import {Link,useNavigate} from "react-router-dom"
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../../context-api/auth-context";
import "../styles/login.css"
import Home from "./Home";

const Forgotpassword = () => {
  const navigate = useNavigate();
  const [auth,setAuth] = useAuth();
 
 const [email,setEmail] = useState("");
 const [newPassword,setNewPassword] = useState("");
 const [loader,setLoader] = useState(false)
 
 const submitData=async(e)=>{
  e.preventDefault();
  setLoader(true)
 //  console.log(name,email,password,phone,address)
 try{
  const res = await axios.post(`${process.env.REACT_APP_PORT}/forgot-password`,{email,newPassword});
 
  if(res.data.success){
     toast.success(res.data.message);
     setAuth({
       ...auth,
       user:res.data.user,
       token:res.data.token
     })
     localStorage.setItem("auth",JSON.stringify(res.data));
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
  <div className="main-container">
    <Home/>
  <div className='div-2'>
  <h3 id=''>User Reset Password</h3>
  <form className='info form' onSubmit={submitData}>
  

<div className="mb-3">
<label>Email</label><br/>
 <input type="email" className="input"  placeholder='enter your email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
</div>


<div className="mb-3">
<label>New Password</label><br/>
 <input type="password" className="input"  placeholder='enter your new password' value={newPassword} onChange={(e)=>setNewPassword(e.target.value)}/>
</div>

{/* <span onClick={()=>navigate("/forgot-password")} style={{fontSize:"medium",cursor:"pointer"}}>Forgot Password?</span>  */}

<div className="btn-container">
<Link to="/"><button className='sign-in'>Sign In</button></Link>
<button type="submit" className="register mx-5">{loader?<div id= "spinner"></div> :"RESET"}</button>
</div>
</form>
 </div>
 </div>
)
}

export default Forgotpassword
