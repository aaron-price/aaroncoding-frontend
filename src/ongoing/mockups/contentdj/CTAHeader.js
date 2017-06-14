import React from "react"
import MenuToggler from "../MenuToggler"
import RaisedButton from "material-ui/RaisedButton"
import checkMobile from "../../../helpers/checkMobile"
import PropTypes from "prop-types"
import Paper from "material-ui/Paper"
import { connect } from "react-redux"
import VerticalDrawerMenu from "../../../helpers/Menus/VerticalDrawer/MenuContainer"
import FullPageCta from "../../../helpers/FullPageCta/FullPageCta"
import HoverPaper from "../../../helpers/Papers/HoverPaper"
import { ContentDJMenuMobile, ContentDJMenu} from "./Menus"

const CTAHeader = props => {
    const headerStyle = {
        backgroundColor: "#00BCD4",
        color: "#FFFFFF",
    }
    const subheaderStyle = {
        backgroundColor: "#80DEEA",
    }
    return (
        <Paper>
            <Paper style={headerStyle} className="padded-paper centered-text contentDJ-header">
                <h1>Marketing</h1>
                <h3> Automation, Testing, and Analytics</h3>
            </Paper>

            {
                !props.smallScreen && (
                    <Paper style={subheaderStyle} className="padded-paper centered-text contentDJ-subheader">
                        <p>We take the work out of marketing so you can focus on doing what you do best</p>
                    </Paper>
                )
            }
        </Paper>
    )
}
CTAHeader.propTypes = {
    smallScreen: PropTypes.bool.isRequired,
}

exports.CTAHeader = CTAHeader