import React from "react";
import Appointments from "../Appointments/Appointments";
import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";

import "./Home.css";

const Home = () => {
  return (
    <div className="main">
      <div>
        <SideBar></SideBar>
      </div>
      <div className="header">
        <div>
          <Header></Header>
        </div>
        <div className="bannerWithAppointments">
          <div>
            <Banner></Banner>
          </div>
          <div>
            <Appointments></Appointments>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
