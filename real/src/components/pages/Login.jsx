import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
function Login ()
 {
    return(
        <section className='contact mb'>
        <div className='container'>
          <form className='shadow' action="http://localhost:8056/log" method="post">
            <h4>Sign in</h4> <br />
            <div>
              <input type='text' placeholder='Enter User Name' name="uname" />
              <input type='password' placeholder='Enter Password' name="passw" />
            </div>
            <input type='submit' />
            <NavLink to='/register'> Already Don't Have an Account</NavLink>
          </form>
        </div>
      </section>
    )
}

export default Login;