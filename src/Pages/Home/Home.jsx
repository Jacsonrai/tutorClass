import React from "react";
import "./home.css";

import PopularPost from "../../Component/PostType/PopularPost";

import BusinessAndpolitcis from "../../Component/BusinessAndPolitics/BusinessAndpolitcis";
import { politicData } from "../../DummyData/DummyData";
const Home = () => {
  return (
    <div className="Homecontainer">
      <div className="maincontiner">
        <div className="postContainer">
          {/* <ReactCarousel datafromcarousel={carouselData} /> */}
          <BusinessAndpolitcis politicData={politicData} />
          <PopularPost />
        </div>
      </div>
    </div>
  );
};

export default Home;
