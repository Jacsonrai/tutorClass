import React from "react";
import "./BottomNav.css";
import { NavLink } from "react-router-dom";

function BottomNav({ navData }) {
  return (
    <div className="main-bottomContainer">
      <div className="BottomNav-Container">
        {navData.map((each, index) => (
          <NavLink className={"navLinkClass"} to={each.url}>
            {each.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
export default BottomNav;
