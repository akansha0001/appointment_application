import { lazy } from "react"

const Home = lazy(() => import("../component/Home"))
const Login = lazy(() => import("../Auth/Login"))

let routeComponent = [
    {
        path: "/home",
        name: "Home",
        component: Home
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    },
]

export default routeComponent;