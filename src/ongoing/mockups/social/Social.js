import React from "react"
import MenuToggler from "../MenuToggler"
import RaisedButton from "material-ui/RaisedButton"
import PropTypes from "prop-types"
import Paper from "material-ui/Paper"
import { connect } from "react-redux"
import VertDrawer from "../../../helpers/Menus/VertDrawer/VertDrawer"
import FullPageCta from "../../../helpers/FullPageCta/FullPageCta"
import HoverPaper from "../../../helpers/Papers/HoverPaper"
import BottomDetector from "../../../helpers/BottomDetector"
import SocialFooter from "./SocialFooter"

export class Social extends React.Component {
    render() {
        const menuItems = []
        return (
            <div>
                <div className="contentDJ-wrapper">
                    <MenuToggler on={false} />
                    <VertDrawer items={[{title: "home", uri: "/"},{title: "about", uri: "/"},{title: "login", uri: "/"}]}/>
                    <div style={{backgroundColor: "#F3A3A3", height: "30vh", width: "100vw"}}></div>
                </div>
                <BottomDetector callback={SocialFooter}/>
            </div>
        )
    }
}

Social.propTypes = {
    smallScreen: PropTypes.bool.isRequired,
}
const mapStateToProps = (state) => {
    return {
        smallScreen: state.get("smallScreen"),
    }
}
export default connect(mapStateToProps)(Social)