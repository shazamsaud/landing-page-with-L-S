import { useState } from 'react'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import './App.css'
import Header from '../src/Components/Header.js'
import Sidebar from '../src/Components/SideBar.js'
import Home from '../src/Components/Home.js'
import Profile from './Components/Profile.js'

import StudentSubjects from './Components/StudentSubjects.js'


function App() {
  
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
    
      <Route exact path='/' element={<Home/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/courses' element={<StudentSubjects/>}/>
      </Routes>
      
      </BrowserRouter>
      
    </div>
  )
}

export default App