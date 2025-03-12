import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { options } from "../utils/constants";

export const useNowPlayingMovieList = ()=>{
    const dispatch = useDispatch()
    //Get Nowplaying movies
    const getNowPlayingMovieList = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
        const dataJson = await data.json()
        dispatch(addNowPlayingMovies(dataJson.results))
        
    }
    useEffect(()=>{
        getNowPlayingMovieList();
    },[])
}