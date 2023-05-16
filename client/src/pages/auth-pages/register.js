//registration form
import React from 'react'
import "../styles/register.css"

function Register() {
  return (
    <>
    <div className="container">
    <h4>Register in your account</h4>
      <form>
        <div>
        <input className="input" type='text' id='name'placeholder='name'/>
        </div>
        <div>
        <input className="input" type='text' id='email'placeholder='email'/>
        </div>
        <div>
        <input className="input" type='number' id='contact' placeholder='contact' maxLength={10}/>
        </div>
        <div>
        <input className="input" type='text' id='password'placeholder='password'/>
        </div>
        <div>
        <input className="input" type='text' id='confirm password'placeholder='confirm password'/>
        </div>
        <div>
    <button>signin</button>
    <button className='submit'>Register</button>
        </div>
      </form>
      </div>
    </>
  )
}

export default Register
