import { lazy } from "react"

const Home = lazy(() => import("../component/Home"))
const Login = lazy(() => import("../Auth/Login"))
const LawyerLogin = lazy(() => import("../Auth/LawyerLogin"))
const UserLogin = lazy(() => import("../Auth/UserLogin"))
const LawyerDashBoard = lazy(() => import("../Auth/LawyerDashBoard"))

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
    {
        path: "/login/user",
        name: "UserLogin",
        component: UserLogin
    },
    {
        path: "/login/lawyer",
        name: "LawyerLogin",
        component: LawyerLogin
    },
    {
        path: "/Lawyer-Dashboard",
        name: "LawyerDashBoard",
        component: LawyerDashBoard
    },
]

export default routeComponent;