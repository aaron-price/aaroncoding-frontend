import React from "react"
import RaisedButton from "material-ui/RaisedButton"
import PropTypes from "prop-types"
import Paper from "material-ui/Paper"

const CTABody = props => {
    const size = props.smallScreen ? "mobile" : "desktop"
    const vidImg = "https://s3-us-west-2.amazonaws.com/aaroncoding/images/mockups/video.png"
    let vidWidDefault = 968
    let vidHigDefault = 545
    let vidRatio = vidHigDefault / vidWidDefault
    const vidStyles = {
        maxWidth:  `${100}%`,
        maxHeight: `${vidRatio * 1000}%`,
    }
    return (
        <div className="contentDJ-body-wrapper">
            <div className={`contentDJ-body contentDJ-body--${size}`}>
                {
                    props.smallScreen && (
                        <div className="flex-parent flex-space-around contentDJ-top-buttons-wrapper">
                            <RaisedButton className="contentDJ-top-buttons" secondary={true} label="Free Trial"></RaisedButton>
                            <RaisedButton className="contentDJ-top-buttons" secondary={true} label="Learn More"></RaisedButton>
                        </div>
                    )
                }
                <Paper className={`contentDJ-body-video contentDJ-body-video--${size}`}>
                    <img src={vidImg} alt="contentDJ" style={vidStyles} />
                </Paper>

                {
                    props.smallScreen
                    ? (
                        <Paper className={`contentDJ-body-text contentDJ-body-text--${size}`}>
                            <CopyPaper />
                            <Buttons />
                        </Paper>
                    )
                    : (
                        <Paper className={`contentDJ-body-text contentDJ-body-text--${size}`}>
                            <Buttons />
                            <CopyPaper />
                        </Paper>
                    )
                }
            </div>
        </div>
    )
}
CTABody.propTypes = {
    smallScreen: PropTypes.bool.isRequired,
}
const CopyPaper = props => {
    const style = {color: "#000000", backgroundColorc: "#FFFFFF"}
    const iconStyle = {width: "14px", height: "14px", margin: "auto"}
    return (
        <div className="contentDJ-body-text-inner-wrapper" style={style}>
            <ul>
                <li className="contentDJ-body-text-item"><img alt="checkmark" src="/images/checkmark.png" style={iconStyle}/><span> Automate everything</span></li>
                <li className="contentDJ-body-text-item"><img alt="checkmark" src="/images/checkmark.png" style={iconStyle}/><span> A/B test different ads continuously</span></li>
                <li className="contentDJ-body-text-item"><img alt="checkmark" src="/images/checkmark.png" style={iconStyle}/><span> Analyze the results in realtime</span></li>
                <li className="contentDJ-body-text-item"><img alt="checkmark" src="/images/checkmark.png" style={iconStyle}/><span> Get daily or weekly reports</span></li>
            </ul>
        </div>
    )
}

const Buttons = props => {
    return (
        <div>
            <div className="flex-parent flex-centered-hor">
                <RaisedButton className="contentDJ-cta-button" secondary={true} label="Free Trial"></RaisedButton>
            </div>
            <div className="flex-parent flex-centered-hor">
                <RaisedButton className="contentDJ-cta-button" secondary={true} label="Learn More"></RaisedButton>
            </div>
        </div>
    )
}

exports.CTABody = CTABody