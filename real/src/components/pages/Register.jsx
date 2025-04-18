import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom';

function Register() {
    return ( 
        <>
        <section className='contact mb'>
        <div className='container'>
          <form className='shadow' action="http://localhost:8056/reg" method="post">
            <h4>Sign up</h4> <br />
            <div>
              <input type='text' placeholder='Enter User Name' name="uname" />
              <input type='email' placeholder='Enter Email ID' name="email" />
              <input type='password' placeholder='Enter Password' name="passw" />
            </div>
            <input type='submit' />
            <NavLink to='/login'> Already Have an Account</NavLink>
          </form>
        </div>
      </section>
        </>
     );
}

export default Register;