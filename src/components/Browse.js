import HeaderComponent from "./HeaderComponent";
import { useNowPlayingMovieList } from "../hooks/useNowPlayingMovieList";
import MainBrowseComponent from "./MainBrowseComponent";
import { useSelector } from "react-redux";
import SecondaryBrowseComponent from "./SecondaryBrowseComponent";
import GPTSearch from "./GPTSearch";
const Browse = ()=>{
    useNowPlayingMovieList()
    const selector=useSelector((store)=>store.movie?.nowPlayingMovies)
    const gptSelector = useSelector((store)=>store.gpt.gptSearch)
    if(!selector) return
    return(
        <div>
            <HeaderComponent loginState="signed-in"/>
            {gptSelector ? <GPTSearch/> : 
                <>
                    <MainBrowseComponent />
                    <SecondaryBrowseComponent/>
                </> 
            }
        </div>
    )
}

export default Browse;