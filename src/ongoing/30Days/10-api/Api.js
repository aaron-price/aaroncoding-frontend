import React, { Component } from "react"
const prod = "https://aaroncoding-backend.herokuapp.com/api/demo"
const local = "http://localhost:3001/api/demo"
const uri = prod
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
        this.setState({text: [{id: -1, body: "Waking up and calling the server..."}]})
        let xhr = new XMLHttpRequest()
        xhr.open("GET", uri)
        xhr.onload = () => {
            if (xhr.status === 200) {
                const res = JSON.parse(xhr.response)
                this.setState({ text: res })
            } else {
                console.log(xhr.status)
            }
        }
        xhr.send()
    }

    render() {
        return (
            <div className="App">
                <h1>API</h1>
                <div className="api__frontend">
                    Today I deployed 2 apps to Heroku. You are looking at one of them. The other is strictly a backend api server. Let's say hi to it!<br />
                    <br />
                    <h4>Click the button to make an ajax request to my API server</h4>
                    <RaisedButton label="Click me"
                                  onClick={() => this.clickHandler()}/>
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