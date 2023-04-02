import { useRoutes } from "react-router"
import Home from "../pages/home"
import Login from "../pages/login"

const routes = [
    {
        path:'/',
        element: <Home/>
    },
    {
        path:'/login',
        element: <Login/>
    }
]

const Router = () => useRoutes(routes)

export default Router