import MovieCard from "./MovieCard";
const MovieList=({title,movies})=>{
    if(movies.length==0)return
    return(
        <div className="w-full p-6 mb-8">
            <h1 className="font-bold text-4xl text-white ml-4 mb-4">{title}</h1>
            <div className="flex overflow-x-scroll scrollbar-hide">
                    {movies.map((item)=><MovieCard key={item.id} movie={item} posterUrl={item.poster_path}/>)} 
            </div>
            
            
            
        </div>
    )
}

export default MovieList;