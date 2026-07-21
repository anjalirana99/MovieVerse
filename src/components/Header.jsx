import { header_logo, login_user_icon } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'
import { addUser, removeUser } from '../store/userSlice'
import { useEffect } from 'react'

const Header = () => {
  const navigateTo = useNavigate()
  const user = useSelector((store)=>store.user)
  const dispatch = useDispatch()

   useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                //User Sign In
                const {uid, displayName, email} = user;
                const userdetail = {
                    name:displayName,
                    email:email,
                    uid:uid
                }
                dispatch(addUser(userdetail))
                navigateTo("/browse")
            } else {
                // User is signed out
                dispatch(removeUser())
                navigateTo("/")

            }
        });
        return ()=> unsubscribe()
    },[])

  const handleSignout=()=>{
      signOut(auth).then(() => {
        // Sign-out successful.

      }).catch((error) => {
        // An error happened.
      });
    }
  
  return (
    <div className='header absolute w-full px-10 py-5 bg-linear-to-b from-black z-10'>
      <div className='flex justify-between'>
          <div>
             <img className="w-40 " src={header_logo} alt="logo"/>
          </div>
          {user && 
            <div className='flex flex-col cursor-pointer items-center justify-center mx-5 text-white'>
              <div className='flex gap-3'> 
                <img src={login_user_icon} alt='user_icn'/>
                <p>Hi {user.name}!</p>
              </div>
             
              <span className="py-1" onClick={handleSignout}>(Sign Out)</span> 
            </div>
            
            
          }
      </div>
     
    </div>
  )
}

export default Header