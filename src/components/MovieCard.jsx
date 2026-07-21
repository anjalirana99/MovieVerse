import React from 'react'
import { CARD_IMG_CDN } from '../utils/constants'

const MovieCard = ({movie}) => {
  if(!movie.poster_path)return
  return (
    <div className='w-48 p-2'>
        <img className="rounded-2xl" alt="img_poster" src={CARD_IMG_CDN+movie.poster_path}/>
    </div>
  )
}

export default MovieCard