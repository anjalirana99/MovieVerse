import { useSelector } from "react-redux"
import useMainMovieTrailer from "../hooks/useMainMovieTrailer"

const MainVideoTrailer = ({movieId}) => {
  const trailer = useSelector((store)=>store.movies.trailer)

  useMainMovieTrailer(movieId)
  
  return (
    <div className="w-full">
        <iframe className="w-full aspect-video"
        src={"https://www.youtube.com/embed/" + trailer?.key + "?si=wjlPoW_cL27nVKSG&autoplay=1&mute=1&controls=0"} 
        allow="autoplay;fullscreen" 
        referrerPolicy="strict-origin-when-cross-origin"></iframe>
    </div>
  )
}

export default MainVideoTrailer