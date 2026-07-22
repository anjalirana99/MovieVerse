import { useSelector } from "react-redux"
import MainVideoTitle from "./MainVideoTitle";
import MainVideoTrailer from "./MainVideoTrailer";

const MainMovieContainer = () => {
  const movies = useSelector((store)=>store.movies)
  const nowPlayings = movies.nowPlayingMovies

  if(!nowPlayings)return;

  const mainMovie = nowPlayings[0]
  const {original_title,overview,id}=mainMovie
  
  return (
    <div className=" main-movie relative pt-28 md:pt-0 bg-black">
      <MainVideoTitle title={original_title} overview={overview}/>
      <MainVideoTrailer movieId ={id}/>
    </div>
  )
}

export default MainMovieContainer