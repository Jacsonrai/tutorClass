import React from "react";
import "./home.css";
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
