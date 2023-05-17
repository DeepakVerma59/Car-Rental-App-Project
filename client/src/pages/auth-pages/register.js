//registration form
import React from 'react'
import "../styles/register.css"
import Home from '../../components/Home'


function Register() {
  return (
    <>
    <Home/>
    <div className="container">
    <h3>Register in your account</h3>
      <form>
        <div>
        <input className="input" type='text' id='name'placeholder='Name'/>
        </div>
        <div>
        <input className="input" type='text' id='email'placeholder='Email'/>
        </div>
        <div>
        <input className="input" type='number' id='contact' placeholder='Contact' maxLength={10}/>
        </div>
        <div>
        <input className="input" type='text' id='password'placeholder='Password'/>
        </div>
        <div>
        <input className="input" type='text' id='confirm password'placeholder='Confirm Password'/>
        </div>
        <div>
        <button className='sign-in'>Sign In</button>
        <button className='submit'>Register</button>
        </div>
      </form>
      </div>
    </>
  )
}

export default Register
