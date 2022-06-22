import React from "react";
import menu from "../../Assests/icons/Icon_Menu.png";
import home from "../../Assests/icons/Icon_Home.png";
import medicalHistory from "../../Assests/icons/Icon_medical_history.png";
import patientProfile from "../../Assests/icons/Icon_patient_profile.png";
import appointment from "../../Assests/icons/Icon_Appointment.png";
import settings from "../../Assests/icons/Icon_Settings.png";
import round from "../../Assests/icons/round.png";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div>
      <ul>
        <li>
          <img className="menuIcon" src={menu} alt="" />
        </li>
        <li>
          <img className="homeIcon" src={home} alt="" />
        </li>
        <li>
          <img className="profileIcon" src={patientProfile} alt="" />
        </li>
        <li>
          <img className="appointmentIcon" src={appointment} alt="" />
        </li>
        <li>
          <img className="historyIcon" src={medicalHistory} alt="" />
        </li>
        <li>
          <img src={settings} alt="" />
        </li>
        <li>
          <img src={round} alt="" />
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
