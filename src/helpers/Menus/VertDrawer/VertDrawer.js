import React from "react"
import RaisedButton from "material-ui/RaisedButton"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import Paper from "material-ui/Paper"
import { Link } from "react-router-dom"

// This is the wrapper that holds it all together, but doesn't provide any actual styling itself.
class VertDrawer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            smallScreen: this.props.smallScreen,
        }
        this.handleToggle = this.handleToggle.bind(this)
    }
    handleToggle = () => this.setState({open: !this.state.open})
    handleClose = () => this.setState({open: false})
    render() {
        return (
            <div>
                {
                    this.props.smallScreen
                    ? <MobileWrapper smallScreen={true} open={this.state.open} handleToggle={this.handleToggle} />
                    : <DesktopWrapper smallScreen={false} />
                }
            </div>
        )
    }
}

// This is the wrapper for mobile stuff, but needs a mobile callback prop to work.
// A default one is supplied below.
const MobileWrapper = props => {
    return (
        <div>
            <MenuItems smallScreen={props.smallScreen} />
            <RaisedButton secondary={true} label="MENU"/>
        </div>
    )
}

// This is the wrapper for desktop stuff, but needs a mobile callback prop to work.
// A default one is supplied below.
const DesktopWrapper = props => {
    return (
        <div>
            <MenuItems smallScreen={props.smallScreen} />
        </div>
    )
}

const MenuItems = props => {
    return props.smallScreen ? (
        <div>
            <div>Mobile</div>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </div>
    ) : (
        <div>
            <div>Desktop menu</div>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </div>
    )
}

VertDrawer.propTypes = { smallScreen: PropTypes.bool.isRequired }
MobileWrapper.propTypes = { smallScreen: PropTypes.bool.isRequired }
DesktopWrapper.propTypes = { smallScreen: PropTypes.bool.isRequired }
MenuItems.propTypes = { smallScreen: PropTypes.bool.isRequired }

const mapStateToProps = (state) => {
    return { smallScreen: state.get("smallScreen") }
}

export default connect(mapStateToProps)(VertDrawer)