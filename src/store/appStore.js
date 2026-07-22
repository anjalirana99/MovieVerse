import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import moviesReducer from "./moviesSlice"
import AISearchReducer from "./AISearchSlice"
import configReducer from "./configSlice"

const appStore = configureStore({
    reducer:{
        user: userReducer,
        movies: moviesReducer,
        AISearch : AISearchReducer,
        config: configReducer
    }
})

export default appStore