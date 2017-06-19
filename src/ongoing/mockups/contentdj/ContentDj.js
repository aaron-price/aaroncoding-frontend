import React from "react"
import MenuToggler from "../MenuToggler"
import RaisedButton from "material-ui/RaisedButton"
import PropTypes from "prop-types"
import Paper from "material-ui/Paper"
import { connect } from "react-redux"
import FullPageCta from "../../../helpers/FullPageCta/FullPageCta"
import HoverPaper from "../../../helpers/Papers/HoverPaper"
import BottomDetector from "../../../helpers/BottomDetector"
import { ContentDJMenuMobile, ContentDJMenu} from "./Menus"
import { CTAHeader } from "./CTAHeader"
import { CTABody } from "./CTABody"
import { CTAFooter } from "./CTAFooter"
import ElementQueries from "css-element-queries"
const name = "ContentDJ"
const nameLow = name.toLowerCase()
const vidImg = "https://s3-us-west-2.amazonaws.com/aaroncoding/images/mockups/video.png"

export class ContentDJ extends React.Component {
    constructor(props) {
        super(props)
        this.state = { docBottom: -1, bodyBottom: -1, toggler: false }
        this.calculateBottoms = this.calculateBottoms.bind(this)
    }
    componentDidMount() {
        const hAndB = document.getElementsByClassName("contentDJ-head-and-body")[0]
        new ElementQueries.ResizeSensor(hAndB, this.calculateBottoms)
        this.calculateBottoms()
    }
    componentWillUnmount() {
        this.setState({toggler: true})
    }
    calculateBottoms() {
        const hAndB = document.getElementsByClassName("contentDJ-head-and-body")[0]
        const body = document.getElementsByTagName("body")[0]
        this.setState({
            docBottom: body.getBoundingClientRect().bottom,
            bodyBottom: hAndB.getBoundingClientRect().bottom,
        })
    }
    render() {
        return (
            <div className="contentDJ-wrapper">
                <MenuToggler on={this.state.toggler} />
                {/* This works great, but it shouldn't be visible on a CTA page

                    <VerticalDrawerMenu items={menuItems} />

                */}
                <div className="contentDJ-head-and-body">
                    <CTAHeader smallScreen={this.props.smallScreen} />
                    <CTABody   smallScreen={this.props.smallScreen} />
                </div>
                <BottomDetector callback={CTAFooter}/>
            </div>
        )
    }
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