import React from 'react'
import { ReactCarousel } from '../../Component/React carousel/ReactCarousel'
import image1 from "../../Assets/image1.jpg";
import image2 from "../../Assets/image2.jpg";
const data = [
  {
    lable: "image 1",
    img: image1,
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five cent",
  },
  {
    lable: "image 2",
    img: image2,
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five cent",
  },
];

const Health = () => {
  return (
    <div>
      <ReactCarousel caroselData={data}/>
    </div>
  )
}

export default Health