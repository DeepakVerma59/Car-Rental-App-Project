
import React, { useState, useEffect } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import "../styles/adminhome.css"


const AdminHomePage = () => {
   return (
    <>
      <div className='container-fluid m-3 p-3'>
        Admin HomePage
      </div>
    </>
  )
}

export default AdminHomePage
