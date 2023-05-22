import React, { useState, useEffect } from 'react'
import Header from './Header'
import { useAuth } from "../../context-api/auth-context"
import { Link, useNavigate, useParams } from 'react-router-dom'
import toast from "react-hot-toast"
import axios from "axios"
import "../styles/products.css"
import { Select } from 'antd';
const { Option } = Select;

const EditProducts = () => {

  const navigate = useNavigate()
  const params = useParams()
  const [auth] = useAuth();

  const [id, setId] = useState("")
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [model, setModel] = useState("");
  const [mileage, setMileage] = useState("");
  const [pricePerKm, setPricePerKm] = useState("");
  const [availableFrom, setAvailableFrom] = useState("");
  const [availableTill, setAvailableTill] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const [carDetails, setCarDetails] = useState("");
  const [details, setDetails] = useState("");

  const getSingleProduct = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_PORT}/get-product/${params.id}`);
      setId(res.data.singleProduct._id)
      setName(res.data.singleProduct.name)
      setType(res.data.singleProduct.type)
      setModel(res.data.singleProduct.model)
      setMileage(res.data.singleProduct.mileage)
      setPricePerKm(res.data.singleProduct.pricePerKm)
      setAvailableFrom(res.data.singleProduct.availableFrom)
      setAvailableTill(res.data.singleProduct.availableTill)
      setDescription(res.data.singleProduct.description)
      setCarDetails(res.data.singleProduct.carDetails)
      setDetails(res.data.singleProduct.details)
      
    }
    catch (err) {
      console.log(err)
      toast.error("something went wrong")
    }
  }

  useEffect(() => {
    getSingleProduct();
  }, [])


  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData()
      productData.append("adminId",auth.user.id)
      productData.append("name", name);
      productData.append("type", type);
      productData.append("model", model);
      productData.append("mileage", mileage);
      productData.append("pricePerKm", pricePerKm);
      productData.append("availableFrom", availableFrom);
      productData.append("availableTill", availableTill);
      productData.append("description", description);
      // productData.append("photo", photo);
      productData.append("carDetails", carDetails);
      productData.append("details", details);

      const res = await axios.put(`${process.env.REACT_APP_PORT}/update-product/${params.id}`, productData,
        {
          headers: {
            Authorization: `${auth?.token}`
          }
        })

      if (res.data.success) {
        toast.success("product updated successfully");
        navigate("/admin-homepage");
      }
      else {
        toast.error(res.data?.message)
      }
    }
    catch (err) {
      console.log(err)
      toast.error("something went wrong");
    }
  }

  const handleDelete = async () => {
    try {
      const res = await axios.delete(`${process.env.REACT_APP_PORT}/delete-product/${params.id}`,
        {
          headers: {
            Authorization: `${auth?.token}`
          }
        })
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/admin-homepage")
      }
    }
    catch (err) {
      toast.error("something went wrong")
    }
  }

  return (
    <>
        <Header />
      <div className='container-fluid m-3 p-3 allbg'>
        <div className='row'>
          <h2 className='mb-5'>Edit Car Details</h2>
          <div className='col-md-7'>
            <label className="form-label">Car Name</label>
            <div className="mb-3">
              <input type="text" className="form-control"
                placeholder='Name'
                onChange={(e) => setName(e.target.value)}
                value={name} />
            </div>

            <label className="form-label">Type</label>
            <label className="form-label label-padding1">Model</label>
            <div className='mb-3'>
              <Select bordered={false}
                placeholder="Select"
                showArrow
                className='form-select mb-3'
                onChange={(value) => setType(value)}
                value={type}>
                <Option value="XUV">XUV</Option>
                <Option value="UV">UV</Option>
              </Select>

              <Select bordered={false}
                placeholder="Select"
                showArrow
                className='form-select mb-3 box-margin'
                onChange={(value) => setModel(value)}
                value={model}>
                <Option value="Innova">Innova</Option>
                <Option value="Crysta">Crysta</Option>
              </Select>
            </div>

            <label className="form-label">Mileage</label>
            <label className="form-label label-padding2">Per Km</label>
            <div className='mb-3'>
              <Select bordered={false}
                placeholder="Select"
                showArrow
                className='form-select mb-3'
                onChange={(value) => setMileage(value)}
                value={mileage}>
                <Option value="9">9</Option>
                <Option value="10">10</Option>
                <Option value="12">12</Option>
              </Select>

              <input type="number"
                placeholder="0000"
                className='form-control mb-3 box-margin'
                onChange={(e) => setPricePerKm(e.target.value)}
                value={pricePerKm} />
            </div>

            <label className="form-label">Available From</label>
            <label className="form-label label-padding3">Available Till</label>
            <div className='mb-3'>
              <input type="text"
                className='form-control mb-3'
                onChange={(e) => setAvailableFrom(e.target.value)}
                value={availableFrom} />

              <input type="text"
                className='form-control mb-3 box-margin'
                onChange={(e) => setAvailableTill(e.target.value)}
                value={availableTill} />
            </div>

            <label className='form-label'>Description</label>
            <div className='mb-3'>
              <textarea className='textarea'
                placeholder='Description'
                onChange={(e) => setDescription(e.target.value)}
                value={description}></textarea>
            </div>

            <div className='mb-3'>
              <Link to="/admin-homepage"><button className="btn btn-outline-primary btn-lg">Cancel</button></Link>
            </div>
          </div>
          <div className='col-md-5'>

            <label className="form-label">Images</label>
            <div className='mb-3'>
              <label className='btn btn-primary'>
                {photo ? photo.name : "ADD"}
                <input type="file" name='photo' accept="image/*"
                  onChange={(e) => setPhoto(e.target.files[0])}
                  hidden />
              </label>
            </div>
            <div className='mb-3'>
              {photo ? (     
                  <img src={URL.createObjectURL(photo)}
                    alt='product-img'
                    height={"120px"}
                    className='img img-responsive' />
                
              ) : (
                <img src={`${process.env.REACT_APP_PORT}/get-photo/${params.id}`}
                  alt='product-img'
                  height={"120px"}
                  className='img img-responsive' />
              )}
            </div>
          

          <label className="form-label">Car Details</label>
          <div className='mb-3'>
            <textarea className='textarea1'
              placeholder='Car Details'
              onChange={(e) => setCarDetails(e.target.value)}
              value={carDetails}></textarea>
          </div>

          <label className="form-label"> Details</label>
          <div className='mb-3'>
            <textarea className='textarea1'
              placeholder='Details'
              onChange={(e) => setDetails(e.target.value)}
              value={details}></textarea>
          </div>

          <div className='mb-3' style={{display:"inline-block"}}>
            <button className="btn btn-primary btn-lg mx-3" onClick={handleUpdate}>SAVE</button>         
            <button className='btn btn-danger btn-lg mx-3' onClick={handleDelete}>Delete</button>
          </div>

        </div>
      </div>
      </div>
    </>
  )
}

export default EditProducts