import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import { Provider, useDispatch } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'
import { addUser, removeUser } from '../store/userSlice'


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
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                //User Sign In
                const {uid, displayName, email} = user;
                const userdetail = {
                    name:displayName,
                    email:email,
                    uid:uid
                }
                dispatch(addUser(userdetail))
            } else {
                // User is signed out
                dispatch(removeUser())

            }
        });
    },[])
    
  return (
    <RouterProvider router={bodyRouter}/>
  )
}

export default Body