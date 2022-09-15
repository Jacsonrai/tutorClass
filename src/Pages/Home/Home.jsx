import React from 'react'
import ReactCarousel from '../../Component/Carousel/ReactCarousel';
import image1 from '../../gallery/image1.jpg'
import image2 from '../../gallery/image2.jfif'
const Home=() =>{

const data =[

{
image:image1,
imagelabel: "IMAGE 1 ",
details:"image details here",

},


{
  image: image2,
  imagelabel: "IMAGE 2",
  details:"image details here",

  
  
  },
  
]

  return (


    <div><ReactCarousel datafromcarousel={data}/></div>
  )
}
export default Home;