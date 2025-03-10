import { useRef, useState } from "react";
import { validate } from "../utils/validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const StartingForm = ()=>{
    const dispatch = useDispatch()
    const [isSignIn, setIsSignIn] = useState(false);
    const [errorMessage,setErrorMessage] =useState("");
    const email = useRef(null)
    const password = useRef(null)
    const name= useRef("")
    //const navigate = useNavigate();

    const toggleSigninSignup =()=>{
        setIsSignIn(!isSignIn);
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
    }

    const handleClick=()=>{
        //Validate form
        const message = isSignIn?validate(email.current.value,password.current.value):validate(email.current.value,password.current.value,name.current.value);
        setErrorMessage(message);

        //Do this if form is valid
        if(message!=="") return
        
        if(!isSignIn){
            //Create user in firebase
            createUserWithEmailAndPassword(auth,email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value, photoURL: ""
                  }).then(() => {
                    // Profile updated!
                    const {uid,email,displayName} =auth.currentUser
                    dispatch(addUser({uid:uid,email:email,displayName:displayName}))

                  }).catch((error) => {
                    // An error occurred
                  });
                

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMsg = error.message;
                setErrorMessage(errorMsg)
            });
        }
        else{
            //Login with the user in firebase
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMsg = error.message;
                setErrorMessage(errorMsg)
            });
        }
    }

    return(
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b">
            <form onSubmit={(e)=>handleSubmit(e)} className="w-2/12 p-8 pb-8  flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold  place-items-center bg-black bg-opacity-80 rounded-md">
                <h1 className="font-bold text-4xl m-2">{isSignIn?"Sign In":"Unlimited movies, TV shows and more"}</h1>
                {!isSignIn && <input ref={name} className="w-full p-4 rounded-md m-4 bg-gray-800 bg-opacity-20  border border-s" type="text" placeholder="Username"/>}
                <input ref={email} className="w-full p-4 rounded-md m-4 bg-gray-800 bg-opacity-20  border border-s" type="text" placeholder="Email or mobile number"/>
                <input ref={password} className="w-full p-4 m-4 rounded-md bg-gray-800 bg-opacity-20  border border-s" type="text" placeholder="password"/>
                <button onClick={handleClick} className="w-full p-4 m-4 rounded-md bg-red-600">{isSignIn?"Sign In":"Sign Up"}</button>
                <p className="text-red-700">{errorMessage}</p>
               {isSignIn && <p>OR</p>}
               {isSignIn &&<button className="w-full p-4 m-2 rounded-md bg-gray-500 mb-10">Use a sign-in code</button>}
               <button onClick={toggleSigninSignup}>{isSignIn?"No Account? Sign Up":"Already a member? Sign In"}</button>
                </form>
        </div>
        
    )
}

export default StartingForm;