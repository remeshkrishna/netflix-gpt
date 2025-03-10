import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";


const HeaderComponent = (prop)=>{
    const [loginState,setLoginState] = useState(prop.loginState)
    // const navigate =useNavigate()
    // const handleClick = ()=>{
    //     console.log("clicked")
    //     setPathType("/login")
    //     navigate("/login")
    // }
    const navigate =useNavigate()
    const selector = useSelector((store)=>store.user?.displayName)
    const handleSignout = ()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/")
            setLoginState("signed-out")
          }).catch((error) => {
            // An error happened.
          });
    }
    return(
        <div className="absolute w-full flex justify-between bg-red-300 left-1/2 -translate-x-1/2 z-10 bg-opacity-0">
            <img 
                alt="loading..."
                src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                className="w-52 h-20 ml-44"
            />
           {loginState==="signed-in" && <div className="flex flex-wrap">
                <p className="mr-2 mt-4 text-4xl">👤{selector}</p>
                <button onClick={handleSignout} className="bg-red-500 w-20 h-10 mr-4 mt-4 rounded-lg text-white">Sign out</button>
            </div>}
            
            {/* {pathType==="/" && <div className="mr-44">
                <button className="bg-gray-700 w-32 h-10 mr-4 mt-4 rounded-lg text-white">English</button>
                
            </div>} */}
            
        </div>
    )
}

export default HeaderComponent;