import React, { Component } from "react"
import RaisedButton from "material-ui/RaisedButton"
import $ from "jquery"
const prod = "https://aaroncoding-backend.herokuapp.com/api/users/new"
const local = "http://localhost:3001/api/users/new"
const URI = prod

class Api extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: ["waiting...."],
            status: "Ready",
        }
        this.createUser = this.createUser.bind(this)
        this.displayUsers = this.displayUsers.bind(this)
    }

    handleErrors(response) {
        if (!response.ok) {
            this.setState({text: [{id: -1, body: `Error: ${response.statusText}`}]})
            throw Error(response.statusText)
        }
        return response
    }


    createUser(e) {
        e.preventDefault()
        const username = this.refs.username.value
        const password = this.refs.password.value

        $.ajax({
            url: URI,
            method: "POST",
            data: {username, password},
        }).done((res) => {
            let msg = res.message
            msg ? this.setState({users: msg})
                : console.log("AJAX error: ", res)
        })
    }

    displayUsers() {

        $.ajax(URI, {
            url: URI,
            method: "GET",
        }).done((res) => {
            let msg = res.message
            msg ? this.setState({users: msg})
                : console.log("AJAX error: ", res)
        })
    }


    render() {
        return (
            <div className="App">
                <h1>User Authentication</h1>
                <form>
                    <div>
                        <label>Username: </label>
                        <input ref="username" type="text" name="username"/>
                    </div>
                    <div>
                        <label>Password: </label>
                        <input ref="password" type="password" name="password"/>
                    </div>
                    <div>
                        <RaisedButton
                            label="Create New User"
                            onClick={(e) => this.createUser(e)}
                        />
                    </div>
                </form>
                <br />
                <h4>Existing users</h4>
                <ul>{this.displayUsers()}</ul>
                <h4>Users:</h4>
                <ul>
                    {this.state.users.map((user, key) => {
                        return <li key={key}>
                            <p>id:{user._id}, username: {user.username}, password: {user.password}</p>
                            <RaisedButton
                                label="delete"
                                onClick={(e) => this.deleteUser(e, user._id)}
                            />
                        </li>
                    })}
                </ul>

            </div>
        )
    }
}

export default Api