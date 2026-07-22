import { useEffect } from 'react'
import { MOVIE_API_OPTION } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addMainMovieTrailer } from '../store/moviesSlice'

const useMainMovieTrailer = (movieId) =>{
    const dispatch = useDispatch()
    const mainMovieTrailer = useSelector((store)=>store.movies.trailer)

    const getMovieAllClips = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?', MOVIE_API_OPTION)
        const json = await data.json();
        const allTrailers = json.results.filter((video)=>video.type==="Trailer" && video.name==="Official Trailer") 
        const trailer = allTrailers.length>0 ? allTrailers[0] : json.results[0]
        dispatch(addMainMovieTrailer(trailer))
    }
    useEffect(()=>{
       if(!mainMovieTrailer) getMovieAllClips()
    },[])
}
export default useMainMovieTrailer