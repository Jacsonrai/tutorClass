import React from "react";
import { Routes, Route } from "react-router-dom";
import Foooter from "../Component/Footer/Foooter";
import TopNav from "../Component/NavSection/TopNav";
import Business from "../Pages/Business/Business";
import Contact from "../Pages/Contact/Contact";
import Health from "../Pages/Health/Health";
import Home from "../Pages/Home/Home";
import Politics from "../Pages/Politics/Politics";


const Routing = () => {
  return (
    <>
      <TopNav />

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/politics" element={<Politics />} />
        <Route path="/business" element={<Business />} />
        <Route path="/health" element={<Health />} />
        <Route path="/Contact" element={<Contact />} />

      </Routes>

      <Foooter />
    </>
  );
};

export default Routing;
