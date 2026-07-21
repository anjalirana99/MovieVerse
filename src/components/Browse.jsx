import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Header from './Header'
import MainMovieContainer from './MainMovieContainer'
import SecondaryMovieContainer from './SecondaryMovieContainer'

const Browse = () => {
  
  useNowPlayingMovies()

  return (
    <div>
      <Header/>
      <MainMovieContainer/>
      <SecondaryMovieContainer/>
    </div>
  )
}

export default Browse