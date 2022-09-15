import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Routing  from './Routing/Routing'
import Home from './Home'
export const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routing/>
    </BrowserRouter>
    <Home/>
    </>
  )
}
