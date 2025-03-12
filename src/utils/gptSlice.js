import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name: "gpt",
    initialState:{
        gptSearch: false,
        gptResult: null
    },
    reducers:{
        toggleGptSearch: (state)=>{
            state.gptSearch = !state.gptSearch
        },
        addGptResults: (state,action)=>{
            state.gptResult = action.payload
        }
    }
})

export const{toggleGptSearch,addGptResults} = gptSlice.actions
export default gptSlice.reducer