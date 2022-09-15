import React from 'react'
import './Home.css'

import Bussiness from './Component/Bussiness/Bussiness'
import Politics from './Component/Politics/Politics'
const Home=()=> {
  return (
    <div className='Homecontainer' >
      <div className='maincontiner'>
        <div className='leftcontainer'>
           <Politics/>
           
        </div>
        <div className='rightcontainer'>

            <Bussiness/>

        </div>

      </div>
    </div>
  )
}

export default Home