import React, { useRef, useState } from 'react'
import Header from './Header'
import { login_bg_img } from '../utils/constants'
import { validFormData } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const[isSignIn,setIsSignIn] = useState(true)
  const[errorMessage,setErrorMessage]=useState(null)
  const navigateTo = useNavigate()
  const name = useRef(null)
  const email = useRef(null)
  const password = useRef(null)

  const toggleIsSignIn =()=>{
    setIsSignIn(!isSignIn)
  }

  const handleSubmitBtn=()=>{
    //First validate the form data
    const validationErrorMessage = validFormData(name.current?.value, email.current?.value, password?.current.value, isSignIn)
    setErrorMessage(validationErrorMessage)

    //if error return 
    if(validationErrorMessage) return 

    // sign up /sing in using firebase

    if(!isSignIn){
      //sign up a new user if successfull navigate to browse page else show error
      createUserWithEmailAndPassword(auth, email.current?.value, password?.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          navigateTo("/browse")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage)
        });
    }
    else{
      //sign in a existing user if successfull navigate to browse page
      signInWithEmailAndPassword(auth, email.current?.value, password?.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          navigateTo("/browse")
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage)
        });
    }

  }

  return (
    <div className='relative h-screen '>
      <Header/>
      <div>
        <img className="h-full w-full object-cover absolute" src={login_bg_img} alt="bg-img"/>
      </div>
      <div className='relative flex justify-center pt-32'>
        <form onSubmit={(e)=>e.preventDefault()} className='w-4/12 bg-black opacity-85 text-white p-8 rounded-xl'>
          <h1 className='text-3xl mb-5'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
          {!isSignIn && 
          <input ref={name} className="w-full px-4 py-2 my-2 bg-gray-700" type='text' placeholder='Full Name'/>
          }
          <input ref={email} className="w-full px-4 py-2 my-2 bg-gray-700" type="text" placeholder='Email Address'/>
          <input ref={password} className="w-full px-4 py-2 my-2 bg-gray-700" type="password" placeholder='Password'/>
          {errorMessage && 
          <p className='px-2 text-red-500 font-bold'>{errorMessage}</p>}
          <button className='w-full px-4 py-4 my-4 bg-red-700 rounded-lg cursor-pointer font-semibold'
            onClick={handleSubmitBtn}>
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p onClick={toggleIsSignIn} className='cursor-pointer hover:underline'>{isSignIn ? "New to MovieVerse? Sign Up Now" : "Already Registered? Sign In"}</p>
        </form>
      </div>
    </div>
  )
}

export default Login