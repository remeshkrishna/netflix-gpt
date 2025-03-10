import {RouterProvider } from "react-router-dom";
import Login from './components/Login'
import Browse from "./components/Browse";
import { createBrowserRouter } from "react-router-dom";

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
  
  return (
      <RouterProvider router={appRouter}/>
  )
}



export default App;
