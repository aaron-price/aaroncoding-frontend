import React from "react"
import Drawer from "material-ui/Drawer"
import MenuItem from "material-ui/MenuItem"
import RaisedButton from "material-ui/RaisedButton"
import checkMobile from "../helpers/checkMobile"
import PropTypes from "prop-types"

const menuItems = ["Home", "Settings", "Browse", "Prev", "Next"]

class MenuBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false,
            smallScreen: checkMobile().smallScreen,
            items: menuItems,
        }
        this.handleResize = this.handleResize.bind(this)
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
        return (
            <div className="menu-bar__container">
                {
                    (!this.state.smallScreen)
                        ? <DesktopMenu items={this.state.items} />
                        : <MobileMenu open={this.state.open} handleToggle={this.handleToggle.bind(this)} />
                }

                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})} >
                        <PullOut items={this.state.items} handleClose={this.handleClose.bind(this)} />
                </Drawer>
            </div>
        )
    }
}


const DesktopMenu = props => {
    return (
        <div className="menu-bar__items-row">
            {props.items.map((item, key) =>
                <RaisedButton key={key} label={item} />
            )}
        </div>
    )
}
DesktopMenu.propTypes = {
    items: PropTypes.array.isRequired,
}

const MobileMenu = props => {
    return <RaisedButton
        className={`menu__hamburger--${props.open ? "open" : "close"}`}
        label="Open Drawer"
        onTouchTap={props.handleToggle}
    />
}
MobileMenu.propTypes = {
    handleToggle: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
}

const PullOut = props => {
    return (
        <div className="menu-bar__drawer">
            <MenuItem onTouchTap={props.handleClose} className="menu-bar__close">x CLOSE</MenuItem>

            {props.items.map((item, key) =>
            <MenuItem key={key} onTouchTap={props.handleClose} className="menu-bar__items">{item}</MenuItem>
            )}
        </div>
    )
}
PullOut.propTypes = {
    handleClose: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
}

export default MenuBar