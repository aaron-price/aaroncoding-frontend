import React from "react"
import PropTypes from "prop-types"

const Columns = props => {
    const Left = props.left
    const Right = props.right

    return (
        <div>
            <div><Left /></div>
            <div><Right /></div>
        </div>
    )
}

Columns.propTypes = {
    left: PropTypes.func.isRequired,
    right: PropTypes.func.isRequired,
}