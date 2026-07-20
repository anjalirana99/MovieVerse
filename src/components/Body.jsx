import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import { Provider, useDispatch } from 'react-redux'


const Body = () => {
    const dispatch = useDispatch();
    const bodyRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        }
    ])
    
  return (
    <RouterProvider router={bodyRouter}/>
  )
}

export default Body