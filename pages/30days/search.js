import Link from 'next/link'
import 'isomorphic-fetch'
import React, { Component } from 'react'
import { fromJS } from 'immutable'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Avatar from 'material-ui/Avatar'

import Head from '../../components/Head.js'
import HoverPaper from '../../components/HoverPaper.js'
import { initStore } from '../../redux/store'
import withRedux from 'next-redux-wrapper'
import { return_current_user } from '../../services/current_user.js'
import data from '../../components/Projects/MOCK_DATA.json'

const SearchBar = props => {
    return (
        <div>
            <p>Go ahead and type something to start filtering the list by either first or last name.</p>
            <p>Random data thanks to mockaroo.com</p>
            <TextField
                hintText="Begin typing a name"
                floatingLabelText="Search"
                fullWidth={true}
                onChange={(e) => props.typeHandler(e)}
            />
        </div>
    )
}
const Results = props => {
    return (
        <div>
            <h1 className="center_text">{props.data.size} Results</h1>
            <ul className='search_list'>{props.data.map((d, key) =>
                <li key={key}>
                    <Paper zDepth={1} className="dynamicSearch__paper">
                        <Avatar src={d.get('Avatar')} alt={d.get('first_name')}/><br />
                        {d.get('first_name')} {d.get('last_name')}
                    </Paper>
                </li>
            )}</ul>
        </div>
    )
}
class About extends Component {
    constructor(props) {
        super(props)
        this.state = { data: fromJS(data) }
        this.typeHandler = this.typeHandler.bind(this)
    }
    typeHandler(e) {
        const text = e.target.value
        const newData = fromJS(data).filter(d =>
            (new RegExp(text,'ig')).test(d.get('first_name')) ||
						(new RegExp(text,'ig')).test(d.get('last_name'))
        )
        this.setState({data: newData})
    }
    render() {
        return (
            <Head
                description='A react search bar which updates as you type'
                current_user={this.props.current_user}>

                <div>
                    <h1>Dynamic Search</h1>
                    <SearchBar typeHandler={this.typeHandler} />
                    <Results data={this.state.data} />
                </div>
            </Head>
        )
    }
}
About.getInitialProps = async function(context) {
    return {
        current_user: await return_current_user(context),
    }
}
export default withRedux(initStore, null)(About)
