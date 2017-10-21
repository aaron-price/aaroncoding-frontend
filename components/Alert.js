import React from "react"

/* Usage
 import Alert from "../../helpers/Alert"
 <Alert status={"Success" || "Warning" || "Error"} text={"This text will flash"} />
 */
class Alert extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: true,
            duration: this.props.duration || 7000,
        }
    }
    timeOut() {
        this.setState({visible: false})
    }
    componentDidMount() {
        this.timer = setTimeout(() => {
            this.timeOut()
        }, this.state.duration)
    }
    componentWillUnmount() {
        this.timer && clearInterval(this.timer)
        this.timer = false
    }

    render() {
        let col
        if (this.props.status.match(/error/i)) {
            col = "#F44336"
        }
        else if (this.props.status.match(/warning/i)) {
            col = "#FFEB3B"
        }
        else if (this.props.status.match(/success/i)) {
            col = "#4CAF50"
        }

        let containerStyle = {
            backgroundColor: col,
            alignItems: "center",
            minHeight: "2em",
            display: "flex",
            justifyContent: "center",
        }
        const childStyle = {
            minHeight: "1em",
            color: "#212121",
        }
        if (this.state.visible) {
            return (
                <div style={containerStyle}>
                    <div style={childStyle}><strong>{this.props.text}</strong></div>
                </div>
            )}
        else {
            return <div></div>
        }
    }
}

export default Alert
