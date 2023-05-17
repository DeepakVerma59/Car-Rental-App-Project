
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './pages/auth-pages/login';
import Forgotpassword from './pages/auth-pages/forgotpassword';
import Register from './pages/auth-pages/register';

function App() {
  return <>
  <Routes>
    <Route path='/register' element={<Register/>}/>
    <Route path='/' element={<Login/>}/>
    <Route path='/forgot-password' element={<Forgotpassword/>}/>
  </Routes>
  </>

}

export default App;
