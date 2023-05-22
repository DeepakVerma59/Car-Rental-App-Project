import React from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { AiFillCar } from "react-icons/ai"
import { useAuth } from "../../context-api/auth-context";
import toast from "react-hot-toast"


const UserHeader = () => {
    const navigate = useNavigate()
    const [auth, setAuth] = useAuth();

    const handleLogout = () => {
        localStorage.clear()
        toast.success("logout successful")  
        navigate("/")
        // function preventBack() { window.history.forward(); }
        // setTimeout(preventBack(), 0);
        // window.onunload = function () { null };
     }
     const handleMyBooking=()=>{
        navigate("/user-bookings/:id")
      }

    return (
        <>
            <nav className="navbar navbar-light" style={{backgroundColor: "#e3f2fd"}}>
                <div className="container-fluid">
                    <Link to="/user-bookingcheck" className="navbar-brand"><AiFillCar size={50}/></Link>
                    <form className="d-flex px-5">
                        <button className="btn mx-4 btn-success" type="submit" onClick={handleMyBooking}>My Bookings</button>
                        <button className="btn btn-success" type="submit" onClick={handleLogout}>Logout</button>
                    </form>
                </div>
            </nav>

        </>
    )
}

export default UserHeader
