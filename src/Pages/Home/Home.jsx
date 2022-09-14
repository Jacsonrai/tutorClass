import React from "react";
import Politics from "../../Component/Politics/Politics";
import Business from "../Business/Business";
import "./home.css";

import { politicsData } from "../../DummyData/DummyData";
const Home = () => {
  return (
    <div className="homeContainer">
      <div className="mainContainer">
        <div className="leftContainer">
          <label>Politics</label>
          <Politics polticsData={politicsData} />
        </div>
        <div className="rightContainer">
          <label>Business</label>
          <Politics polticsData={politicsData} />
        </div>
      </div>
    </div>
  );
};

export default Home;
