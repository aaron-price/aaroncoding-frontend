import React from "react"
import MenuToggler from "../MenuToggler"
import RaisedButton from "material-ui/RaisedButton"
import checkMobile from "../../../helpers/checkMobile"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import Paper from "material-ui/Paper"
import { ContentDJMenuMobile, ContentDJMenu} from "./Menus"
const name = "ContentDJ"
const nameLow = name.toLowerCase()

class ContentDJ extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            smallScreen: true || checkMobile().smallScreen,
        }
        this.handleResize = this.handleResize.bind(this)
        this.handleToggle = this.handleToggle.bind(this)
    }

    // This also handles orientation changes between landscape/portrait.
    handleResize() {
        this.setState({smallScreen: checkMobile().smallScreen})
    }

    handleToggle = () => this.setState({open: !this.state.open})

    handleClose = () => this.setState({open: false})

    componentDidMount() {
        window.addEventListener("resize", this.handleResize, false)
    }
    render() {
        const menuItems = ["Learn More", "Login", "Free Trial"]
        return (
            <div>
                <MenuToggler on={false} />
                {
                    this.props.smallScreen
                    ? <ContentDJMenuMobile name={nameLow} items={menuItems} open={this.state.open} handleToggle={this.handleToggle}/>
                    : <ContentDJMenu name={nameLow} items={menuItems} />
                }
                {/* Main CTA */}
                {/* How it works */}
                {/* Social proof */}
                {/* Social proof */}
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