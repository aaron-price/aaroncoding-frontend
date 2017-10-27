import React, { Component } from 'react'
import 'isomorphic-fetch'
const uri = '/email'
import Alert from './Alert'

import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import Divider from 'material-ui/Divider'

class ContactForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            res: [],
            status: '',
            fields: {
                from: '',
                subject: '',
                body: '',
                company: '',
            },
            errors: {
                from: '',
                subject: '',
                body: '',
                company: '',
            },
        }
        this.changeHandler = this.changeHandler.bind(this)
        this.clickHandler = this.clickHandler.bind(this)
        this.validateEmail = this.validateEmail.bind(this)
        this.validateText = this.validateText.bind(this)
    }
    changeHandler(e, field, val) {
        let value = e.target.value

        let newFields = Object.assign({}, this.state.fields)
        newFields[field] = value
        this.setState({ fields: newFields })

        // If errors were fixed, remove the warning
        const fields = this.state.fields
        if (this.validateEmail(fields.from)) {
            const newErrors = Object.assign(this.state.errors, {from: ''})
            this.setState({errors: newErrors})
        }
        if (this.validateText(fields.subject)) {
            const newErrors = Object.assign(this.state.errors, {subject: ''})
            this.setState({errors: newErrors})
        }
        if (this.validateText(fields.body)) {
            const newErrors = Object.assign(this.state.errors, {body: ''})
            this.setState({errors: newErrors})
        }

    }

    handleErrors(response) {
        if (!response.ok) {
            this.setState({res: [{id: -1, body: 'Hmm, I can\'t connect right now.'}]})
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
            typeof text === 'string'    // Not a string
        )
    }

    clickHandler() {
        let validates = (
            this.validateEmail(this.state.fields.from) &&
            this.validateText(this.state.fields.body)
        )
        if (validates) {
            fetch(uri, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.fields)
            })
                .then(blob => blob.json())
                .then(data => {
                    this.setState((prevState) => {
                        let res = prevState.res
                        res.push({id: res.length, body: data.data.message})
                        return {
                            res,
                            status: '200'
                        }
                    })
                })
                .catch(e => {
                    this.setState((prevState) => {
                        let res = prevState.res
                        res.push({id: res.length, body: 'Sorry, there was an issue sending the email. Please try again later, or manually write to coding.aaronp@gmail.com'})
                        return {
                            res,
                            status: '500'
                        }
                    })
                })
        } else {
            // Validation failed
            this.setState((prevState) => {
                let res = prevState.res
                res.push({id: res.length, body: 'Please check the form'})
                return {
                    res,
                }
            })
        }
    }

    render() {
        const style = { marginLeft: 20 }
        const cl = this.props.className ? `contact-form ${this.props.className}` : 'contact-form'
        return (
            <div className={cl}>
                <div className="Mail__backend">
                    {this.state.res.map(text =>
                        <div>
                            <Alert
                                key={text.id}
                                status={String(this.state.status).charAt(0) === '2' ? 'Success' : 'Error'}
                                text={text.body}
                            />
                        </div>
                    )}
                </div>
                <div>
                    <Paper zDepth={2}>
                        <TextField
                            hintText="Can I hire you?"
                            floatingLabelText="Subject"
                            errorText={this.state.errors.subject}
                            floatingLabelFixed={true}
                            style={style}
                            onChange={e => this.changeHandler(e, 'subject')}/>
                        <Divider />

                        <TextField
                            hintText="Google"
                            floatingLabelText="company"
                            floatingLabelFixed={true}
                            style={{visibility: 'hidden', height: 0, display: 'inherit'}}
                            onChange={e => this.changeHandler(e, 'company')}/>

                        <TextField
                            hintText="aaronfan84@gmail.com"
                            floatingLabelText="Your email"
                            floatingLabelFixed={true}
                            errorText={this.state.errors.from}
                            style={style}
                            onChange={e => this.changeHandler(e, 'from')} />
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
                            onChange={e => this.changeHandler(e, 'body')}
                        />
                        <Divider />
                        <RaisedButton label="Email Aaron"
                            onClick={() => this.clickHandler()}
                            style={{margin: '1em'}}
                        />
                        <Divider />
                    </Paper>



                </div>
            </div>
        )
    }
}

export default ContactForm
