import React from "react";
import "./CommonButton.css";
import check from "../../Assests/icons/Mask.png";

const CommonButton = () => {
  return (
    <div>
      <button className="unCheck">
        <img className="p-2 text-white" src={check} alt="" />
      </button>
    </div>
  );
};

export default CommonButton;
