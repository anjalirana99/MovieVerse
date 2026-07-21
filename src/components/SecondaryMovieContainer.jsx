import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryMovieContainer = () => {
  const movies = useSelector((store)=>store.movies)
  return (
    <div className="secondary-movies bg-black">
      <div className="all-listing-container -mt-40 relative z-10">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Popular"} movies={movies.popularMovies}/>
        <MovieList title={"Trending"} movies={movies.topRatedMovies}/>
        <MovieList title={"Horror"} movies={movies.upComingMovies}/>
      </div>
    </div>
    
  )
}

export default SecondaryMovieContainer