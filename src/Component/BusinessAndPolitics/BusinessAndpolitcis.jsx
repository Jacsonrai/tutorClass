import React from "react";
import Bussiness from "../Bussiness/Bussiness";
import Politics from "../Politics/Politics";
import './businessandpolitics.css'
const BusinessAndpolitcis = ({politicData,bussinessData}) => {
  return (
    <div className="business-politics-container">
      <div className="business-politics-main-container">
        <div className="business-politics-left-container">
          <label>Politic</label>
          <Politics politicsData={politicData}/>
        </div>
        <div className="business-politics-right-container">
          <label>Business</label>
          <Bussiness />
        </div>
      </div>
    </div>
  );
};

export default BusinessAndpolitcis;
