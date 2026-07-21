import { useSelector } from 'react-redux'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpComingMovies from '../hooks/useUpComingMovies'
import Header from './Header'
import MainMovieContainer from './MainMovieContainer'
import SecondaryMovieContainer from './SecondaryMovieContainer'
import AISearch from './AISearch'

const Browse = () => {
  const showAISearch = useSelector((store)=>store.AISearch.showAISearch)
  
  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpComingMovies()

  return (
    <div>
       <Header/>
      {showAISearch ?
        <AISearch/> 
      : 
        <>
        <MainMovieContainer/>
        <SecondaryMovieContainer/>
        </>
      
      }  
    </div>
  )
}

export default Browse