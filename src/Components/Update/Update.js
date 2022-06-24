import React from "react";
import "./Update.css";
import img from "../../Assests/images/Svg_sample2.png";

const Update = () => {
  return (
    <div className="update">
      <div className="p-[20px] flex justify-between">
        <p className="text-[14px] font-medium" style={{ color: " #231F20" }}>
          Covid-19 Updates
        </p>
        <div>
          <p className="text-[14px] font-medium" style={{ color: " #231F20" }}>
            10 September 2022
          </p>
          <p className="text-[14px] font-normal" style={{ color: "#8A8686" }}>
            Thursday 10:00:00 AM
          </p>
        </div>
      </div>
      <div className="p-[20px] flex justify-between">
        <img src={img} alt="" />
        <div className="updateInfo flex flex-col">
          <div className="pt-[14px] pl-[29px] pr-[25px] text-white">
            <p className="text-[14px] pb-[8px]">Infection Number </p>
            <p className="text-[38px] pb-[8px]">500</p>
            <p className="text-[14px] pb-[8px]">Infection Rate </p>
            <p className="text-[38px] pb-[8px]">10%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
