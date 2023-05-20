
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Register from './pages/auth-pages/register';
import Login from './pages/auth-pages/login';
import Forgotpassword from './pages/auth-pages/forgotpassword';
import AdminHomePage from './pages/admin/adminHomePage';
import AddProducts from './pages/admin/addProducts';
import PageNotFound from './pages/PageNotFound';
import EditProducts from './pages/admin/EditProducts';
import Ordercar from './pages/user/Ordercar';
import BookingCheck from './pages/user/BookingCheck';
import { Toaster } from 'react-hot-toast';
import MyBookings from './pages/user/myBookings';
import BookingPage from './pages/user/BookingPage';


function App() {
  return <>
  <Toaster/>
  <Routes>
    <Route path='/register' element={<Register/>}/>
    <Route path='/' element={<Login/>}/>
    <Route path='/user-bookingcheck' element={<BookingCheck/>}/>
    <Route path='/user-homepage' element={<Ordercar/>}/>
    <Route path='/user-bookings' element={<MyBookings/>}/>
    <Route path='/user-bookingconfirm' element={<BookingPage/>}/>

    <Route path='/forgot-password' element={<Forgotpassword/>}/>
    <Route path='/admin-homepage' element={<AdminHomePage/>}/>
    <Route path='/admin-addproducts' element={<AddProducts/>}/>
    <Route path='/admin-editproducts/:id' element={<EditProducts/>}/>

    <Route path='*' element={<PageNotFound/>}/>
  </Routes>
  </>
  
}

export default App;
