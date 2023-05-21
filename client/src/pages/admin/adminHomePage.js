import { useState, useEffect } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import "../styles/adminhome.css"

const AdminHomePage = () => {

  const [products, setProducts] = useState([])

  const getAllProducts = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_PORT}/get-product`);
      setProducts(res.data.products)
    }
    catch (err) {
      console.log(err);
      toast.error("something went wrong")
    }
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <>
      <Header />
      <div className='main'>
        <h1>Hello Admin....</h1>
        <br />
        <div className="car" style={{fontWeight:"bold"}}>Cars</div>
        <Link to="/admin-addproducts">
          <button type="button" className=" button btn btn-primary">Add Cars</button></Link>
        <div>
          <br />
          <div className='d-flex flex-wrap m-3'>
            {products?.map(p => (
              <Link to={`/admin-editproducts/${p._id}`} key={p._id} style={{textDecoration:"none"}}>
              <div className="card" style={{ width:"15rem"}}>
                <img src={`${process.env.REACT_APP_PORT}/get-photo/${p._id}`} className="card-img-top" alt={p.name} style={{width:"auto",height:"100px"}}/>
                <div className="card-body">
                  <span style={{color:"gray",fontSize:"smaller"}}>6 persons</span>
                  <div>
                    <span style={{fontWeight:"bold"}}>{p.name}</span>
                    <span className='float-end' style={{fontWeight:"bold",color:"green"}}>{p.pricePerKm}₹/km</span>
                  </div>
                  <div>
                    <span style={{color:"gray",fontSize:"smaller"}}>available</span>
                    <span className='float-end'>{p.availableFrom}-{p.availableTill}</span>
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