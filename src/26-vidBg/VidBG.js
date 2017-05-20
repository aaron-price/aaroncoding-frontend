import React from "react"
import Paper from "material-ui/Paper"

class VidBG extends React.Component {
    componentDidMount() {
        let player = this.refs.player
        setTimeout(() => player.play(), 300)
    }
    render() {
        return (
            <div>
                <Paper className="VidBG__text">
                    <p>This seems like a fitting background, no?</p><br/>
                    <p>The video quality is very poor because I had to shrink it signnificantly. Nobody wants to wait 5 minutes for a background to download.</p><br/>
                    <p>I'll keep an eye out for something a bit better</p>
                </Paper>
                <div className="VidBG__overlay"></div>
                <video
                    ref="player"
                    className="VidBG__video"
                    autoPlay={true}
                >
                    <source src="https://s3-us-west-2.amazonaws.com/aaroncoding/videos/bigCalendar.3gp"/>
                    <source src="https://s3-us-west-2.amazonaws.com/aaroncoding/videos/bigCalendar.mp4" type="video/mp4"/>
                    <source src="https://s3-us-west-2.amazonaws.com/aaroncoding/videos/bigCalendar.ogv" type="video/ogg"/>
                    <source src="https://s3-us-west-2.amazonaws.com/aaroncoding/videos/bigCalendar.webm" type="video/webm"/>
                </video>
            </div>
        )
    }
}

export default VidBG