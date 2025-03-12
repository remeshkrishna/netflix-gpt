import { useDispatch, useSelector } from "react-redux";
import { toggleGptSearch } from "../utils/gptSlice";
import GPTSearchBar from "./GPTSearchBar";
import MovieList from "./MovieList";
import { DEFAULT_BG_IMG } from "../utils/constants";
const GPTSearch=()=>{
    const recommendedMovies = useSelector((store)=>store.movie.gptRecommendedMovies)
    const gptResult = useSelector((store)=>store.gpt.gptResult)

    return(
        <div className="">
            <img
                alt="loading..."
                src={DEFAULT_BG_IMG}
                className="relative bg-gradient-to-b from-black/95 to-black/50 h-screen w-screen z-0 object-cover"
            />
            <GPTSearchBar/>
            <div className="bg-black -mb-10">
                <div className="relative -top-96 bg-black bg-opacity-70">
                    {recommendedMovies?.map((item,index)=><MovieList title={gptResult[index]} key={index} movies={item}/>)}
                </div>
            </div>
            
        </div>
    )
}

export default GPTSearch;