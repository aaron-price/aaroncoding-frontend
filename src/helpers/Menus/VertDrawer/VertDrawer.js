import React from "react"
import RaisedButton from "material-ui/RaisedButton"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import Paper from "material-ui/Paper"
import { Link } from "react-router-dom"

const defaultItems = [{title: "title", uri: "/"},{title: "title", uri: "/"},{title: "title", uri: "/"}]

const DefaultMenu = props => {
    const device = props.smallScreen ? "mobile" : "desktop"
    const openStyle = {position: "fixed", top: 0, width: "100%"}
    const closedStyle = {position: "fixed", top: -props.height, width: "100%"}
    const desktopStyle = {}
    let renderedStyle
    if (props.smallScreen) {
        renderedStyle = props.open ? openStyle : closedStyle
    } else { renderedStyle = desktopStyle }

    return (
        <div className={`default-menu-div-${device} default-menu-div`} style={renderedStyle}>
            <ul className={`default-menu-ul-${device} default-menu-ul`}>
                {props.items.map((item, key) => {
                    return (
                        <li className={`default-menu-li-${device}`} key={key}>
                            <Link to={item.uri}>
                            <RaisedButton
                                className={`default-menu-button-${device}`}
                                primary={true}
                                label={item.title} />
                            </Link>
                        </li>
                    )
                })}
                { /* The open/close button */
                    props.smallScreen && (
                        <li className="default-menu-li">
                            <RaisedButton
                                className="default-menu-toggle"
                                secondary={true}
                                onClick={() => {props.handleToggle()}}
                                label="MENU" />
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

// This is the wrapper that holds it all together, but doesn't provide any actual styling itself.
class MenuContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            height: 160,
        }
        this.handleToggle = this.handleToggle.bind(this)
        this.getMenuHeight = this.getMenuHeight.bind(this)
    }
    componentDidMount() {
        this.getMenuHeight()
    }
    getMenuHeight() {
        const rect = document.getElementsByClassName("default-menu-div")[0].getBoundingClientRect()
        const ul = document.getElementsByClassName("default-menu-ul")[0].getBoundingClientRect()
        const toggle = document.getElementsByClassName("default-menu-toggle")[0].getBoundingClientRect()
        const toggleHeight = toggle.bottom - toggle.top
        const totalHeight = ul.bottom - ul.top
        // const itemsLength = (this.props.items || defaultItems).length
        // const heightPerItem = totalHeight / (itemsLength + 1)
        // const toggleHeight = heightPerItem * itemsLength
        console.log(totalHeight)
        console.log(toggleHeight)
        this.setState({height: totalHeight - toggleHeight - 20})
    }
    handleToggle = () => this.setState({open: !this.state.open})
    handleClose = () => this.setState({open: false})
    render() {
        const Menu = this.props.Menu || DefaultMenu
        const items = this.props.items || defaultItems
        return (
            <div>
                <Menu
                    height={this.state.height}
                    items={items}
                    smallScreen={this.props.smallScreen}
                    open={this.state.open}
                    handleToggle={this.handleToggle}
                />
            </div>
        )
    }
}

MenuContainer.propTypes = {
    smallScreen: PropTypes.bool.isRequired,
    Menu: PropTypes.func,
    items: PropTypes.array,
}
DefaultMenu.propTypes = {
    smallScreen: PropTypes.bool.isRequired,
    open: PropTypes.bool.isRequired,
    items: PropTypes.array.isRequired,
    handleToggle: PropTypes.func.isRequired,
    height: PropTypes.number.isRequired,
}

const mapStateToProps = (state) => {
    return { smallScreen: state.get("smallScreen") }
}

export default connect(mapStateToProps)(MenuContainer)