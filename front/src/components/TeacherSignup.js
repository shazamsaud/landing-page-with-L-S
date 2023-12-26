
import React, { useState } from "react";
import axios from "axios";

import "./mix.css";
import { NavLink } from "react-router-dom";

export default function TeacherSignup() {
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passShow, setPassShow] = useState(false);


  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/signup", {
        fname,
        email,
        password,
    
      });

      if (response.data.success) {
        alert("Signup successful");

        window.location.href = "./TeacherLogin";
      } else {
        alert("Signup failed:", response.data.message);
      }
    } catch (error) {
      alert("Error during signup:", error.message);
      console.log("Error during signup:", error.message);
    }
  };
  return (
    <div>
     <section>
        <div className="form_data">
          <div className="form_heading">
            <h1> Teacher Sign Up</h1>
            <p style={{ textAlign: "center" }}>
              We are glad that you will be Teaching our Students. We wish you all the best
            </p>
          </div>
          <form>
          <div className="form_input">
              <label htmlFor="fname">Name</label>
              <input
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                type="text"
                placeholder="Enter Your Name"
              />
            </div>
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
                <div
                  className="showpass"
                  onClick={() => setPassShow(!passShow)}
                >
                  {!passShow ? "Show" : "Hide"}
                </div>
              </div>
            </div>

            <button className="btn" onClick={handleSignup}>
              Sign Up
            </button>
            <p>
              Already have an account? <NavLink to="/TeacherLogin">Log In</NavLink>
            </p>
          </form>
          </div>
          </section>
    </div>
  )
}
