import React from "react"
import RaisedButton from "material-ui/RaisedButton"
import Divider from "material-ui/Divider"
import Paper from "material-ui/Paper"
import TextField from "material-ui/TextField"
import PropTypes from "prop-types"
import Alert from "../../helpers/Alert"

import $ from "jquery"
const prod = "https://aaroncoding-backend.herokuapp.com/api/signin"
const local = "http://localhost:3001/api/signin"
const uri = prod


export default class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fields: {
                username: "",
                password: "",
            },
            loggedIn: false,
            msg: "",
            status: "",
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
            this.setState({msg: res.msg, status: res.success ? "Success" : "Error"})
            if (res.success) {
                this.props.updateToken(res.token)
                this.props.updateUser(res.username)
            }
        })
    }

    render() {
        return (
            <div>
                <h2>Log in:</h2>
                <Form
                    changeHandler={this.changeHandler}
                    fields={this.state.fields}
                    submitHandler={this.submitHandler}
                    msg={this.state.msg}
                    status={this.state.status} />
            </div>
        )
    }
}
LoginForm.propTypes = {
    updateToken: PropTypes.func.isRequired,
    updateUser: PropTypes.func.isRequired,
}

const Form = props => {
    const style = { marginLeft: 20 }
    return (
        <Paper zDepth={2}>
            {props.status === "Error" && <Alert status={props.status} text={props.msg} />}
            {props.status === "Pending" && <Alert status={"Warning"} text={"Creating account, please wait..."} />}

            <TextField hintText="Username" style={style} underlineShow={false} onChange={e => props.changeHandler(e, "username")}/>
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
    msg: PropTypes.string,
    status: PropTypes.string.isRequired,
}