import React from "react"
import Paper from "material-ui/Paper"

const SocialFooter = props => {
    let footerStyle = {backgroundColor: "#607D8B", color: "#FFFFFF", textAlign: "center"}
    return (
        <div>
            <Paper style={footerStyle} className="padded-paper socialFooter-wrapper">
                Copyright Aaron Price - 2017
            </Paper>
        </div>
    )
}

export default SocialFooter