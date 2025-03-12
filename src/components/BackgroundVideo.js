import { useSelector } from "react-redux";

const BackgroundVideo =()=>{
    const selector =useSelector((store)=>store.movie.trailerId)
    return(
        <div className="absolute w-screen h-screen overflow-hidden">
            <iframe
                className="absolute"
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: "100vw",
                    height: "100vh", // Ensures full height coverage
                    minHeight: "100vh",
                    minWidth: "100vw",
                    pointerEvents: "none",
                    transform: "translate(-50%, -50%) scale(1.2)", // Zoom in slightly to remove black bars
                }}
                src={`https://www.youtube.com/embed/${selector}?autoplay=1&mute=1&loop=1&playlist=${selector}&controls=0&showinfo=0&modestbranding=1`} 
                title="YouTube video player"
                allow="autoplay; encrypted-media"

                allowFullScreen
            ></iframe>
        </div>
    )
}

export default BackgroundVideo;