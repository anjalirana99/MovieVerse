import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const AISearchRecommendations = () => {
  const AISearch  = useSelector((store)=>store.AISearch)
  const{moviesName,moviesResult} = AISearch
  return (
    moviesName ? 
    <div className='all-listing-container bg-black text-white p-4 md:m-4 mt-30 opacity-90'>
      {moviesName.map((moviename,idx)=><MovieList title={moviename} key={moviename} movies={moviesResult[idx]}/>)}
    </div> : <></>
  )
}

export default AISearchRecommendations