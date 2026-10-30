import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../components/layouts/MainLayout"
import LandingWrapper from "../screen/LandingWrapper"

const Router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[{
            index:true,
            element:<LandingWrapper/>
        }]
    }
]) 

export default Router