import React from "react";
import "./Appointments.css";

const Appointments = () => {
  const data = [
    {
      name: "Dr. Muhammad Abdul Hussein",
      designation: "Cardiologist",
      slot: "Morning",
      time: "10.00 AM",
      year: "2022",
      day: "13",
      month: "Sep",
      stepColor: "#FF9898",
    },
    {
      name: "Dr. Muhammad Abdul Hussein",
      designation: "Cardiologist",
      slot: "Morning",
      time: "10.00 AM",
      year: "2022",
      day: "13",
      month: "Sep",
      stepColor: "#FFF598",
    },
    {
      name: "Dr. Muhammad Abdul Hussein",
      designation: "Cardiologist",
      slot: "Morning",
      time: "10.00 AM",
      year: "2022",
      day: "13",
      month: "Sep",
      stepColor: "#98FFC1",
    },

    {
      name: "Dr. Muhammad Abdul Hussein",
      designation: "Cardiologist",
      slot: "Morning",
      time: "10.00 AM",
      year: "2022",
      day: "13",
      month: "Sep",
      stepColor: "#98C7FF",
    },
  ];

  return (
    <div className="appointment mt-[30px] pl-[16px] pt-[16px]">
      <h1>Upcoming Appointments</h1>

      {data.map((info) => (
        <div>
          <div className="flex pb-[24px]">
            <div className="flex flex-col w-[63px] h-[100px] rounded-2xl border pl-[16px] pr-[14px] mt-[24px] ml-[40px] gap-[8px]">
              <p>{info.year}</p>
              <p className="day">{info.day}</p>
              <p>{info.month}</p>
            </div>
            <div className="d-info flex flex-col w-full pl-[8px] card">
              <h1
                style={{
                  color: "#384449",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "16px",
                }}
              >
                {info.name}
              </h1>
              <p
                style={{
                  color: "#2E1619",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "13px",
                }}
              >
                Cardiologist
              </p>
              <div className="flex mt-[8px]">
                <div>
                  {" "}
                  <p className="time">
                    <span className="option">Slot</span>
                    <span style={{ color: "#384449" }}>{info.slot}</span>
                  </p>
                </div>
                <div>
                  <p className="time ml-[10px]">
                    <span className="option">Time</span>
                    <span>{info.time}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Appointments;
