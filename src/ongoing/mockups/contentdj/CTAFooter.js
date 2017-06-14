import React from "react"
import RaisedButton from "material-ui/RaisedButton"
import PropTypes from "prop-types"
import Paper from "material-ui/Paper"

const CTAFooter = props => {
    let footerStyle = {backgroundColor: "#00BCD4", color: "#FFFFFF"}
    return (
        <div>
            <Paper style={footerStyle} className="padded-paper contentDJ-footer-wrapper">
                Copyright Aaron Price - 2017
            </Paper>
        </div>
    )
}

exports.CTAFooter = CTAFooter