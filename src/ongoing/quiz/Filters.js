import React from "react"
import Paper from "material-ui/Paper"
import PropTypes from "prop-types"

const Filters = props => {
    console.log(Object.keys(props.filters))
    return (
        <Paper className="padded-paper">
            <ul>{Object.keys(props.filters).map((lang, key) => {
                return (
                    <li
                        key={key}
                        className="clickable"
                        onClick={() => props.updateFilters(lang)}>
                            {lang} - {props.filters[lang]}
                    </li>
                )
            })}</ul>
        </Paper>
    )
}
Filters.propTypes = {
    filters: PropTypes.object.isRequired,
    updateFilters: PropTypes.func.isRequired,
}

export default Filters