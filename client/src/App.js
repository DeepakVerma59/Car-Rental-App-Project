
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './pages/auth-pages/login';
import Forgotpassword from './pages/auth-pages/forgotpassword';
import AdminHomePage from './pages/admin/adminHomePage';
import AddProducts from "./pages/admin/addProducts"
import EditProducts from "./pages/admin/EditProducts"
import PageNotFound from "./pages/PageNotFound"
import Register from './pages/auth-pages/register';

function App() {
  return( 
  <>
  <Routes>
    <Route path='/register' element={<Register/>}/>
    <Route path='/' element={<Login/>}/>
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
