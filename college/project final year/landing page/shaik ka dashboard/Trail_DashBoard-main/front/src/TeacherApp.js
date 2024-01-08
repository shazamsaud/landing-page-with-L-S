import { useState } from 'react'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/teacher/TeacherHeader.js'
// import Header from '../src/Components/Header.js'
import Sidebar from './Components/teacher/TeacherSidebar.js'

// import Profile from './Components/Profile.js'
import TeacherProfile from "./Components/teacher/TeacherProfile.js"
import TeacherSubjects from "./Components/teacher/TeacherSubjects.js"



function TeacherApp() {
  
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <BrowserRouter>
      <Routes>
    
      {/* <Route exact path='/' element={<Profile/>}/> */}
      <Route exact path='/' element={<TeacherProfile/>}/>
      {/* <Route path='/profile' element={<Profile/>}/> */}

      <Route path='/TeacherProfile' element={<TeacherProfile/>}/>
      <Route path='/Teachercourses' element={<TeacherSubjects/>}/> 
      </Routes>
      
      </BrowserRouter>
      
    </div>
  )
}

export default TeacherApp