import { useState, useEffect } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context-api/auth-context'
import axios from 'axios'
import toast from 'react-hot-toast'
import "../styles/adminhome.css"

const AdminHomePage = () => {

  const [auth,setAuth] = useAuth()
  const [products, setProducts] = useState([])

  const getAllProducts = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_PORT}/get-product`);
      const filteredData = res.data.products.filter(item=>auth?.user.id==item.adminId)
      setProducts(filteredData)
    }
    catch (err) {
      console.log(err);
      toast.error("something went wrong")
    }
  }

  useEffect(() => {
    getAllProducts()
  }, [products])

  return (
    <>
      <Header />
      <div className='main allbg' style={{marginLeft:"100px"}}>
      <h1> Welcome Admin...</h1>
        <div className="car" style={{fontWeight:"bold"}}>Cars</div>
        <Link to="/admin-addproducts">
          <button type="button" className=" button btn btn-primary">Add Cars</button></Link>
        <div>
          <br />
          <div className='d-flex flex-wrap m-3'>
            {products?.map(p => (
              <Link to={`/admin-editproducts/${p._id}`} key={p._id} style={{textDecoration:"none"}}>
              <div className="card">
                <img src={`${process.env.REACT_APP_PORT}/get-photo/${p._id}`} className="card-img-top" alt={p.name} style={{width:"240px",height:"135px"}}/>
                <div className="card-body">
                  <span style={{color:"gray",fontSize:"smaller"}}>6 persons</span>
                  <div>
                    <span style={{fontWeight:"bold"}}>{p.name}</span>
                    <span className='float-end' style={{fontWeight:"bold",color:"green"}}>{p.pricePerKm}₹/km</span>
                  </div>
                  <div>
                    <span style={{color:"gray",fontSize:"smaller"}}>available:&nbsp;</span>
                    <span className='float-end' style={{fontWeight:"bold"}}>{p.availableFrom} to {p.availableTill}</span>
                  </div>
                </div>
              </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminHomePage