import React from "react"
import Drawer from "material-ui/Drawer"
import MenuItem from "material-ui/MenuItem"
import RaisedButton from "material-ui/RaisedButton"
import checkMobile from "../../../helpers/checkMobile"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const menuItems = [
    {title: "Home", path: "/"},
    {title: "30 Days", path: "/30days"},
    {title: "Mockups", path: "/mockups"},
    {title: "Tools", path: "/tools"},
    {title:"Hire Aaron", path: "/hire"},
]

class MenuBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false,
            items: this.props.menuItems || menuItems,
        }
    }

    handleToggle = () => this.setState({open: !this.state.open})

    handleClose = () => this.setState({open: false})

    render() {
        return (
            <div className="menu-bar__container" style={{backgroundColor: this.props.bgColor}}>
                {
                    (!this.props.smallScreen)
                        ? <DesktopMenu items={this.state.items} />
                        : <MobileMenu open={this.state.open} handleToggle={this.handleToggle.bind(this)} />
                }

                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})} >
                        <PullOut
                            items={this.state.items}
                            handleClose={this.handleClose.bind(this)}
                            bgColor={this.props.bgColor}
                        />
                </Drawer>
            </div>
        )
    }
}
MenuBar.propTypes = {
    menuItems: PropTypes.array,
    bgColor: PropTypes.string.isRequired,
    smallScreen: PropTypes.bool.isRequired,
}


const DesktopMenu = props => {
    return (
        <div className="menu-bar__items-row">
            {props.items.map((item, key) =>
                <Link to={`${item.path}`} key={key} >
                    <RaisedButton label={item.title} />
                </Link>
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
        <div style={{backgroundColor: props.bgColor}}>
            <MenuItem onTouchTap={props.handleClose} className="menu-bar__close">x CLOSE</MenuItem>
            {props.items.map((item, key) =>
                <Link to={item.path} key={key} onTouchTap={props.handleClose}>
                    <MenuItem className="menu-bar__items">
                        {item.title}
                    </MenuItem>
                </Link>
            )}
        </div>
    )
}
PullOut.propTypes = {
    bgColor: PropTypes.string.isRequired,
    handleClose: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
}


export default MenuBar