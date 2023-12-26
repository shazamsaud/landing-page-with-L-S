import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function TeacherLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passShow, setPassShow] = useState(false);
  
    const handleLogin = async (event) => {
      event.preventDefault();
      try {
        const response = await axios.post("http://localhost:5000/api/login", {
          email,
          password,
        });
  
        if (response.data.success) {
          // console.log("Login successful");
          alert("Login successful");
          
          
     
           window.location.href = "./TeacherProfile";
        } else {
          alert("Login failed:", response.data.message);
        }
      } catch (error) {
        alert("Error during login:", error.message);
      }
    };
    return (


        <section>
          <div className="form_data">
            <div className="form_heading">
              <h1>Welcome Back, Log In</h1>
              <p>Hi, we are you glad you are back to TEACH Please login.</p>
            </div>
    
            <form>
              <div className="form_input">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  id="email"
                  placeholder="Enter Your Email Address"
                />
              </div>
              <div className="form_input">
                <label htmlFor="password">Password</label>
                <div className="two">
                  <input
                    type={!passShow ? "password" : "text"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    id="password"
                    placeholder="Enter Your password"
                  />
                  <div className="showpass" onClick={() => setPassShow(!passShow)}>
                    {!passShow ? "Show" : "Hide"}
                  </div>
                </div>
              </div>
    
              <button className="btn" onClick={handleLogin}>
                Login
              </button>
              <p>
                Don't have an Account? <NavLink to="/signup">Sign Up</NavLink>{" "}
              </p>
            </form>
            {/* <ToastContainer /> */}
          </div>
        </section>
      );
}
