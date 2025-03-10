import StartingForm from "./StartingForm";
import HeaderComponent from "./HeaderComponent";

const Login = ()=>{
    return (
        <div>
            <HeaderComponent loginState="signed-out"/>
            <div className="absolute z-0 w-full h-full left-1/2 -translate-x-1/2 bg-gradient-to-b from-black/95 to-black/50">
            <img
                alt="loading..."
                src="https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web/IN-en-20250303-TRIFECTA-perspective_d5f81427-d6cf-412d-8e86-2315671b9be1_large.jpg"
                className="bg-gradient-to-b from-black/95 to-black/50 h-full w-full"
            />
            <StartingForm/>
        </div>
        </div>
        
    )
}

export default Login;