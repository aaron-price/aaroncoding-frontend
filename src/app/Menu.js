import React from "react"
import "./App.scss"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import ImmutablePropTypes from "react-immutable-proptypes"
import MenuBar from "../ongoing/30Days/15-menuBar/MenuBar"
import checkMobile from "../helpers/checkMobile"
import { updateSmallScreen } from "../redux/actions/actionCreators"
import { fromJS } from "immutable"

class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.resizeEventHandler = this.resizeHandler.bind(this)
    }
    resizeHandler() {
        this.props.dispatchUpdateSmallScreen(fromJS({smallScreen: checkMobile().smallScreen}))
    }
    componentDidMount() {
        this.resizeEventHandler()
        window.addEventListener("resize", this.resizeEventHandler, false)
    }
    componentWillUnMount() {
        window.removeEventListener("resize", this.resizeEventHandler, false)
    }
    render() {
        let bgColor
        if (this.props.headerColor === "green") { bgColor = "#009688" }
        if (this.props.headerColor === "blue") { bgColor = "#00BCD4" }
        if (this.props.headerColor === "red") { bgColor = "#EF5350" }

        return !this.props.menuVisible
            ? (<div></div>)
            : (
                <div className={`header header--${this.props.headerColor}`}>
                    <MenuBar bgColor={ bgColor } smallScreen={this.props.smallScreen}/>
                </div>
            )
    }
}
Menu.propTypes = {
    headerColor: PropTypes.string,
    stateContent: ImmutablePropTypes.list,
    menuVisible: PropTypes.bool.isRequired,
    smallScreen: PropTypes.bool.isRequired,
    dispatchUpdateSmallScreen: PropTypes.func.isRequired,
}


const mapStateToProps = (state) => {
    return {
        headerColor: state.get("headerColor"),
        stateContent: state.get("content"),
        menuVisible: state.get("menuVisible"),
        smallScreen: state.get("smallScreen"),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchUpdateSmallScreen(config) {
            dispatch(updateSmallScreen(config))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)