import React from "react"
import RaisedButton from "material-ui/RaisedButton"
import Divider from "material-ui/Divider"
import Paper from "material-ui/Paper"
import TextField from "material-ui/TextField"
import PropTypes from "prop-types"

import $ from "jquery"
const prod = "https://aaroncoding-backend.herokuapp.com/api/auth/signup"
const local = "http://localhost:3001/api/auth/login"
const uList = "http://localhost:3001/api/auth/login"
const back2 = "http://localhost:3001/api/signin"
const uri = back2


export default class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fields: {
                username: "",
                password: "",
            },
            loggedIn: false,
        }
        this.changeHandler = this.changeHandler.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
    }
    componentDidMount() {
        // this.authenticate()
    }

    changeHandler(e, field, val) {
        let value = e.target.value
        let newFields = Object.assign({}, this.state.fields)
        newFields[field] = value
        this.setState({ fields: newFields })
    }
    authenticate() {
        $.ajax({
            url: "http://localhost:3001/api/auth/authenticated",
            method: "GET",
        }).done(res => {
            this.setState({loggedIn: res.success ? "Yes" : "No"})
        })
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
            console.log(res)
            this.setState({loggedIn: res.success ? "Yes" : "No"})
            res.success && this.props.updateToken(res.token)
        })
    }

    render() {
        return (
            <div>
                <h4>Logged In: {this.state.loggedIn ? "Yes" : "No"}</h4>
                <Form
                    changeHandler={this.changeHandler}
                    fields={this.state.fields}
                    submitHandler={this.submitHandler} />
            </div>
        )
    }
}
LoginForm.propTypes = {
    updateToken: PropTypes.func.isRequired,
}

const Form = props => {
    const style = { marginLeft: 20 }
    return (
        <Paper zDepth={2}>
            <TextField hintText="username" style={style} underlineShow={false} onChange={e => props.changeHandler(e, "username")}/>
            <Divider />

            <TextField hintText="Password" style={style} type="password" underlineShow={false} onChange={e => props.changeHandler(e, "password")} />
            <Divider />

            <div style={{display: "flex", justifyContent: "center"}}>
                <RaisedButton
                    label="Login"
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