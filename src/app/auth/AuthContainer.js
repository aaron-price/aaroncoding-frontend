import React from "react"
import SignupForm from "./Signup"

export default class AuthContainer extends React.Component {
    render() {
        return (
            <div>
                <p>Signup</p>
                <SignupForm />

                <p>Login</p>
                <p>Logout</p>
            </div>
        )
    }
}