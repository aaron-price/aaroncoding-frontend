import React from "react"
import { connect } from "react-redux"
import { updateMenuVisibility } from "../../redux/actions/actionCreators"
import PropTypes from "prop-types"
import { fromJS } from "immutable"

class MenuToggler extends React.Component {
    componentWillMount() {
        this.props.dispatchUpdateMenuVisibility(fromJS({menuVisible: this.props.on}))
    }
    componentWillUnmount() {
        this.props.dispatchUpdateMenuVisibility(fromJS({menuVisible: !this.props.on}))
    }
    componentDidMount() {
        this.unMargin()
    }
    unMargin() {
        // By default there is a 1em margin around the .body CLASS (not the body tag)
        // The body class is everything below the menu. But with no menu, it shouldn't be there
        let body = document.getElementsByClassName("body")[0]
        body.style.margin = 0
    }
    render() {
        return null
    }
}
MenuToggler.propTypes = {
    dispatchUpdateMenuVisibility: PropTypes.func.isRequired,
    on: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchUpdateMenuVisibility(config) {
            dispatch(updateMenuVisibility(config))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuToggler)