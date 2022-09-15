import React from "react";
import ButtonWithIcon from "../../Shared/ButtonWithIcon";
import "./TopNav.css";
import { FiSearch } from "react-icons/fi";
import InputField from "../../Shared/InputField/InputField";
import BottomNav from "./BottomNav";
const TopNav = () => {
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
    <div className="navigator-container">
      <div className="top-nav-container">
      <div className="top-main-container">
        <div className="logoContainer">
          <h2 className="logoText">Well Read</h2>
        </div>
        <div className="search-container">
          <div className="input-search">
            <InputField inputType={"text"} setPlaceholder={"Search..."} />
          </div>
          <div className="search-btn">
            <ButtonWithIcon
              icon={<FiSearch fontSize={"large"} color="white" />}
            />
          </div>
        </div>
      </div>
    </div>
    <div className="bottom-nav-bar">
          <BottomNav navData={navData} />
        </div>
    </div>
  
  );
};
export default TopNav;
