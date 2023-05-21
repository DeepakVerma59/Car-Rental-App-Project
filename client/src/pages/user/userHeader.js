import React from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { AiFillCar } from "react-icons/ai"
import { useAuth } from "../../context-api/auth-context";
import toast from "react-hot-toast"
import '../styles/userHeader.css'


const UserHeader = () => {
    const navigate = useNavigate()
    const [auth, setAuth] = useAuth();

    const handleLogout = () => {
        setAuth({
            user: null,
            token: ""
        })
        localStorage.removeItem(auth);
        toast.success("logout successful")
        navigate("/")  
     }
     const handleMyBooking=()=>{
        navigate("/user-bookings/:id")
      }

    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand"><AiFillCar size={40}/></Link>
                    <form className="d-flex px-5">
                        <button className="btn mx-4 btn-outline-success" type="submit" onClick={handleMyBooking}>My Bookings</button>
                        <button className="btn btn-outline-success" type="submit" onClick={handleLogout}>Logout</button>
                    </form>
                </div>
            </nav>

        </>
    )
}

export default UserHeader
