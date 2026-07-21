import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addAISearchMoviesData } from '../store/AISearchSlice'
import useAISearchBar from '../hooks/useAISearchBar'

const AISearchBar = () => {
  const searchText = useRef()
  const dispatch = useDispatch()
  const {getAISearchMovies} = useAISearchBar()

  const handleAISearchSubmit= async()=>{
      const{moviesName,moviesResult} = await getAISearchMovies(searchText.current.value)
      dispatch(addAISearchMoviesData({names:moviesName, result:moviesResult}))
      
  }
  return (
    <div className='pt-[20%] flex justify-center items-center'>
        <form className='bg-black p-2 w-1/2 grid grid-cols-12 rounded-2xl opacity-85' onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText} className='bg-gray-200 p-2 m-4 rounded-lg col-span-9' type='text' placeholder='What would you like to watch today?'/>
            <button className='cursor-pointer bg-red-700 py-2 px-4 m-4 rounded-lg col-span-3 text-white' onClick={handleAISearchSubmit}>Submit</button>
        </form>
    </div>
  )
}

export default AISearchBar