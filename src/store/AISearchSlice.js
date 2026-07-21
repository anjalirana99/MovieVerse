import { createSlice } from "@reduxjs/toolkit";

const AISearchSlice = createSlice({
    name:"AISearch",
    initialState:{
        showAISearch:false,
        moviesName:null,
        moviesResult:null
    },
    reducers:{
        toggleAISearch:(state)=>{
            state.showAISearch = !state.showAISearch
        },
        addAISearchMoviesData:(state,action)=>{
            const {names, result} = action.payload
            state.moviesName = names
            state.moviesResult = result
        }
    }
})

export const{toggleAISearch, addAISearchMoviesData} = AISearchSlice.actions
export default AISearchSlice.reducer