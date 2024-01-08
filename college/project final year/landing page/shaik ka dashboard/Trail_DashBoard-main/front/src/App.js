import { useState } from 'react'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import './App.css'
import TeacherHeader from './Components/teacher/TeacherHeader.js'
import TeacherSidebar from './Components/teacher/TeacherSidebar.js'
import TeacherProfile from "./Components/teacher/TeacherProfile.js"
import TeacherSubjects from "./Components/teacher/TeacherSubjects.js"

import StudentHeader from "./Components/student/StudentHeader.js"
import StudentProfile from "./Components/student/StudentProfile.js"
import StudentSidebar from "./Components/student/StudentSidebar.js"
import StudentSubjects from "./Components/student/StudentSubjects.js"
import Signup from './Components/Signup.js'
import Login from "./Components/Login.js"


function App() {
  
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <TeacherHeader OpenSidebar={OpenSidebar}/>
      <TeacherSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>

      <StudentHeader OpenSidebar={OpenSidebar}/>
      <StudentSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <BrowserRouter>
      <Routes>
          <Route exact path='/StudentProfile' element={<StudentProfile/>}/>
      <Route exact path='/StudentCourses' element={<StudentSubjects/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
   

      <Route path='/TeacherProfile' element={<TeacherProfile/>}/>
      <Route path='/Teachercourses' element={<TeacherSubjects/>}/> 
      </Routes>
      
      </BrowserRouter>
      
    </div>
  )
}

export default App


// import { useState } from 'react'
// import { BrowserRouter , Route , Routes } from 'react-router-dom'
// import './App.css'

// import TeacherProfile from "../src/Components/teacher/TeacherProfile.js"
// import TeacherSubjects from "../src/Components/teacher/TeacherSubjects.js"
// import StudentProfile from "../src/Components/student/StudentProfile.js"

// import StudentSubjects from "../src/Components/student/StudentSubjects.js"
// import Signup from './Components/Signup.js'
// import Login from "./Components/Login.js"
// import Dashboard from './Components/Dashboard.js'


// function App() {
  
 

//   return (
//     <>
    
   

     

     
// <BrowserRouter>
// <Routes>
//   <Route path='/' element={<Signup/>}/>
//   <Route path='/Dashboard' element={<Dashboard/>}/>
//     <Route exact path='/StudentProfile' element={<StudentProfile/>}/>
// <Route exact path='/StudentCourses' element={<StudentSubjects/>}/>
// <Route path='/signup' element={<Signup/>}/>
// <Route path='/login' element={<Login/>}/>


// <Route path='/TeacherProfile' element={<TeacherProfile/>}/>
// <Route path='/Teachercourses' element={<TeacherSubjects/>}/> 
// </Routes>

// </BrowserRouter>


    
//     </>
//   )
// }

// export default App








