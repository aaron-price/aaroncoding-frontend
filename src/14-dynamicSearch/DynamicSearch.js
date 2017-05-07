import React from "react"
import { fromJS } from "immutable"
import data from "./MOCK_DATA.json"
import PropTypes from "prop-types"
import ImmutablePropTypes from "react-immutable-proptypes"
import TextField from "material-ui/TextField"

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
            (new RegExp(text,"ig")).test(d.get("last_name"))  ||
            (new RegExp(text,"ig")).test(d.get("Location"))
        )
        this.setState({data: newData})
    }
    render() {
        return (
            <div>
                <p>With mock data courtesy of mockaroo.com, I give you 1001 random names and locations. I can even pronounce some of them!</p>
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
            <p>Go ahead and type something to start filtering the list.</p>
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
            <h1>{props.data.size} Results</h1>
            <ul>{props.data.map((d, key) =>
                <li key={key}>
                    <img src={d.get("avatar")} alt={d.get("first_name")}/><br />
                    {d.get("first_name")} {d.get("last_name")}<br />
                    from {d.get("Location")}
                    <hr />
                </li>
            )}</ul>
        </div>
    )
}
Results.propTypes = {
    data: ImmutablePropTypes.list.isRequired,
}


export default DynamicSearchContainer