import { useSelector } from "react-redux"
import MovieList from "./MovieList"


const SecondaryBrowseComponent=()=>{
    const movies = useSelector((store)=>store.movie.nowPlayingMovies)
    return(
        <div className="bg-black relative -mb-10 w-screen">
            <div className="relative -top-96">
                <MovieList title="Now Playing" movies={movies}/>
                <MovieList title="Now Playing" movies={movies}/>
                <MovieList title="Now Playing" movies={movies}/>
                <MovieList title="Now Playing" movies={movies}/>
                <MovieList title="Now Playing" movies={movies}/>
            </div>
        </div>
        
    )
}

export default SecondaryBrowseComponent;