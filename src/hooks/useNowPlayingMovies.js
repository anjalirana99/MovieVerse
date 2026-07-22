import { MOVIE_API_OPTION } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addNowPlayingMovies } from '../store/moviesSlice'
import { useEffect } from 'react'

const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch()
    const nowPlayingMovies = useSelector((store)=>store.movies.nowPlayingMovies)

    const getNowPlayingMovies = async() =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', MOVIE_API_OPTION)
        const json = await data.json()
        dispatch(addNowPlayingMovies(json.results))

    }

    useEffect(()=>{
      if(!nowPlayingMovies)  getNowPlayingMovies()  //on every render of component if data is not there then only hit api 
    },[])
}
export default useNowPlayingMovies