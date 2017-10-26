import Link from 'next/link'
import 'isomorphic-fetch'
import React, { Component } from 'react'

import Paper from 'material-ui/Paper'

import Head from '../../components/Head.js'
import ContactForm from '../../components/ContactForm.js'
import { initStore } from '../../redux/store'
import withRedux from 'next-redux-wrapper'
import { return_current_user } from '../../services/current_user.js'

class About extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <Head current_user={this.props.current_user}>
                <div>
                    <h1>Email me</h1>
                    <p> After you fill out the form, your browser makes an ajax request to my
												other app (the backend api server) which sends a request to the sendgrid SMPT server,
												which finally delivers an email to me with this data.</p>
                    <p>I also do some validation and spam prevention</p>
                    <ContactForm />
                </div>
            </Head>
        )
    }
}
About.getInitialProps = async function(context) {
    return {
        current_user: await return_current_user(context),
    }
}
export default withRedux(initStore, null)(About)
