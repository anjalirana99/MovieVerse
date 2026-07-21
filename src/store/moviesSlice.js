import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"Movies",
    initialState:{
        nowPlayingMovies: null,
        popularMovies:null,
        topRatedMovies:null,
        upComingMovies:null,
        trailer:null
    },
    reducers:{
        addNowPlayingMovies: (state,action)=>{
            state.nowPlayingMovies = action.payload
        },
        addPopularMovies: (state,action)=>{
            state.popularMovies = action.payload
        },
        addTopRatedMovies: (state,action)=>{
            state.topRatedMovies = action.payload
        },
        addUpComingMovies: (state,action)=>{
            state.upComingMovies = action.payload
        },
        addMainMovieTrailer:(state,action)=>{
            state.trailer = action.payload
        }
    }
})

export const{addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpComingMovies, addMainMovieTrailer} = moviesSlice.actions
export default moviesSlice.reducer