import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { addUser,removeUser } from "../utils/userSlice";
import { toggleGptSearch } from "../utils/gptSlice";
import { NETFLIX_LOGO } from "../utils/constants";

const HeaderComponent = (prop)=>{
    const [loginState,setLoginState] = useState(prop.loginState)
    const dispatch=useDispatch()
    const selector = useSelector((store)=>store.user?.displayName)
    const gptSelector = useSelector((store)=>store.gpt?.gptSearch)
    const navigate = useNavigate();
    useEffect(()=>{
            if(auth.currentUser!==null) return
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    // User is signed in, see docs for a list of available properties
                    // https://firebase.google.com/docs/reference/js/auth.user
                    const uid = user.uid;
                    const emailId = user.email
                    const displayname = user.displayName
                    dispatch(addUser({uid:uid,email:emailId,displayName:displayname}))
                    navigate("/browse")
                    // ...
                } else {
                    // User is signed out
                    // ...
                    if(auth.currentUser===null && selector!==undefined){
                        dispatch(removeUser())
                    }
                    dispatch(toggleGptSearch())
                    navigate("/")
                }
                })
        },[])

    
    const handleSignout = ()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            //navigate("/")
            setLoginState("signed-out")
          }).catch((error) => {
            // An error happened.
          });
    }

    const toggleGptSearchState = ()=>{
        dispatch(toggleGptSearch())
    }


    return(
        <div className="absolute w-full flex justify-between bg-red-300 left-1/2 -translate-x-1/2 z-10 bg-opacity-0">
            <img 
                alt="loading..."
                src={NETFLIX_LOGO}
                className="w-52 h-20 ml-44"
            />
           {loginState==="signed-in" && <div className="flex flex-wrap">
                {selector && <button 
                    onClick={toggleGptSearchState} 
                    className="bg-blue-500 w-40 h-10 mr-4 mt-4 rounded-lg text-white  hover:bg-gray-500 border">{gptSelector?"Dashboard":"GPT Search"}</button> }
                <p className="mr-2 mt-4 text-xl p-2 text-white font-bold">👤{selector}</p>
                <button onClick={handleSignout} className="bg-red-500 w-20 h-10 mr-4 mt-4 rounded-lg text-white">Sign out</button>
            </div>}
        </div>
    )
}

export default HeaderComponent;