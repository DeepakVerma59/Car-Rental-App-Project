import React from 'react'
import "../styles/forgotpass.css"

const Forgotpassword = () => {
  return (
    <>
    <div className="container ">
	<div className="row ml-0">
    <h1>Reset password</h1>
		<div className="col-sm-4">
		    
		    <label>Current Password</label>
		    <div className="form-group pass_show"> 
                <input type="password"  className="form-control" placeholder="Current Password"/> 
            </div> 
		       <label>New Password</label>
            <div className="form-group pass_show"> 
                <input type="password" className="form-control" placeholder="New Password"/> 
            </div> 
		       <label>Confirm Password</label>
            <div className="form-group pass_show"> 
                <input type="password"  className="form-control" placeholder="Confirm Password"/> 
            </div> 
            
		</div>  
	</div>
</div></>
  )
}

export default Forgotpassword
