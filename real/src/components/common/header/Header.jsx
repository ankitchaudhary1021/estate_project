import React, { useState } from "react"
import "./header.css"
import { nav } from "../../data/Data"
import { Link,NavLink } from "react-router-dom"

const Header = () => {
  const [navList, setNavList] = useState(false)
  
// --------------------------Buy defult not navlist-------------------------------------------

return (
  <>
    <header>
        <div className='container flex'>
            <div className='logo'>

            <img src='./images/logo.png' alt='' />
        </div>
{/* // --------------------------------logo images-------------------------------------------------- */}

<div className='nav'>
            
    <ul className={navList ? "small" : "flex"}>
        {nav.map((list, index) => (
            <li key={index}>
                <Link to={list.path}>{list.text}</Link>
            </li>
        ))}
    </ul>
</div>
{/* ---------------------------------------------------------------------------- */}
        
<div className='button flex'>   
     <NavLink to="/login" className='fa fa-sign-out'>Sign up</NavLink>  
</div>

<div className='toggle'>
      <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>

{/* --------------------------------- responsive--------------------------------- */}
</div>
</div>
</header>
</>
)
}

export default Header
