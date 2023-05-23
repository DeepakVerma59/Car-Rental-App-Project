import React from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { AiFillCar } from "react-icons/ai"
import { useAuth } from "../../context-api/auth-context";
import toast from "react-hot-toast"


const Header = () => {
    const navigate = useNavigate()
    const [auth, setAuth] = useAuth();

    const handleLogout = () => {
        setAuth({
            user: null,
            token: ""
        })
        localStorage.removeItem("auth");
        toast.success("logout successful")
         navigate("/admin-login")
     }
    return (
        <>
            <nav className="navbar navbar-primary bg-info">
                <div className="container-fluid">
                    <Link to="/admin-homepage" className="navbar-brand"><AiFillCar size={50}/></Link>
                    <form className="d-flex px-5">
                        <button className="btn btn-success" type="submit" onClick={handleLogout}>Logout</button>
                    </form>
                </div>
            </nav>
       
        </>
    )
}

export default Header
