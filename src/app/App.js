import React from "react"
import "./App.scss"
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"
import Menu from "./Menu"
import Body from "./Body"
import PropTypes from "prop-types"


const App = (props) => (
    <Router>
        <Provider store={props.store}>
            <div>
                <Menu />
                <hr/>
                <Body />
            </div>
        </Provider>
    </Router>
)
App.propTypes = {
    store: PropTypes.object.isRequired,
}

export default App