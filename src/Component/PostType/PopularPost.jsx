import React from 'react'
import './PopularPost.css'

const PopularPost=()=> {
  return (
    
        <div  className='popularMainContainer'>
            <div className='popularPostContainer'>
                <h1 className='h1PopularContainer'>Popular Post</h1>
                    <div className='headingContainer'>
                        <label className='headingLabelContainer' htmlFor="">Just at the end of the code before the 
                        component</label>
                      </div>
                      <div className='descriptionContainer'>
                        <label htmlFor="" className='descriptionLabel'>Just at the end of the code before the 
                        component was exported, we declared default values for our props. 
                        To do that, we started with the component's name and a dot/period 
                        connecting it with defaultProps which is built in when you create a 
                        React app.
                        Now, wherever we import this component, 
                        those values will be the initial values instead of being 
                        blank. When you pass in data to the child component like we did 
                        in previous sections, it overrides the default values.</label>
                      </div>
                </div>
            <div className='trendingContianer'>
              <label className='trendPost'>Trending Post</label>
                 <div className='newsContainer'> 
                    <h3 className='imageContainer'>Image</h3>
                   <h5 className='newsImageDescription'>Decription</h5>
                 </div>
            </div>
        </div>

  )
}

export default PopularPost