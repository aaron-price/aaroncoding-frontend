import React, { Component } from "react"
import RaisedButton from "material-ui/RaisedButton"

class Api extends Component {
    constructor(props) {
        super(props)
        this.state = {text: []}
        this.clickHandler = this.clickHandler.bind(this)
    }

    handleErrors(response) {
        if (!response.ok) {
            this.setState({text: [{id: -1, body: "Hmm, I can't connect right now."}]})
            throw Error(response.statusText)
        }
        return response
    }

    clickHandler() {
        this.setState({text: [{id: -1, body: "Calling server"}]})
        const prod = "https://aaroncoding-backend.herokuapp.com/api/demo"
        const local = "http://localhost:3001/api/demo"

        fetch(prod)
            .then(this.handleErrors)
            .then(res => res.json())
            .then(text => this.setState({ text }))
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div className="App">
                <h1>User Authentication</h1>
                <form>
                    <div>
                        <label>Username: </label>
                        <input ref="name" type="text" name="name"/>
                    </div>
                    <div>
                        <label>Password: </label>
                        <input ref="pass" type="password" name="pass"/>
                    </div>
                    <div>
                        <RaisedButton
                            label="Create New User"
                            onClick={(e) => this.createUser(e)}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default Api