import React from "react";
import "./Banner.css";
import img from "../../Assests/images/Svg_sample1.png";

const Banner = () => {
  return (
    <div className="banner">
      <img src={img} alt="" />
      <div className="text-white flex flex-col justify-center items-center font-['Poppins'] pr-[22px]">
        <h1 className="text-[24px] leading-[36px]">Hello, Mary Jane!</h1>
        <p className="text-[16px] leading-[150%]">
          Stay Up-to-Date with your appointments.
        </p>
        <p>You Have No pending Reports</p>
      </div>
    </div>
  );
};

export default Banner;
