import { useRef } from "react";
import OpenAI from 'openai';
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptRecommendedMovies } from "../utils/movieSlice";
import { addGptResults } from "../utils/gptSlice";

const GPTSearchBar=()=>{
    const dispatch = useDispatch()
    const search = useRef(null)
    const client = new OpenAI({
        apiKey: process.env.REACT_APP_OPEN_AI_KEY, // This is the default and can be omitted
        dangerouslyAllowBrowser: true
    });


    const getRecommendedMovies = async(movieName)=>{
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movieName+'&include_adult=false&language=en-US&page=1', options)
        const dataJson =  await data.json()
        return dataJson.results;
    }

    const askGPT = async ()=>{
        const searchQuery ="Please act as a movie recommend system. Please take this query: '"+search.current.value+"' and please provide the movie name list by comma seperated. Movie list should not exceed 10. Please give me most matching list. Also only the movie names should be present. Dont include the query in results"
        const completion = await client.chat.completions.create({
            model: 'gpt-4o',
            messages: [
                { role: 'developer', content: searchQuery },
            ],
            });
        const recommendedMovies = completion?.choices[0]?.message?.content?.split(",")
        const results = recommendedMovies.map((item)=>getRecommendedMovies(item))
        dispatch(addGptResults(recommendedMovies))
        dispatch(addGptRecommendedMovies(await Promise.all(results))) 
    }

    return(
        <div className="w-[80%] h-10 absolute  z-30 mx-[10%] top-32 flex md:w-[50%] md:mx-[25%] md:h-auto md:translate-y-1/2 md:top-1/3">
            <input 
                type="text" 
                placeholder="🔎How can i help you today?"
                className="w-[80%] p-2 rounded-md border-black border-2 md:p4"
                ref={search}
                />
            <button 
                onClick={askGPT}
                className="w-[20%] bg-blue-900 font-bold  ml-1 hover:bg-gray-600 text-white rounded-md border-2 border-black bg-gradient-to-b md:text-2xl md:p-4">Search</button>
        </div>
    )
}

export default GPTSearchBar;