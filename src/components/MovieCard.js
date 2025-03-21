import { useDispatch} from "react-redux"
import { addTrailerId,addActiveMovie,addActiveMovieLogo } from "../utils/movieSlice"
import { options } from "../utils/constants"
const MovieCard=({posterUrl,movie})=>{
    const dispatch = useDispatch()
    //const selector = useSelector((store)=>store.movie.nowPlayingMovies)?.filter((item)=>item.id===movie.id)[0]

    const getTrailerId = async (id) => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+ id +'/videos?language=en-US', options);
        const dataJson = await data.json()
        const trailer = dataJson.results?.filter((item)=>item.type==="Trailer")
        if(trailer?.length>0){
            dispatch(addTrailerId(trailer[0].key));
        }
    }
    const findLogoUrl=async(movieId)=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/images', options)
        const dataJson = await data.json()
        const logoUrl = dataJson.logos?.filter((item)=>item.iso_639_1==="en")[0].file_path
        dispatch(addActiveMovieLogo(logoUrl))
    }

    if(!posterUrl)return
    const handleClick=()=>{
        getTrailerId(movie.id)
        dispatch(addActiveMovie(movie))
        findLogoUrl(movie.id)
    }
    return(
        <div className="min-w-24 m-2 mt-2 md:min-w-48 md:max-w-48 md:m-4 md:mt-4 md:hover:scale-125" onClick={handleClick}>
            <img className=" rounded-lg" src={"https://image.tmdb.org/t/p/w500/"+posterUrl} alt="Image..."/>
        </div>
    )
}

export default MovieCard;