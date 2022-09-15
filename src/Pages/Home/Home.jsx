import React from "react";
import "./home.css";
import Politics from "../../Component/Politics/Politics";
import Bussiness from "../../Component/Bussiness/Bussiness";
import PopularPost from "../../Component/PostType/PopularPost";
const Home = () => {
  return (
    <div className="Homecontainer">
      <div className="maincontiner">
        <div className="postContainer">
          <PopularPost />
        </div>
      </div>
    </div>
  );
};

export default Home;
