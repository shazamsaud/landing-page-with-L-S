import React from "react";
import {Link} from "react-router-dom"
export default function Navbar() {
  return (
    <>
    <div class="super_container">
      <header className="header d-flex flex-row">
        <div className="header_content d-flex flex-row align-items-center">
          <div className="logo_container">
            <div className="logo">
              {/* <img src="images/lesslogo.png" alt="" /> */}
              <span >EduFree</span>
            </div>
          </div>

          <nav className="main_nav_container">
            <div className="main_nav">
              <ul className="main_nav_list">
                <li className="main_nav_item">
                  <a href="/">home</a>
                </li>
                <li className="main_nav_item">
                <div class="dropdown">
                    <button class="dropbtn">curriculum 
                    <span className="dp"><i class="fa fa-caret-down "></i></span>
                    </button>
                    <div class="dropdown-content">
                    <a href="/">Science</a>
                    <a href="#">Mathematics</a>
                    <a href="#">Social</a>
                    <a href="#">English</a>
                    <a href="#">Hindi</a>
                    <a href="#">Kannada</a>
                    </div>
                </div> 
                </li>

                <li className="main_nav_item">
                  <a href="courses.html">Resources</a>
                </li>
                <li className="main_nav_item">
                  <a href="elements.html">Program</a>
                </li>

                <li className="main_nav_item">
                  <Link to="/Contactus">contact Us</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="header_side d-flex flex-row justify-content-center align-items-center">
          {/* <img src="images/phone-call.svg" alt="" />
          <span>+91 9743558088</span> */}
          <button className="login_btn"><Link to="/sign-up">Login</Link>  </button>
        </div>

        <div className="hamburger_container">
          <i className="fas fa-bars trans_200"></i>
        </div>
      </header>

      <div className="menu_container menu_mm">
        <div className="menu_close_container">
          <div className="menu_close"></div>
        </div>

        <div className="menu_inner menu_mm">
          <div className="menu menu_mm">
            <ul className="menu_list menu_mm">
              <li className="menu_item menu_mm">
                <a href="#">Home</a>
              </li>
              <li className="menu_item menu_mm">
                <a href="#">About us</a>
              </li>
              <li className="menu_item menu_mm">
                <a href="courses.html">Courses</a>
              </li>
              <li className="menu_item menu_mm">
                <a href="elements.html">Elements</a>
              </li>
              <li className="menu_item menu_mm">
                <a href="news.html">News</a>
              </li>
              <li className="menu_item menu_mm">
                <a href="contact.html">Contact</a>
              </li>
            </ul>

            <div className="menu_social_container menu_mm">
              <ul className="menu_social menu_mm">
                <li className="menu_social_item menu_mm">
                  <a href="#">
                    <i className="fab fa-pinterest"></i>
                  </a>
                </li>
                <li className="menu_social_item menu_mm">
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li className="menu_social_item menu_mm">
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li className="menu_social_item menu_mm">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="menu_social_item menu_mm">
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="menu_copyright menu_mm">
              Colorlib All rights reserved
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
