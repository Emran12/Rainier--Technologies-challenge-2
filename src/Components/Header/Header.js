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
          <li className="pt-4">
            <img
              className="w-[17px] h-[10px] ml-[11px] "
              style={{ color: "#384449" }}
              src={downArrow}
              alt=""
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
