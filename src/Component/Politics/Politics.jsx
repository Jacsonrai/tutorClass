import React from "react";
import image1 from "../../123ad.jpg";
import "./politics.css";
const Politics = ({ polticsData=[] }) => {
  return (
    <div className="politicsContainer">
      <div className="politicsMainContainer">
        {polticsData.map((each, index) => (
          <div className="politicsDetailsContainer" key={index}>
            <div className="politicsImageContainer">
              <figure>
                <img src={each.image} alt="" className="politicsImage" />
              </figure>
            </div>
            <div className="politicsDescriptionsContainer">
              <div className="politicsTitle">
                <h2>{each.title}</h2>
              </div>
              <div className="politicsDescription">
                <h5>{each.desc}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Politics;
