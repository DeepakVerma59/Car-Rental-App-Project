
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './pages/auth-pages/login';
import Register from './pages/auth-pages/register';
import Forgotpassword from './pages/auth-pages/forgotpassword';
import BookingCheck from './pages/user/BookingCheck';
import AdminHomePage from './pages/admin/adminHomePage'
import AddProducts from './pages/admin/addProducts'
import EditProducts from './pages/admin/EditProducts'
import PageNotFound from './pages/PageNotFound'
import { Toaster } from 'react-hot-toast';
import MyBookings from './pages/user/myBookings';
function App() {
  return <>

  <Toaster/>
  <Routes>
    <Route path='/register' element={<Register/>}/>
    <Route path='/' element={<Login/>}/>
    <Route path='/booking-check' element={<BookingCheck/>}/>
    <Route path='/forgot-password' element={<Forgotpassword/>}/>
    <Route path='/admin-homepage' element={<AdminHomePage/>}/>
    <Route path='/admin-addproducts' element={<AddProducts/>}/>
    <Route path='/admin-editproducts' element={<EditProducts/>}/>
    <Route path='*' element={<PageNotFound/>}/>
</Routes>
  </>

}

export default App;
