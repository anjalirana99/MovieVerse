import { createSlice } from "@reduxjs/toolkit";

const AISearchSlice = createSlice({
    name:"AISearch",
    initialState:{
        showAISearch:false
    },
    reducers:{
        toggleAISearch:(state)=>{
            state.showAISearch = !state.showAISearch
        }
    }
})

export const{toggleAISearch} = AISearchSlice.actions
export default AISearchSlice.reducer