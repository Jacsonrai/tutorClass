import React from "react";
import Business from "../../Pages/Business/Business";
import Politics from '../Politics/Politics'
const BusinessAndPolitics = () => {
  return (
    <div className="businessAndPoliticContainer">
      <div className="main-container-business-politics">
    <div className="leftContainerBusinessAndPolitics">
    <Business />
    </div>
    <div className="RightContainerBusinessAndPolitics">
        <Politics/>
    </div>

      </div>

    </div>
  );
};

export default BusinessAndPolitics;
