
import { Outlet, RouterProvider } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import Login from './components/Login'
import Browse from "./components/Browse";
import { createBrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "./utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/browse",
    element: <Browse/>
  }
])

function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
          onAuthStateChanged(auth, (user) => {
          if (user) {
              console.log("auth changed")
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const uid = user.uid;
              const emailId = user.email
              const displayname = user.displayName
              console.log(user);
              dispatch(addUser({uid:uid,email:emailId,displayName:displayname}))
              // ...
          } else {
              // User is signed out
              // ...
              dispatch(removeUser())
          }
          });
    },[])
  return (
      <RouterProvider router={appRouter}/>
  )
}



export default App;
