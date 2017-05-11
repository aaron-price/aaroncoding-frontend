import React from "react"

import $ from "jquery"
const prod = "https://aaroncoding-backend.herokuapp.com/api/auth/signup"
const local = "http://localhost:3001/api/auth/signup"
const uList = "http://localhost:3001/api/auth/list"
const uri = uList


export default class ListUsers extends React.Component {
    constructor(props) {
        super(props)
        this.state = {res: [{name: "", email: ""}]}
    }
    componentDidMount() {
        $.ajax({
            url: uri,
            method: "GET",
        }).done(res => {
            let msg = res.message
            msg ? this.setState({res: msg})
                : this.setState({res: "ERROR: " + msg})
        })
    }
    render() {
        return (
            <div>
                <h4>Current users</h4>
                <ul>
                    {this.state.res.map((res, key) =>
                        <li key={key}>Name: {res.name}, email: {res.email}, pass: {res.password}</li>
                    )}
                </ul>
            </div>
        )
    }
}