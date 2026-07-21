import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import moviesReducer from "./moviesSlice"
import AISearchReducer from "./AISearchSlice"

const appStore = configureStore({
    reducer:{
        user: userReducer,
        movies: moviesReducer,
        AISearch : AISearchReducer
    }
})

export default appStore