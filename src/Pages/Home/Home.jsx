import React from "react";
import "./home.css";
import Politics from "../../Component/Politics/Politics";
import Bussiness from "../../Component/Bussiness/Bussiness";
const Home = () => {
  return (
    <div className="Homecontainer">
      <div className="maincontiner">
        <div className="leftcontainer">
          <label>Politics</label>
          <Politics />
        </div>
        <div className="rightcontainer">
          <label>Business</label>
          <Bussiness />

        </div>
      </div>
    </div>
  );
};

export default Home;
