import React from "react"
import RaisedButton from "material-ui/RaisedButton"
import Divider from "material-ui/Divider"
import Paper from "material-ui/Paper"
import TextField from "material-ui/TextField"
import PropTypes from "prop-types"

import $ from "jquery"
const prod = "https://aaroncoding-backend.herokuapp.com/api/auth/signup"
const local = "http://localhost:3001/api/auth/signup"
const uList = "http://localhost:3001/api/auth/list"
const back2 = "http://localhost:3001/api/signup"
const uri = back2


export default class SignupForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fields: {
                username: "",
                email: "",
                password: "",
            },
            res: "",
        }
        this.changeHandler = this.changeHandler.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
    }

    changeHandler(e, field, val) {
        let value = e.target.value
        let newFields = Object.assign({}, this.state.fields)
        newFields[field] = value
        this.setState({ fields: newFields })
    }

    submitHandler(e) {
        e.preventDefault()
        const fl = this.state.fields
        const payload = {
            username: fl.username,
            email: fl.email,
            password: fl.password,
        }
        $.ajax({
            url: uri,
            method: "POST",
            data: payload,
        }).done((res) => {
            this.setState({res: `${res.success} - ${res.msg}`})
        })
        // ///////////////
        // fetch(uri, {
        //     method: "POST",
        //     body: data,
        // })
        //     .then(this.handleErrors)
        //     .then(res => res.json())
        //     .then(res => {
        //         console.log(res)
        //         this.setState({ res: res[0].message }
        //     )})

    }

    handleErrors(response) {
        if (!response.ok) {
            this.setState({text: [{id: -1, body: "Sorry, there was a problem :-("}]})
            throw Error(response.statusText)
        }
        return response
    }

    render() {
        return (
            <div>
                <h4>Response: {this.state.res}</h4>
                <Form
                    changeHandler={this.changeHandler}
                    fields={this.state.fields}
                    submitHandler={this.submitHandler} />
            </div>
        )
    }
}

const Form = props => {
    const style = { marginLeft: 20 }
    return (
        <Paper zDepth={2}>
            <TextField hintText="Username" style={style} underlineShow={false} onChange={e => props.changeHandler(e, "username")}/>
            <Divider />

            <TextField hintText="Email address" style={style} underlineShow={false} onChange={e => props.changeHandler(e, "email")} />
            <Divider />

            <TextField hintText="Password" style={style} type="password" underlineShow={false} onChange={e => props.changeHandler(e, "password")} />
            <Divider />

            <div style={{display: "flex", justifyContent: "center"}}>
                <RaisedButton
                    label="Submit"
                    secondary={true}
                    style={{margin: "1em"}}
                    onClick={(e) => props.submitHandler(e)} />
            </div>
        </Paper>
    )
}
Form.propTypes = {
    changeHandler: PropTypes.func.isRequired,
    fields: PropTypes.object.isRequired,
    submitHandler: PropTypes.func.isRequired,
}