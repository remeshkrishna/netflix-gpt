import { addTrailerId, addActiveMovie } from "../utils/movieSlice";
import { useEffect} from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";

export const useGetMovieTrailer=(movie)=>{
    const dispatch = useDispatch()
    
    
    const getTrailerId = async (id) => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+ id +'/videos?language=en-US', options);
        const dataJson = await data.json()
        const trailer = dataJson.results?.filter((item)=>item.type==="Trailer")
        if(trailer?.length>0){
            dispatch(addTrailerId(trailer[0].key));
            dispatch(addActiveMovie(movie))
        }
        
    }
    useEffect(()=>{
        if(movie){
            getTrailerId(movie.id)
        }
        
    },[])
}
