import React from "react";
import BottomNav from "./BottomNav";
import TopNav from "./TopNav";

const Navigation = () => {
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
    <div className="navigation-container">
      <div className="navigation-main-container">
        <div className="top-nav-bar">
          <TopNav />
        </div>
        <div className="bottom-nav-bar">
          <BottomNav navData={navData} />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
