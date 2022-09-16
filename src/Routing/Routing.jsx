import React from "react";
import { Routes, Route } from "react-router-dom";
import BottomNav from "../Component/NavSection/BottomNav";
import Foooter from "../Component/NavSection/Foooter";
import TopNav from "../Component/NavSection/TopNav";
import Business from "../Pages/Business/Business";
import Health from "../Pages/Health/Health";
import Home from "../Pages/Home/Home";
import Politics from "../Pages/Politics/Politics";
const Routing = () => {
  const navData = [
    {
      label: "Home",
      url: "/Home",
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
        <Route path="/Home" element={<Home />} />
        <Route path="/politics" element={<Politics />} />
        <Route path="/business" element={<Business />} />
        <Route path="/health" element={<Health />} />
      </Routes>
      <Foooter/>
    </>
  );
};


export default Routing;
