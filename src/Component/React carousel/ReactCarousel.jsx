import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import "./reactcarousel.css";

export const ReactCarousel = ({ caroselData=[]}) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
  };
  return (
    <div>
      <Slider {...settings}>
        {caroselData.map((each, index) => (
          <div className="carouselContainer"  key={index}>
            <div className="informationDetails">
              <figure>
                <img
                  src={each?.img}
                  className="imageTagsCarousel"
                  alt={"logo"}
                />
              </figure>
              <div className="titleContainer">
                <h2>{each?.lable}</h2>
              </div>
              <div className="descriptionContainer">
                <h6>{each?.des}</h6>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
