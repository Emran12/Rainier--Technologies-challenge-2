import React from "react";
import pulse from "../../Assests/icons/Icon_pulse.png";
import bloodPressure from "../../Assests/icons/Icon-blood-pressure.png";
import oxyzenSaturation from "../../Assests/icons/Icon_oxyzen_saturation.png";
import glucoseCount from "../../Assests/icons/Icon_glucose_count.png";
import "./Treatments.css";
import up_arrow from "../../Assests/icons/Icon_up_arrow.png";

const Treatments = () => {
  const data = [
    {
      id: 1,
      img: pulse,
      disease: "Pulse Count",
      quantity: "60 bpm",
      comment: "Normal",
      commentColor: "#03922B",
    },
    {
      id: 2,
      img: bloodPressure,
      disease: "Blood Pressure",
      quantity: "110/70 mmHg",
      comment: "Slightly higher",
      commentColor: "#82AB0D",
    },
    {
      id: 3,
      img: oxyzenSaturation,
      disease: "Oxygen Saturation",
      quantity: "97 %",
      comment: "Slightly higher",
      commentColor: "#82AB0D",
    },
    {
      id: 4,
      img: glucoseCount,
      disease: "Glucose Count",
      quantity: "100 mm/dL",
      comment: "Normal",
      commentColor: "#03922B",
    },
  ];
  return (
    <div className="mt-[20px]">
      <div className=" flex ">
        {data.map((info) => (
          <div key={info.id} className="mr-[28px] w-[157px] h-[153px]">
            <div
              className="m-[8px] w-[157px] h-[153px]  "
              style={{
                background: "#FFFFFF",
                border: "0.964574px solid #EDEBEB",
                borderRadius: "6.34752px",
                boxShadow: " 0px 3.17376px 3.9672px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div className="mt-[13px] ml-[12px]">
                <p
                  className="w-[41px] h-[40px] flex items-center justify-center"
                  style={{
                    background: "rgba(255, 45, 45, 0.6)",
                    borderRadius: "5px",
                  }}
                >
                  <img
                    className="w-[20px] h-[18px] text-white"
                    style={{ color: "#FF7594" }}
                    src={info.img}
                    alt=""
                  />
                </p>
                <p className="disease">{info.disease}</p>
                <p className="quantity">{info.quantity}</p>
                <p className="mt-[7px]">
                  {" "}
                  <img
                    className="w-[9px] h-[7px] inline"
                    src={up_arrow}
                    alt=""
                  />
                  <span
                    className="comment ml-[7px]"
                    style={{ color: `${info.commentColor}` }}
                  >
                    {info.comment}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Treatments;
