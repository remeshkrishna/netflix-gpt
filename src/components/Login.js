import StartingForm from "./StartingForm";
import HeaderComponent from "./HeaderComponent";
import { DEFAULT_BG_IMG } from "../utils/constants";

const Login = ()=>{
    return (
        <div>
            <HeaderComponent loginState="signed-out"/>
            <div className="absolute z-0 w-full h-full left-1/2 -translate-x-1/2 bg-gradient-to-b from-black/95 to-black/50">
            <img
                alt="loading..."
                src={DEFAULT_BG_IMG}
                className="bg-gradient-to-b from-black/95 to-black/50 h-full w-full"
            />
            <StartingForm/>
        </div>
        </div>
        
    )
}

export default Login;