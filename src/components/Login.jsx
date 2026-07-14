import React, { useState } from 'react'
import Header from './Header'
import { login_bg_img } from '../utils/constants'

const Login = () => {
  const[isSignIn,setIsSignIn] = useState(true)
  const toggleIsSignIn =()=>{
    setIsSignIn(!isSignIn)
  }
  return (
    <div className='relative h-screen '>
      <Header/>
      <div>
        <img className="h-full w-full object-cover absolute" src={login_bg_img} alt="bg-img"/>
      </div>
      <div className='relative flex justify-center pt-32'>
        <form className='w-4/12 bg-black opacity-80 text-white p-8 rounded-xl'>
          <h1 className='text-3xl mb-5'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
          {!isSignIn && 
          <input className="w-full px-4 py-2 my-2 bg-gray-700" type='text' placeholder='Full Name'/>
          }
          <input className="w-full px-4 py-2 my-2 bg-gray-700" type="text" placeholder='Email Address'/>
          <input className="w-full px-4 py-2 my-2 bg-gray-700" type="password" placeholder='Password'/>
          <button className='w-full px-4 py-4 my-4 bg-red-700 rounded-lg cursor-pointer font-semibold'>
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p onClick={toggleIsSignIn} className='cursor-pointer hover:underline'>{isSignIn ? "New to MovieVerse? Sign Up Now" : "Already Registered? Sign In"}</p>
        </form>
      </div>
    </div>
  )
}

export default Login