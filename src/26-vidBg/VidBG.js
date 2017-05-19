import React from "react"
import Paper from "material-ui/Paper"

const VidBG  = props => {
    return (
        <div>
            <Paper className="VidBG__text">
                <p>This seems like a fitting background, no?</p><br/>
                <p>The video quality is very poor because I had to shrink it signnificantly. Nobody wants to wait 5 minutes for a background to download.</p><br/>
                <p>I'll keep an eye out for something a bit better</p>
            </Paper>
            <div className="VidBG__overlay"></div>
            <video
                className="VidBG__video"
                src="https://s3-us-west-2.amazonaws.com/aaroncoding/videos/bigCalendar.3gp"
                autoPlay={true}
            />
        </div>
    )
}

export default VidBG