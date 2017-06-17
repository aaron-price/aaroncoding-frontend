import React from "react"
import RaisedButton from "material-ui/RaisedButton"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import Paper from "material-ui/Paper"
import { Link } from "react-router-dom"

const defaultItems = ["title 1", "title 2", "title 3"]

const DefaultMenu = props => {
    const device = props.smallScreen ? "mobile" : "desktop"
    return (
        <div className={`default-menu-div-${device}`}>
            <ul className={`default-menu-ul-${device}`}>
                {props.items.map((item, key) => {
                    return (
                        <li className={`default-menu-li-${device}`} key={key}>
                            <RaisedButton
                                className={`default-menu-button-${device}`}
                                primary={true}
                                label={item} />
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
                                label={props.open.toString()} />
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
        }
        this.handleToggle = this.handleToggle.bind(this)
    }
    handleToggle = () => this.setState({open: !this.state.open})
    handleClose = () => this.setState({open: false})
    render() {
        const Menu = this.props.Menu || DefaultMenu
        const items = this.props.items || defaultItems
        return (
            <div>
                <Menu
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
}

const mapStateToProps = (state) => {
    return { smallScreen: state.get("smallScreen") }
}

export default connect(mapStateToProps)(MenuContainer)