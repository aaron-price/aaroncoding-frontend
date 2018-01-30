import React, { Component } from 'react'
import Head from '../../components/Head.js'
import { initStore } from '../../redux/store'
import withRedux from 'next-redux-wrapper'
import { return_current_user } from '../../services/current_user.js'

class NetworkMonitor extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Head description="Mockup design" current_user={this.props.current_user}>
                <h1>Template</h1>
            </Head>
        )
    }
}

NetworkMonitor.getInitialProps = async function(context) {
    return {
        current_user: await return_current_user(context),
    }
}

export default withRedux(initStore, null)(NetworkMonitor)