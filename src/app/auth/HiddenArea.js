import React from "react"

import $ from "jquery"
const prod = "https://aaroncoding-backend.herokuapp.com/api/book"
const local = "http://localhost:3001/api/auth/signup"
const uList = "http://localhost:3001/api/book"
const uri = prod


export default class HiddenArea extends React.Component {
    constructor(props) {
        super(props)
        this.state = {res: [{name: "", email: ""}]}
    }
    componentDidMount() {
        $.ajax({
            url: uri,
            method: "GET",
        }).done(res => {
            console.log(res)
            let msg = res.message
            msg ? this.setState({res: msg})
                : this.setState({res: "ERROR: " + msg})
        })
    }
    render() {
        return (
            <div>
                <h4>Books</h4>
            </div>
        )
    }
}