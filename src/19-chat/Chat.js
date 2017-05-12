import RaisedButton from "material-ui/RaisedButton"
import TextField from "material-ui/TextField"
import React from "react"
import Paper from "material-ui/Paper"
import PropTypes from "prop-types"

let data = [
    {
        uid: 0,
        content: "Hey Aaron",
    },
    {
        uid: 1,
        content: "Hey, what's up",
    },
    {
        uid: 0,
        content: "I'm just checking out your new portfolio",
    },
    {
        uid: 1,
        content: "Oh ya? How do you like it so far?",
    },
]

export default class Chat extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: data,
            users: [
                {id:0, name: "You"},
                {id:1, name: "Aaronbot"},
            ],
        }
        this.newMessage = this.newMessage.bind(this)
    }
    newMessage(text) {
        let newMsg = this.state.messages
        newMsg.push({uid: 0, content: text})

        this.setState({message: newMsg})

    }
    render() {
        return (
            <div>
                <p>This is a mockup design, you're not actually chatting with anyone other than an extremely simplistic chatbot</p>
                {/* Messages frame */}
                {this.state.messages.map((d, key) => {
                    return <Message key={key} uid={d.uid} content={d.content} user={this.state.users[d.uid]}/>
                })}

                {/* Input frame */}
                <Input newMessage={this.newMessage} />
            </div>
        )
    }
}
const Message = props => {
    return (
        <Paper className={`chat__message-container${props.uid === 0 ? "-user" : "-other"}`}>
            <div className="chat__message-avatar">
                <img src={`./images/chat/${props.uid === 0 ? "user" : "aaronbot"}.png`}
                     width="100" height="100"
                     alt={props.user.name} />
            </div>
            <div className="chat__message-text">{props.content}</div>
        </Paper>
    )
}
Message.propTypes = {
    content: PropTypes.string.isRequired,
    uid: PropTypes.number.isRequired,
    user: PropTypes.object.isRequired,
}

// @TODO refactor.
// Normally I reallllly favour stateless components, ideally using a single source of true/state like redux
// But it's way past my bedtime, and I'm taking the easy way out. These daily challenges are taking their toll.
class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = { text: ""}
        this.updateText = this.updateText.bind(this)
    }
    updateText(e) {
        this.setState({text: e.target.value})
    }
    render() {
        return (
            <Paper className="chat__input-container">
                <TextField
                    hintText="type here"
                    multiLine={true}
                    rows={4}
                    rowsMax={12}
                    onChange={e => this.updateText(e)}
                    className="chat__input-text"
                />
                <div className="chat__input-btnwrapper">
                    <RaisedButton
                        label="Submit"
                        secondary={true}
                        style={{margin: "1em"}}
                        className="chat__input-btn"
                        onClick={e => this.props.newMessage(this.state.text)}
                    />
                </div>
            </Paper>
        )
    }
}
Input.propTypes = {
    newMessage: PropTypes.func.isRequired,
}