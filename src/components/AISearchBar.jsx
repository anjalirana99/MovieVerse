import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAISearchMoviesData } from '../store/AISearchSlice'
import useAISearchBar from '../hooks/useAISearchBar'
import lang from '../utils/langSetting'

const AISearchBar = () => {
  const searchText = useRef()
  const dispatch = useDispatch()
  const {getAISearchMovies} = useAISearchBar()
  const appLang = useSelector((store)=>store.config.lang)

  const handleAISearchSubmit= async()=>{
      const{moviesName,moviesResult} = await getAISearchMovies(searchText.current.value)
      dispatch(addAISearchMoviesData({names:moviesName, result:moviesResult}))
      
  }
  return (
    <div className='pt-[50%] md:pt-[20%] flex justify-center items-center'>
        <form className='bg-black p-2 w-11/12 md:w-1/2 grid grid-cols-12 rounded-2xl opacity-85' onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText} className='bg-gray-200 py-2 md:px-4 md:m-4 m-1 px-1 rounded-lg col-span-9' type='text' placeholder={lang[appLang].aiSearchPlaceholder}/>
            <button className='cursor-pointer bg-red-700 py-2 md:px-4 md:m-4 m-1 px-1 rounded-lg col-span-3 text-white' onClick={handleAISearchSubmit}>{lang[appLang].submit}</button>
        </form>
    </div>
  )
}

export default AISearchBar