import MovieCard from "./MovieCard";
const MovieList=({title,movies})=>{
    if(movies.length==0)return
    return(
        <div className="w-full p-2 mb-4 md:p-6 md:mb-8">
            <h1 className="font-bold text-xl md:text-4xl text-white md:ml-4 md:mb-4">{title}</h1>
            <div className="flex overflow-x-scroll scrollbar-hide">
                    {movies.map((item)=><MovieCard key={item.id} movie={item} posterUrl={item.poster_path}/>)} 
            </div>
            
            
            
        </div>
    )
}

export default MovieList;