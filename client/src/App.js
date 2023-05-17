
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Register from './pages/authPages/Register';
import Login from './pages/authPages/Login';
import Forgotpassword from './pages/auth-pages/forgotpassword';

function App() {
  return <>
  <Routes>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/forgot-password' element={<Forgotpassword/>}/>
  </Routes>
  </>

}

export default App;
