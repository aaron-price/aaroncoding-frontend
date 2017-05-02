import React from "react"
import { connect } from "react-redux"
import { updateHeader } from "../redux/actions/actionCreators"
import PropTypes from "prop-types"
import { fromJS } from "immutable"

const Menus = props => {
    return (
            <div className="webpackOptions">
                <select
                    value={props.headerColor}
                    onChange={(e) => props.dispatchUpdateHeader(fromJS({headerColor: e.target.value}))}>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                </select>&nbsp; Menu Background Colour
            </div>
    )
}
Menus.propTypes = {
    headerColor: PropTypes.string.isRequired,
    dispatchUpdateHeader: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
    return {
        headerColor: state.get("headerColor"),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchUpdateHeader(config) {
            dispatch(updateHeader(config))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menus)