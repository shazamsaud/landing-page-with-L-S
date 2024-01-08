import React from "react";
import { BsFillGearFill } from "react-icons/bs";
import { PiCertificateBold, PiStudentBold, PiExamFill } from "react-icons/pi";

import { ImProfile } from "react-icons/im";
import { TbBooks } from "react-icons/tb";

//

function SideBar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <PiStudentBold className="icon_header" /> STUDENT DASHBOARD
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">

   

        <li className="sidebar-list-item">
          <a href="./Profile">
            <ImProfile className="icon" /> Your Profile
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="/courses">
            <TbBooks className="icon" /> Your Courses
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="/">
            <PiExamFill className="icon" /> Assesments
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="/">
            <PiCertificateBold className="icon" /> Certificates
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="/">
            <BsFillGearFill className="icon" /> Setting
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default SideBar;
