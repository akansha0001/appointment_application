import React from "react"

const Login = () => {
    return (
        <div>
            <h1>
                "Its a Login Page"
            </h1>
            <ul>
                <li><a href="/auth/user/login">User Login</a></li>
                <li><a href="/auth/lawyer/login">Lawyer Login</a></li>
            </ul>
        </div>
    )
}
export default Login;