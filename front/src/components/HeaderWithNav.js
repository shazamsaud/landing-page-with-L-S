import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
export default function HeaderWithNav() {
  return (
 

    <div>
      	<header className="header-new">
		<h1 className="logo-new"><Link to="/">Edu_Free</Link></h1>
      <ul className="main-nav-new">
          <li  className="main-nav-link"><Link to="/">Home</Link></li>
          <li  className="main-nav-link">
          <div className="dropdown-new">
                    <button class="dropbtn-new">curriculum 
                    <span className="dp-new"><i class="fa fa-caret-down "></i></span>
                    </button>
                    <div className="dropdown-content-new">
                     
                    <Link className="dropdown-content-new-a " to="/">Science</Link>
                    <Link className="dropdown-content-new-a " to="/">Mathematics</Link>
                    <Link className="dropdown-content-new-a " to="/">Social</Link>
                    <Link className="dropdown-content-new-a " to="/">English</Link>
                    <Link className="dropdown-content-new-a " to="/">Hindi</Link>
                    <Link className="dropdown-content-new-a " to="/">Kannada</Link>
                    </div>
                </div> 
            
            </li>
          <li  className="main-nav-link-new"><Link to="/">Resources</Link></li>
          <li  className="main-nav-link-new"><Link to="/">About Us</Link></li>
          <li  className="main-nav-link-new"><Link to="/">Contact Us</Link></li>
          </ul>
          <button className='login-button-header-new'>Login</button>
      
	</header> 
    <button className='box-black-new' >
                       hello
    </button>

    </div>

  )
}
