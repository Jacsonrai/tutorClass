import React from "react";
import "./home.css";

import PopularPost from "../../Component/PostType/PopularPost";
import BusinessAndPolitics from "../../Component/BusinessAndPolitics/BusinessAndPolitics";
const Home = () => {
  return (
    <div className="Homecontainer">
      <div className="maincontiner">
        <div className="postContainer">
        <BusinessAndPolitics/>
          <PopularPost />
        
        </div>
      </div>
    </div>
  );
};

export default Home;
