
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { addUser,removeUser } from "../utils/userSlice";
import HeaderComponent from "./HeaderComponent";
import { Outlet } from "react-router-dom";

const Body =()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;
            const emailId = user.email
            const displayname = user.displayName
            console.log(user);
            //dispatch(addUser(user))
            // ...
        } else {
            // User is signed out
            // ...
            //dispatch(removeUser())
        }
        });
  },[])
  
    return(
        <div >
            {console.log("body rendered")}
          <HeaderComponent/>
          <Outlet/>
        </div>
    )
}

// export default Body;