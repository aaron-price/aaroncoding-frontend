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

const name = "ContentDJ"
const nameLow = name.toLowerCase()

class ContentDJ extends React.Component {
    render() {
        const graph = "https://ixquick-proxy.com/do/spg/show_picture.pl?l=english&rais=1&oiu=http%3A%2F%2Fwww.perkinselearning.org%2Fsites%2Felearning.perkinsdev1.org%2Ffiles%2Fu2070%2Fbar%2520graph%25201.png&sp=d83d14d7e7362cd47b369e0b2a752566"
        const red_circuits = "https://s3-us-west-2.amazonaws.com/aaroncoding/images/generic/red_circuits.jpg"
        const image = red_circuits
        return (
            <div>
                <MenuToggler on={false} />
                <FullPageCta
                    image={image}
                    component={<CTA />}
                    bgAlpha={0.8}
                    bgColor="757575"
                />
                {/* This works great, but it shouldn't be visible on a CTA page
                    <VerticalDrawerMenu items={menuItems} />
                */}

            </div>
        )
    }
}

let ctaContents = [
    {title: "FREE TRIAL", uri: "/mockups/contentdj/trial", description: "Start automating your marketing efforts in 5 minutes. The first month is free, so you can be free to focus on what you do best."},
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
            <Paper className="contentdj-cta-wrapper" style={{backgroundColor: "#ADADAD"}}>
                <HoverPaper
                    contents={ctaContents}
                />
            </Paper>
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