import React from "react"
import RaisedButton from "material-ui/RaisedButton"
import Divider from "material-ui/Divider"
import Paper from "material-ui/Paper"
import TextField from "material-ui/TextField"
import PropTypes from "prop-types"

import $ from "jquery"
const prod = "https://aaroncoding-backend.herokuapp.com/api/signup"
const local = "http://localhost:3001/api/signup"
const uri = local


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
    }

    render() {
        return (
            <div>
                <h4>Create New Account</h4>
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
                    label="Create Account"
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