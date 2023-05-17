
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Register from './pages/authPages/Register';
import Login from './pages/authPages/Login';
import Forgotpassword from './pages/auth-pages/forgotpassword';
import AdminHomePage from './pages/admin/adminHomePage';
import AddProducts from './pages/admin/addProducts';
import PageNotFound from './pages/PageNotFound';
import EditProducts from './pages/admin/EditProducts';

function App() {
  return <>
  <Routes>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/forgot-password' element={<Forgotpassword/>}/>
    <Route path='/admin-homepage' element={<AdminHomePage/>}/>
    <Route path='/admin-addproducts' element={<AddProducts/>}/>
    <Route path='/admin-editproducts' element={<EditProducts/>}/>
    <Route path='*' element={<PageNotFound/>}/>
  </Routes>
  </>

}

export default App;
