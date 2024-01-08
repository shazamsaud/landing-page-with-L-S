
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer';
import Contactus from './components/Contactus';
import Signin from "./auth/SignIn"
import SignUp from "./auth/SignUp" 
function App() {
  return (
 
    <>
    
    
      <BrowserRouter>
      <Navbar/>
      


        <Routes>
        
       
       
          <Route path='/' element={<Home/>}/>
          <Route path='/sign-in' element={<Signin/>}></Route>
        <Route path='/sign-up' element={<SignUp/>}></Route>
          <Route path='/Contactus' element={<Contactus/>}/>
        </Routes>
      
      </BrowserRouter>
      <Footer/>
    
    </>
  );
}

export default App;
