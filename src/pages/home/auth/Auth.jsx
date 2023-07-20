import React from 'react'
import './Auth.css'
import logo from '../../../img/logo.png'

const Auth = () => {
  return (
    <div className='Auth'>
        <div className="a-left">
            <img src={logo} alt="" />
            <div className='WebName'>
                <h1>Social Circle</h1>
                <h6>Inspire, engage, and create a social movement!</h6>
            </div>
        </div>
      
      <SignUp/>
    </div>
  )
}

function SignUp(){
  return(
    <div className="a-right">
      <form action="" className="infoForm authForm">

      <h3>Sign Up</h3> <br />

      <div>
        <input type="text" placeholder='First Name' className='infoInput' name='firstName' />
        <input type="text" placeholder='Last Name' className='infoInput' name='lastName' />
      </div>

      <div>
        <input type="text" name="userName" className='infoInput' placeholder='Username'/>
      </div>

      <div>
        <input type="password" name="password" className='infoInput' placeholder='Password'/>
        <input type="password" name="cpassword" className='infoInput' placeholder='Confirm Password'/>
      </div>

      <div>
        <span>Already have an acccount? Login</span>
      </div>

      <button className="button infoButton" type='submit'>Signup</button>
      </form>
    </div>
  )
}

export default Auth
