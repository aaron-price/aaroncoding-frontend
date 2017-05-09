import React from "react"
import "./App.scss"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import ImmutablePropTypes from "react-immutable-proptypes"
import MenuBar from "../15-menuBar/MenuBar"


const Menu = props => {
    let bgColor
    if (props.headerColor === "green") { bgColor = "#009688" }
    if (props.headerColor === "blue") { bgColor = "#00BCD4" }
    if (props.headerColor === "red") { bgColor = "#EF5350" }

    return (
        <div className={`header header--${props.headerColor}`}>
            <MenuBar bgColor={ bgColor }/>
        </div>
    )
}
Menu.propTypes = {
    headerColor: PropTypes.string,
    stateContent: ImmutablePropTypes.list,
}


const mapStateToProps = (state) => {
    return {
        headerColor: state.get("headerColor"),
        stateContent: state.get("content"),
    }
}

export default connect(mapStateToProps)(Menu)