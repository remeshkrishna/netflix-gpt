import {useSelector } from "react-redux";
import BackgroundVideo from "./BackgroundVideo"
import VideoTitle from "./VideoTitle";
import { useGetMovieTrailer } from "../hooks/useGetMovieTrailer";

const MainBrowseComponent =()=>{
    const selector = useSelector((store)=>store.movie.nowPlayingMovies)
    let activeMovie = useSelector((store)=>store.movie.activeMovie)
    if(!activeMovie){
        activeMovie = selector[0]
    }
    useGetMovieTrailer(activeMovie)

    
    
    if(!selector) return
    return(
        <div className="relative w-screen h-screen bg-black">
            <BackgroundVideo/>
            <VideoTitle video={activeMovie}/>
        </div>
    )
}
export default MainBrowseComponent;