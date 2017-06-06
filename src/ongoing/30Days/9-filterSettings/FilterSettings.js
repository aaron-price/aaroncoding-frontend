import React from "react"
import { tags } from "../../../contents"
import { connect } from "react-redux"
import { updateFilters } from "../../../redux/actions/actionCreators"
import PropTypes from "prop-types"
import ImmutablePropTypes from "react-immutable-proptypes"

function showFilterCategory(filter, tags) {
    const count = tags.filter(tag => tag.get("filter") === filter).size
    if (count === 0) { return }
    return (
        <div>
            <h4>{filter} tags</h4>
            <ul>{tags.valueSeq().map((tag, key) => {
                return tag.get("filter") === filter && <li key={key}>{tag.get("title")}</li>
            })}</ul>
        </div>
    )
}

const FilterSettings = props => {
    const tags = props.stateContent.get("tags")
    console.log()
    return (
        <div className="filter-settings-container">
            <div className="filter-settings-controls">
                <h4>Filter by tags</h4>
                <div>{tags.valueSeq().map((tag, key) => {
                    return (
                        <p key={key}>
                            {tag.get("title")}<br />
                            <select value={tag.get("filter")}
                                    onChange={(e) => props.dispatchUpdateFilters(tag.get("title"), e.target.value)}
                            >
                                <option value="allowed">allowed</option>
                                <option value="disallowed">disallowed</option>
                                <option value="required">required</option>
                        </select></p>
                    )
                })}</div>
            </div>

            <div className="revealTagStates">
                {showFilterCategory("required", tags)}
                {showFilterCategory("allowed", tags)}
                {showFilterCategory("disallowed", tags)}
            </div>
        </div>
    )
}
FilterSettings.propTypes = {
    stateContent: ImmutablePropTypes.map,
    dispatchUpdateFilters: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
    return {
        headerColor: state.get("headerColor"),
        stateContent: state,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchUpdateFilters(tag, newFilter) {
            dispatch(updateFilters(tag, newFilter))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterSettings)