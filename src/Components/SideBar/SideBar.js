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
    <div className="sideBar">
      <ul>
        <li className="mt-[31px] mr-[31px] ml-[17px]">
          <img src={menu} alt="" />
        </li>
        <li className="mt-[108px] mr-[24px] ml-[24px]">
          <img className="w-[27px] h-[30px]" src={home} alt="" />
        </li>
        <li className="mt-[47px] mr-[24px] ml-[24px]">
          <img className="w-[29px] h-[29px]" src={patientProfile} alt="" />
        </li>
        <li className="mt-[47px] mr-[24px] ml-[24px]">
          <img className="w-[29px] h-[29px]" src={appointment} alt="" />
        </li>
        <li className="mt-[47px] mr-[24px] ml-[24px]">
          <img className="w-[29px] h-[29px]" src={medicalHistory} alt="" />
        </li>
        <li className="mt-[47px]  mr-[24px] ml-[24px]">
          <img className="w-[29px] h-[29px]" src={settings} alt="" />
        </li>
        <li className="mt-[355px] mr-[24px] ml-[24px]">
          <img src={round} alt="" />
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
