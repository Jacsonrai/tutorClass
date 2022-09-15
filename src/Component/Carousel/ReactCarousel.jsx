import React, {Component} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './carosel.css'


const ReactCarousel=({datafromcarousel=[]}) =>{
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
      };




  return (
    <>
    <Slider {...settings}>
    {datafromcarousel.map((each,index)=> (
        <div className='maincontainer'>
       <div className='innercontainer'>
        <div className='details'>

        {/* <h1>{each.name}</h1> */}
    <figure>

<img src={each.image} className="imagefromCarousel"/>

    </figure>


        </div>



       </div>


        
       </div>





    



   ) )}


    </Slider>
    
    </>
  )
}

export default ReactCarousel