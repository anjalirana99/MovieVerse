import { header_logo, login_user_icon } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'
import { addUser, removeUser } from '../store/userSlice'
import { useEffect } from 'react'
import { toggleAISearch } from '../store/AISearchSlice'
import { supportedLang } from '../utils/langSetting'
import { chnageLanguage } from '../store/configSlice'

const Header = () => {
  const navigateTo = useNavigate()
  const user = useSelector((store)=>store.user)
  const showAISearch = useSelector((store)=>store.AISearch.showAISearch)
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

    const handleMovieUniverseClick=()=>{
      dispatch(toggleAISearch())
    }

    const handlelangChange=(e)=>{
      dispatch(chnageLanguage(e.target.value))
    }
  
  return (
    <div className='header absolute w-full px-10 py-5 bg-linear-to-b from-black z-10'>
      <div className='flex justify-between'>
          <div>
             <img className="w-40 " src={header_logo} alt="logo"/>
          </div>
          {user && 
            <div className='flex items-center gap-5 justify-center mx-5 text-white'>
              {showAISearch && 
                <select className='py-1 px-2' onChange={handlelangChange}>
                  {supportedLang.map((lang)=><option className='bg-gray-700' value={lang.identifier} key={lang.identifier}>{lang.language}</option>)}
                  
                </select>
              }
              <button className='cursor-pointer bg-purple-600 py-1 px-4 rounded-lg' onClick={handleMovieUniverseClick}>{showAISearch ? "HomePage" : "Movie Universe"}</button>
              <img src={login_user_icon} alt='user_icn'/>
              <div className='flex flex-col cursor-pointer items-center'> 
                <p>Hi {user.name}!</p>
                <span className="py-1" onClick={handleSignout}>(Sign Out)</span>
              </div>
             
               
            </div>
            
            
          }
      </div>
     
    </div>
  )
}

export default Header