import React from "react"
import $ from "jquery"
import PropTypes from "prop-types"
/*
 This is based on the basic js progress bar here http://www.w3schools.com/howto/howto_js_progressbar.asp
 I just rewrote it in React, and made a few improvements of my own:
 - Bar changes colour as it moves
 - Percent complete appears in bar
 - Witty text appears at various points during the loading
 - JQuery to make the text fade in and out
 */

class Container extends React.Component {
    constructor() {
        super()
        this.state = {
            progress: 0,
        }
        this.handleProgress = this.handleProgress.bind(this)
    }
    handleProgress(progressbar) {
        this.setState({
            progress: progressbar,
        })
    }
    render() {
        return (
            <div>
                <p>Throwback thursday! This was one of my very first React experiments. I've refactored the code quite a bit, but it still looks the same</p>
                <LoadingText progress={this.state.progress}/>
                <div id="myProgress"><Progressbar handleProgress={this.handleProgress}/></div>
            </div>
        )
    }
}

const LoadingText = props => {
    let text = "Loading, please wait"
    if (props.progress >= 100) {
        text = "Loading Complete!"
    } else if (props.progress >= 75) {
        text = "Almost there..."
    } else if (props.progress >= 50) {
        text = "Gee, long wait, huh?"
    } else if (props.progress >= 25) {
        text = "Still waiting..."
    }
    if (props.progress % 25 === 0 && props.progress !== 100) {
        $(() => {
            $("#loading-text").fadeOut(0).fadeIn(2200)
        })
    }
    return <h3 id="loading-text">{text}</h3>
}

LoadingText.propTypes = {
    progress: PropTypes.number.isRequired,
}

class Progressbar extends React.Component {
    constructor() {
        super()
        this.state = {
            progress: 0,
            speed: 1,
            color: "#ff0050",
        }
        this.frame = this.frame.bind(this)
        this.green = this.green.bind(this)
        this.red = this.red.bind(this)
    }
    componentDidMount() {
        this.interval = setInterval(() => this.frame(), 100)
    }

    frame() {
        if (this.state.progress < 100) {
            this.setState((prevState, props) => ({
                progress: prevState.progress + this.state.speed,
                color: "#" + this.red() + this.green() + "50",
            }))
        }
        this.props.handleProgress(this.state.progress)

    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }
    green() {
        let progress = this.state.progress
        progress *= 2.55
        progress = Math.round(progress)
        progress = progress.toString(16)
        return progress
    }
    red() {
        let progress = this.state.progress
        progress *= 2.55
        progress = Math.round(progress)
        progress = 255 - progress
        progress = progress.toString(16)
        return progress
    }
    render() {
        return (
            <div>
                <div id="myBar" style={{
                    width: this.state.progress + "%",
                    backgroundColor: this.state.color,
                }}>
                    <div id="label">Loaded {this.state.progress}%</div>
                </div>
            </div>)
    }
}

Progressbar.propTypes = {
    handleProgress: PropTypes.func.isRequired,
}

export default Container