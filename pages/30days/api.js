import Link from 'next/link'
import 'isomorphic-fetch'
import React, { Component } from 'react'

import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'

import Head from '../../components/Head.js'
import {CodeBlock, GreenText} from '../../components/CodeBlocks.js'
import { initStore } from '../../redux/store'
import withRedux from 'next-redux-wrapper'
import { return_current_user } from '../../services/current_user.js'

class API extends Component {
    constructor(props) {
        super(props)
        this.state = {
            responses: [],
            waiting: false,
        }
    }
    ping() {
        let start = new Date()
        this.setState({ waiting: true })
        fetch('/ping', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then(blob => blob.json())
            .then(data => {
                let finish = new Date()
                this.setState({ waiting: false })
                this.setState((prevState) => {
                    if(typeof data.message === 'string') {
                        let res = Object.assign({}, data, { time: finish - start })
                        let responses = [...prevState.responses, res]
                        return { responses }
                    } else {
                        let keys = Object.keys(data.message)
                        let messages = keys.map(key => key + ': ' + data.message[key])
                        let res = Object.assign({}, { time: finish - start, message: messages.join(' ') })
                        let responses = [...prevState.responses, res]
                        return { responses }
                    }
                })
            })
            .catch(e => {
                this.setState((prevState) => {
                    let responses = prevState.responses
                    responses.push({ status: 500, message: e })
                    return { responses }
                })
            })
    }
    render() {
        return (
            <Head current_user={this.props.current_user}>
                <div>
                    <h4 className="about_text">Cross origin API and Ajax</h4>
                    <p className="about_text">Today I deployed 2 apps to Heroku. You are looking at one
											of them. The other is strictly a backend api server.
											Let's say hi to it!

											Click the button to make an ajax request to my API server</p>
                    <RaisedButton onClick={() => this.ping()} label="Ping the server"/>
                    <br/><br/>
                    <CodeBlock>
                        <GreenText>Response:</GreenText>
                        {this.state.responses.map((res, key) => {
                            return (<p key={key}>
																GET {res.status}&nbsp;
																- message: {res.message}&nbsp;
																- {res.time}ms</p>)
                        })}
                        {this.state.waiting && (
                            <p>Waiting for the other server. If you have time to read this, it's probably just waking up...</p>
                        )}
                    </CodeBlock>
                </div>
            </Head>
        )
    }
}
API.getInitialProps = async function(context) {
    return {
        current_user: await return_current_user(context),
    }
}
export default withRedux(initStore, null)(API)
