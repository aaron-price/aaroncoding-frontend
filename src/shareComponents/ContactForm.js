import React, { Component } from "react"
const prod = "https://aaroncoding-backend.herokuapp.com/mail"
const local = "http://localhost:3001/mail"
const uri = prod
import Alert from "../helpers/Alert"

import Paper from "material-ui/Paper"
import RaisedButton from "material-ui/RaisedButton"
import TextField from "material-ui/TextField"
import Divider from "material-ui/Divider"

class ContactForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            res: [],
            status: "",
            fields: {
                from: "",
                subject: "",
                body: "",
                company: "",
            },
            errors: {
                from: "",
                subject: "",
                body: "",
                company: "",
            },
        }
        this.changeHandler = this.changeHandler.bind(this)
        this.clickHandler = this.clickHandler.bind(this)
    }
    changeHandler(e, field, val) {
        let value = e.target.value

        let newFields = Object.assign({}, this.state.fields)
        newFields[field] = value
        this.setState({ fields: newFields })

        // If errors were fixed, remove the warning
        const fields = this.state.fields
        if (this.validateEmail(fields.from)) {
            const newErrors = Object.assign(this.state.errors, {from: ""})
            this.setState({errors: newErrors})
        }
        if (this.validateText(fields.subject)) {
            const newErrors = Object.assign(this.state.errors, {subject: ""})
            this.setState({errors: newErrors})
        }
        if (this.validateText(fields.body)) {
            const newErrors = Object.assign(this.state.errors, {body: ""})
            this.setState({errors: newErrors})
        }

    }

    handleErrors(response) {
        if (!response.ok) {
            this.setState({res: [{id: -1, body: "Hmm, I can't connect right now."}]})
            throw Error(response.statusText)
        }
        return response
    }
    validateEmail(email) {
        const tests = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return tests.test(email)
    }
    validateText(text) {
        return (
            text.length > 1 &&          // Too short
            typeof text === "string"    // Not a string
        )
    }

    clickHandler() {
        // If there are errors, display them instead of sending
        const fields = this.state.fields
        const validFrom = this.validateEmail(fields.from)
        const validSubject = this.validateText(fields.subject)
        const validBody = this.validateText(fields.body)

        if (!validFrom || !validBody || !validSubject) {
            // Errors
            const newErrors = Object.assign(
                this.state.errors,
                {from: !validFrom ? "Invalid email" : ""},
                {subject: !validSubject ? "Invalid subject" : ""},
                {body: !validBody ? "Invalid body" : ""}
            )
            this.setState({errors: newErrors})
        } else {
            // Send email
            this.setState({text: [{id: -1, body: "Calling server"}]})
            let xhr = new XMLHttpRequest()
            xhr.open("POST", uri)
            xhr.setRequestHeader("Content-Type", "application/json")
            xhr.onload = () => {
                if (Number(xhr.stats) === 200) {
                    console.log(xhr.response)
                    console.log(xhr.status)
                    this.setState({res: JSON.parse(xhr.response), status: Number(xhr.status)})
                } else {
                    console.log(xhr.response)
                    console.log(xhr.status)
                    this.setState({res: JSON.parse(xhr.response), status: Number(xhr.status)})
                }
            }
            xhr.send(JSON.stringify({
                email: fields.from,
                subject: fields.subject,
                body: fields.body,
                company: fields.company,
            }))
        }
    }

    render() {
        const style = { marginLeft: 20 }
        return (
            <div className="contact-form">
                <div>
                    <Paper zDepth={2}>
                        <TextField
                            hintText="Can I hire you?"
                            floatingLabelText="Subject"
                            errorText={this.state.errors.subject}
                            floatingLabelFixed={true}
                            style={style}
                            onChange={e => this.changeHandler(e, "subject")}/>
                        <Divider />

                        <TextField
                            hintText="Google"
                            floatingLabelText="company"
                            floatingLabelFixed={true}
                            style={{display: "none"}}
                            onChange={e => this.changeHandler(e, "company")}/>
                        <Divider />

                        <TextField
                            hintText="aaronfan84@gmail.com"
                            floatingLabelText="Your email"
                            floatingLabelFixed={true}
                            errorText={this.state.errors.from}
                            style={style}
                            onChange={e => this.changeHandler(e, "from")} />
                        <Divider />

                        <TextField
                            hintText="I like your portfolio, let's do an interview!"
                            floatingLabelText="Body"
                            floatingLabelFixed={true}
                            errorText={this.state.errors.body}
                            multiLine={true}
                            rows={4}
                            rowsMax={12}
                            style={style}
                            onChange={e => this.changeHandler(e, "body")}
                        />
                        <Divider />
                        <RaisedButton label="Email Aaron"
                                      onClick={() => this.clickHandler()}
                                      style={{margin: "1em"}}
                        />
                        <Divider />
                    </Paper>



                </div>
                <hr />
                <div className="Mail__backend">

                    {this.state.res.map(text =>
                        <Alert
                            key={text.id}
                            status={String(this.state.status).charAt(0) === "2" ? "Success" : "Error"}
                            text={text.body}
                        />
                    )}
                </div>



            </div>
        )
    }
}

export default ContactForm