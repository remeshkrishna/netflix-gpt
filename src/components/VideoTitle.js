import { useEffect, useState } from "react";
import { options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addActiveMovieLogo } from "../utils/movieSlice";

const VideoTitle =({video})=>{
    const dispatch = useDispatch()
    const logo = useSelector((store)=>store.movie.activeMovieLogo)

    const findLogoUrl=async(movieId)=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/images', options)
        const dataJson = await data.json()
        const logoUrl = dataJson.logos?.filter((item)=>item.iso_639_1=="en")[0].file_path
        dispatch(addActiveMovieLogo(logoUrl))
    }
    useEffect(()=>{
        if(video){
            findLogoUrl(video.id)
        }
    },[])
    if(!video) return
    return(
        <div className="absolute w-3/12 text-white ml-[5%] mt-[10%]">
            {logo && <img
                src={"https://image.tmdb.org/t/p/w500/"+logo}
                className="w-6/12 "
            />}
            {/* <h1 className="font-bold text-4xl mt-4 mb-4">{video.title}</h1> */}
            <p className="w-[55%] mt-6">{video.overview}</p>
            <div className="mt-2 text-black flex">
                <button className="bg-gray-50 w-40 p-4  text-sm font-semibold rounded-md hover:bg-slate-400 hover:text-white" >▶️Play</button>
                <button className="bg-gray-600 text-white w-40 p-4 text-sm font-semibold ml-2 rounded-md">More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle;