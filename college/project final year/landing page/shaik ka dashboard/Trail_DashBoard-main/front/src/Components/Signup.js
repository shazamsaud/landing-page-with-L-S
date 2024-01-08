import React, { useState } from "react";
import axios from "axios";

import "./mix.css";
import { NavLink } from "react-router-dom";

function Signup() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("student");

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/signup", {
  
        email,
        password,
        userType,
      });

      if (response.data.success) {
        alert("Signup successful");

        window.location.href = "./Login";
      } else {
        alert("Signup failed:", response.data.message);
      }
    } catch (error) {
      alert("Error during signup:", error.message);
      console.log("Error during signup:", error.message);
    }
  };
  // const handleStudent = async () => {
  //   console.log("student");
  //   window.location.href = "./studentSignup";
  // };
  // const handleTeacher = async () => {
  //   window.location.href = "./TeacherSignup";
  // };

  const [passShow, setPassShow] = useState(false);
  return (
    <div>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Sign Up</h1>
            <p style={{ textAlign: "center" }}>
              We are glad that you will be using Project Cloud to manage <br />
              your tasks! We hope that you will get like it.
            </p>
          </div>

          <form>
            {/* <div>
              Register As
              <input
                className="radio-space-left"
                type="radio"
                name="UserType"
                value="student"
  
                onClick={handleStudent}
              />
              Student
              <input
                className="radio-space-left"
                type="radio"
                name="UserType"
                value="teacher"
     
                onClick={handleTeacher}

              />
              Teacher
            </div> */}
            <label>
              User Type:
              <select
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
              >
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
              </select>
            </label>
            <br />
            {/* <div className="form_input">
              <label htmlFor="fname">Name</label>
              <input
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                type="text"
                placeholder="Enter Your Name"
              />
            </div> */}
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
              Already have an account? <NavLink to="/login">Log In</NavLink>
            </p>
          </form>
          {/* <ToastContainer /> */}
        </div>
      </section>
    </div>
  );
}

export default Signup;
