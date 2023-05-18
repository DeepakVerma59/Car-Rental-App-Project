
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Register from './pages/auth-pages/register';
import Login from './pages/auth-pages/login';
import Forgotpassword from './pages/auth-pages/forgotpassword';
import AdminHomePage from './pages/admin/adminHomePage';
// import Ordercar from './pages/user/Ordercar';
import AddProducts from "./pages/admin/addProducts"
import EditProducts from "./pages/admin/EditProducts"
import PageNotFound from "./pages/PageNotFound"
import BookingCheck from "./pages/user/BookingCheck"


function App() {
  return( 
  <>
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
  )
}

export default App;
