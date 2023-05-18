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
        localStorage.removeItem(auth);
        toast.success("logout successful")
        navigate("/")  
     }
    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand"><AiFillCar/></Link>
                    <form className="d-flex px-5">
                        <button className="btn btn-outline-success" type="submit" onClick={handleLogout}>Logout</button>
                    </form>
                </div>
            </nav>

        </>
    )
}

export default Header
