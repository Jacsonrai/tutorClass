import React from 'react'
import ReactCarousel from '../../Component/Carousel/ReactCarousel';
import image1 from '../../gallery/image1.jpg'
import image2 from '../../gallery/image2.jfif'
const Home=() =>{

const data =[

{
image:image1,
imagelabel: "Dhankuta",


},


{
  image: image2,
  imagelabel: "Dhankuta",
  
  
  },
  // {
  //   name: "sanjog rai",
  //   address: "Dhankuta",
    
    
  //   },

]

  return (


    <div><ReactCarousel datafromcarousel={data}/></div>
  )
}
export default Home;