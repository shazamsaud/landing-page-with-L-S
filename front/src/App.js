import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import HeaderWithNav from "./components/HeaderWithNav";
import Home from "./Home";
import Footer from "./components/Footer";
import Contactus from "./components/Contactus";
import StudentSignup from "./components/StudentSignup";
import Signup from "./components/Signup"
import TeacherSignup from "./components/TeacherSignup"
import StudentLogin from "./components/StudentLogin";
import TeacherLogin from "./components/TeacherLogin";
import StudentProfile from "./components/StudentProfile";
import TeacherProfile from "./components/TeacherProfile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <HeaderWithNav/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
         
          <Route path="/studentSignup" element={<StudentSignup />} />
       
          <Route path="/teacherLogin" element={<TeacherLogin />} />
          <Route path="/studentLogin" element={<StudentLogin />} />
          <Route path="/TeacherSignup" element={<TeacherSignup />} />
          <Route path="/StudentProfile" element={<StudentProfile />} />
          <Route path="/TeacherProfile" element={<TeacherProfile />} />

          <Route path="/Contactus" element={<Contactus />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
