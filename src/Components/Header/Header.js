import React from "react";
import avatar from "../../Assests/images/Avatar.png";
import toggle_button from "../../Assests/images/Toggle-button-light.png";
import downArrow from "../../Assests/icons/Icon_downArrow.png";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="homeText">Home</h1>
        <ul className="flex">
          <li className="toggleButton">
            <img src={toggle_button} alt="" />
          </li>
          <li className="avatar">
            <img src={avatar} alt="" />
          </li>
          <li>
            <img src={downArrow} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
