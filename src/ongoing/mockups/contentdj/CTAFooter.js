import React from "react"
import RaisedButton from "material-ui/RaisedButton"
import PropTypes from "prop-types"
import Paper from "material-ui/Paper"

const CTAFooter = props => {
    const lower = props.lower
    return lower === "block" ? <BlockFoot /> : <FloatingFoot />
}
CTAFooter.propTypes = {
    lower: PropTypes.string.isRequired,
}
const BlockFoot = props => {
    let footerStyle = {backgroundColor: "#00BCD4", color: "#FFFFFF", marginTop: "4em"}
    return (
        <div>
            <Paper style={footerStyle} className="padded-paper contentDJ-footer-wrapper contentDJ-footer-block">
                Copyright Aaron Price - 2017
            </Paper>
        </div>
    )
}
const FloatingFoot = props => {
    let footerStyle = {backgroundColor: "#00BCD4", color: "#FFFFFF", position: "fixed", bottom: "0"}
    return (
        <Paper style={footerStyle} className="padded-paper contentDJ-footer-wrapper contentDJ-footer-floating">
            Copyright Aaron Price - 2017
        </Paper>
    )
}

exports.CTAFooter = CTAFooter