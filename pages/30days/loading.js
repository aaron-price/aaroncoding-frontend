import Link from 'next/link'
import 'isomorphic-fetch'
import React, { Component } from 'react'

import Paper from 'material-ui/Paper'

import Head from '../../components/Head.js'
import { initStore } from '../../redux/store'
import withRedux from 'next-redux-wrapper'
import { return_current_user } from '../../services/current_user.js'

class About extends Component {
    constructor(props) {
        super(props)
        this.state = {
            progress: 0
        }
    }
    componentDidMount() {
        let interval = setInterval(() => {
            this.setState((prevState) => {
                if(prevState.progress < 100) {
                    return { progress: prevState.progress + 1 }
                } else {
                    clearInterval(interval)
                    return { progress: 100 }
                }
            })
        }, 100)
    }
    componentWillUnmount() {
        clearInterval(interval)
    }
    render() {
        let outer_style = {backgroundColor: '#F44336'}
        let inner_style = {
            backgroundColor: '#4CAF50',
            width: this.state.progress + '%'
        }
        return (
            <Head current_user={this.props.current_user}>
                <h1>Loading Bar</h1>
                <p></p>
                <div>
                    {this.state.progress === 100 ? (
                        <p>Done!</p>
                    ) : (
                        <p>Loading at {this.state.progress}%, please wait...</p>
                    )}

                    <Paper className="loading_outer" style={outer_style}>
                        <div className="loading_inner" style={inner_style}></div>
                    </Paper>

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
