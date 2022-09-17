import React from "react";
import "./politic.css";
const Politics = ({ politicsData = [] }) => {
  return (
    <>
      <div className="politicscontainer">
        {politicsData.map((each, index) => (
          <div className="politicsDetailsContainer" key={index}>
            <figure>
              <img
                src={each?.image}
                alt="imageload"
                style={{ width: "10em" }}
              />
            </figure>
            <div className="politicDescriptionContainer">
              <lable style={{ fontWeight: "700" }}>{each?.title}</lable>
              <p style={{ width: "25em" }}>{each?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Politics;
