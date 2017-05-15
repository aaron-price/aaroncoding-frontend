import React from "react"
import RaisedButton from "material-ui/RaisedButton"
import Slider from "material-ui/Slider"

const parentStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "vertical",
}

class VideoPlayer extends React.Component {
    render() {
        return (
            <div style={parentStyles}>
                <p>This is a work in progress while I had a spare 30 minutes. Publishing now in case I don't get a chance to improve it later</p>
                <ul>
                    <li>
                <video
                    ref="player"
                    src="https://s3-us-west-2.amazonaws.com/aaroncoding/videos/small.mp4"
                    width="320"
                    height="240">
                </video>
                    </li>

                <li><RaisedButton label="Play" onClick={(e) => this.refs.player.play()}/>&nbsp;
                <RaisedButton label="Pause" onClick={(e) => this.refs.player.pause()}/></li>
                <li><br />Volume <br /><Slider
                    style={{width: 100, display: "inline-block", marginLeft: 20}}
                    defaultValue={1}
                    min={0} max={1}
                    name="volume"
                    step={0.01}
                    onChange={(e, val) => this.refs.player.volume = 0.5}
                /></li>
                </ul>
            </div>
        )
    }
}

export default VideoPlayer