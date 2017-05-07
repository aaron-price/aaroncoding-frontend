import React from "react"
import { fromJS } from "immutable"
import data from "./MOCK_DATA.json"
import PropTypes from "prop-types"
import ImmutablePropTypes from "react-immutable-proptypes"
import TextField from "material-ui/TextField"
import Avatar from "material-ui/Avatar"
import Paper from "material-ui/Paper"

class DynamicSearchContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = { data: fromJS(data) }
        this.typeHandler = this.typeHandler.bind(this)
    }
    typeHandler(e) {
        const text = e.target.value
        const newData = fromJS(data).filter(d =>
            (new RegExp(text,"ig")).test(d.get("first_name")) ||
            (new RegExp(text,"ig")).test(d.get("last_name"))
        )
        this.setState({data: newData})
    }
    render() {
        return (
            <div>
                <SearchBar typeHandler={this.typeHandler} />
                <Results data={this.state.data} />
            </div>
        )
    }
}

const SearchBar = props => {
    return (
        <div>
            <h1>Search</h1>
            <p>Go ahead and type something to start filtering the list by either first or last name.</p>
            <TextField
                hintText="Begin typing a name"
                floatingLabelText="Search"
                fullWidth={true}
                onChange={(e) => props.typeHandler(e)}
            />
        </div>
    )
}
SearchBar.propTypes = {
    typeHandler: PropTypes.func.isRequired,
}

const Results = props => {
    return (
        <div>
            <h1 className="centered-text">{props.data.size} Results</h1>
            <ul>{props.data.map((d, key) =>
                <li key={key}>
                    <Paper zDepth={1} className="dynamicSearch__paper">
                        <Avatar src={d.get("Avatar")} alt={d.get("first_name")}/><br />
                        {d.get("first_name")} {d.get("last_name")}
                    </Paper>
                </li>
            )}</ul>
        </div>
    )
}
Results.propTypes = {
    data: ImmutablePropTypes.list.isRequired,
}


export default DynamicSearchContainer