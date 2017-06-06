import React from "react"
import MenuToggler from "../MenuToggler"
import RaisedButton from "material-ui/RaisedButton"
import checkMobile from "../../../helpers/checkMobile"
import PropTypes from "prop-types"
import Paper from "material-ui/Paper"
import { connect } from "react-redux"
import VerticalDrawerMenu from "../../../helpers/Menus/VerticalDrawer/MenuContainer"
import Jumbotron from "../../../helpers/Jumbotron/Jumbotron"
import HoverPaper from "../../../helpers/Papers/HoverPaper"
import { ContentDJMenuMobile, ContentDJMenu} from "./Menus"

const name = "ContentDJ"
const nameLow = name.toLowerCase()

class ContentDJ extends React.Component {
    render() {
        const menuItems = [
            {title: "Learn More", uri: "/mockups/contentdj/learn"},
            {title: "Login", uri: "/mockups/contentdj/login"},
            {title: "Free Trial", uri: "/mockups/contentdj/trial"},
        ]
        return (
            <div>
                <MenuToggler on={false} />
                <Jumbotron
                    image="https://s3-us-west-2.amazonaws.com/aaroncoding/images/generic/red_circuits.jpg"
                    component={<CTA />}
                    bgAlpha={0.9}
                    bgColor="E0F7FA"
                />
                {/* This works great, but it shouldn't be visible on a CTA page
                    <VerticalDrawerMenu items={menuItems} />
                */}

            </div>
        )
    }
}

let ctaContents = [
    {title: "FREE TRIAL", uri: "/mockups/contentdj/trial"},
    {title: "LEARN MORE", uri: "/mockups/contentdj/learn"},
]
ctaContents = ctaContents.map(i => {
    return {
        ...i,
        commonStyles: { width: "80vw" },
        hoverBg: "#DDDDDD",
        unhoverBg: "#FFFFFF",
    }
})

const CTA = props => {
    return (
        <div>
            <HoverPaper
                contents={ctaContents}
            />
        </div>
    )
}

ContentDJ.propTypes = {
    smallScreen: PropTypes.bool.isRequired,
}
const mapStateToProps = (state) => {
    return {
        smallScreen: state.get("smallScreen"),
    }
}
export default connect(mapStateToProps)(ContentDJ)