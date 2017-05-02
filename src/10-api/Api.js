import React, { Component } from "react"

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
                <h1>API</h1>
                <div className="api__frontend">
                    Today I deployed 2 apps to Heroku. You are looking at one of them. The other is strictly a backend api server. Let's say hi to it!<br />
                    <br />
                    <button onClick={() => this.clickHandler()}>Make API GET request</button>
                </div>
                <hr />
                <div className="api__backend">
                    {this.state.text.map(text =>
                        <div key={text.id}>{text.body}</div>
                    )}
                </div>



            </div>
        )
    }
}

export default Api