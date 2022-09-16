import React from "react";
import "./Footer.css";
import { FaTelegramPlane } from "react-icons/fa";

function Foooter() {
  return (
    <>
      <div className="Main-footerContainer">
        <div className="footerContainer">
          <div className="News-container">
            <h2>NewsLetter Subcribe</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing aspernatur quia
              consequuntur minima modi saepe earum. Maiores?
            </p>
          </div>
          <div className="Email-Container">
            <input
              type="email"
              name="email"
              id="email"
              className="email"
              placeholder="Enter your email"
              tabIndex="3"
            />
            <button>
              <FaTelegramPlane color="white"/>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Foooter;
