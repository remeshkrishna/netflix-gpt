import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies: null,
        trailerId: null,
        activeMovie: null,
        activeMovieLogo:null,
        gptRecommendedMovies: null,
        

    },
    reducers: {
        addNowPlayingMovies: (state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addTrailerId: (state,action)=>{
            state.trailerId = action.payload
        },
        addGptRecommendedMovies: (state,action)=>{
            state.gptRecommendedMovies = action.payload
        },
        addActiveMovie: (state,action)=>{
            state.activeMovie = action.payload
        },
        addActiveMovieLogo: (state,action)=>{
            state.activeMovieLogo = action.payload
        } 
    }
})

export const {addNowPlayingMovies,addTrailerId,addGptRecommendedMovies,addActiveMovie,addActiveMovieLogo} = movieSlice.actions
export default movieSlice.reducer