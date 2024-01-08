// Dashboard.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import TeacherHeader from '../Components/teacher/TeacherHeader.js'
import TeacherSidebar from '../Components/teacher/TeacherSidebar.js'
import StudentHeader from "../Components/student/StudentHeader.js"

import StudentSidebar from "../Components/student/StudentSidebar.js"


const Dashboard = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }
  const [userType, setUserType] = useState('');

  useEffect(() => {
    // Fetch user type from the server (you may need to include a token for authentication)
    const fetchUserType = async () => {
      try {
        const response = await axios.get('http://localhost:5000/getUserType');
        setUserType(response.data.userType);
      } catch (error) {
        console.log(error.message);
        // console.error('Error fetching user type:', error.response.data.error);
      }
    };

    fetchUserType();
  }, []);

  return (
    <div className='grid-container'>
      {userType === 'student' ? (
        <>
         <StudentHeader OpenSidebar={OpenSidebar}/>
      <StudentSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        </>
      ) : userType === 'teacher' ? (
        <>
        <TeacherHeader OpenSidebar={OpenSidebar}/>
        <TeacherSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;
