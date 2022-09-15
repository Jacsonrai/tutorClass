import React from "react";
import { Routes, Route } from "react-router-dom";
import BottomNav from "../Component/NavSection/BottomNav";
import TopNav from "../Component/NavSection/TopNav";
import PopularPost from "../Component/PostType/PopularPost";
import Business from "../Pages/Business/Business";
import Health from "../Pages/Health/Health";
import Home from "../Pages/Home/Home";
import Politics from "../Pages/Politics/Politics";


const Routing = () => {
  const navData = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "Politics",
      url: "/politics",
    },
    {
      label: "Business",
      url: "/business",
    },
    {
      label: "Health",
      url: "/health",
    },
  ];
  return (
    <>
      <TopNav />

      <BottomNav navData={navData} />
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/politics" element={<Politics />} />
        <Route path="/business" element={<Business />} />
        <Route path="/health" element={<Health />} />
      </Routes>


      <PopularPost/>
     
    </>
  );
};

export default Routing;
