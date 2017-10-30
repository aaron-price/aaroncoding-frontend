import Link from 'next/link'
import 'isomorphic-fetch'
import React, { Component } from 'react'

import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

import Head from '../../components/Head.js'
import PaddedPaper from '../../components/PaddedPaper.js'
import { initStore } from '../../redux/store'
import withRedux from 'next-redux-wrapper'
import { return_current_user } from '../../services/current_user.js'
let img_bot = 'https://s3-us-west-2.amazonaws.com/aaroncoding/images/chat/aaronbot.png'
let img_user = 'https://s3-us-west-2.amazonaws.com/aaroncoding/images/chat/user.png'
let data = [
    {
        uid: 0,
        content: 'Hey Aaron',
    },
    {
        uid: 1,
        content: 'Hey, what\'s up',
    },
    {
        uid: 0,
        content: 'I\'m just checking out your new portfolio',
    },
    {
        uid: 1,
        content: 'Oh ya? How do you like it so far?',
    },
]

class Chat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: data,
            users: [
                {id:0, name: 'You'},
                {id:1, name: 'Aaronbot'},
            ],
        }
        this.newMessage = this.newMessage.bind(this)
    }
    newMessage(e, text) {
        e.preventDefault()
        let newMsg = this.state.messages
        newMsg.push({uid: 0, content: text})

        this.setState({message: newMsg})

    }
    render() {
        return (
            <Head
                description='A mockup of a react chat app'
                current_user={this.props.current_user}>
                <div>
                    <h1>Chat App Mockup</h1>
                    <p>This is a mockup design, you're not actually chatting with anyone.</p>
                    {/* Messages frame */}
                    {this.state.messages.map((d, key) => {
                        return <Message key={key} uid={d.uid} content={d.content} user={this.state.users[d.uid]}/>
                    })}

                    {/* Input frame */}
                    <Input newMessage={this.newMessage} />
                </div>
            </Head>
        )
    }
}
Chat.getInitialProps = async function(context) {
    return {
        current_user: await return_current_user(context),
    }
}
export default withRedux(initStore, null)(Chat)


const Message = props => {
    return (
        <Paper className={`chat__message-container${props.uid === 0 ? '-user' : '-other'}`}>
            <div className="chat__message-avatar">
                <img src={props.uid === 0 ? img_user : img_bot}
                    width="100" height="100"
                    alt={props.user.name} />
            </div>
            <div className="chat__message-text">{props.content}</div>
        </Paper>
    )
}

// @TODO refactor.
// Normally I reallllly favour stateless components, ideally using a single source of true/state like redux
// But it's way past my bedtime, and I'm taking the easy way out. These daily challenges are taking their toll.
class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = { text: ''}
        this.updateText = this.updateText.bind(this)
    }
    updateText(e) {
        this.setState({text: e.target.value})
    }
    render() {
        return (
            <PaddedPaper style={{backgroundColor: '#424242'}} classes="chat__input-container">
                <form method="POST">
                    <TextField
                        hintText="type here"
                        hintStyle={{color: '#FFFFFF'}}
                        inputStyle={{color: '#FFFFFF'}}
                        multiLine={false}
                        onChange={e => this.updateText(e)}
                        className="chat__input-text"
                    />
                    <div className="chat__input-btnwrapper">
                        <RaisedButton
                            label="Submit"
                            type="submit"
                            secondary={true}
                            style={{margin: '1em'}}
                            className="chat__input-btn"
                            onClick={e => this.props.newMessage(e, this.state.text)}
                        />
                    </div>
                </form>
            </PaddedPaper>
        )
    }
}
