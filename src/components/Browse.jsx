import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpComingMovies from '../hooks/useUpComingMovies'
import Header from './Header'
import MainMovieContainer from './MainMovieContainer'
import SecondaryMovieContainer from './SecondaryMovieContainer'

const Browse = () => {
  
  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpComingMovies()

  return (
    <div>
      <Header/>
      <MainMovieContainer/>
      <SecondaryMovieContainer/>
    </div>
  )
}

export default Browse