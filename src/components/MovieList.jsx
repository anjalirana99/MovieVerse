import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
    if(!movies)return
  return (
    <div className='movie-list-div text-white p-2'>
        <h1 className='px-5 py-2 text-3xl'>{title}</h1>
        <div className='flex overflow-x-scroll p-4 scrollbar-hide'> 
            <div className='flex gap-5'>
                {movies.map(movie=> <MovieCard key={movie.id} movie={movie}/>)}
            </div>
            
            
        </div>
    </div>
    
  )
}

export default MovieList