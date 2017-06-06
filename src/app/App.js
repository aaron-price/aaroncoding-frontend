import React from "react"
import "./App.scss"
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"
import Menu from "./Menu"
import RouteFactory from "./RouteFactory"
import PropTypes from "prop-types"
import ReactGA from "react-ga"
import HttpsRedirect from "react-https-redirect"

// Google analytics
ReactGA.initialize("UA-99298519-1", {
    debug: true,
})
function logPageView() {
    ReactGA.set({ page: window.location.pathname + window.location.search })
    ReactGA.pageview(window.location.pathname + window.location.search)
}


const App = (props) => (
    <Router onUpdate={logPageView}>
        <Provider store={props.store}>
            <HttpsRedirect>
                <div>
                    <Menu />
                    <RouteFactory />
                </div>
            </HttpsRedirect>
        </Provider>
    </Router>
)
App.propTypes = {
    store: PropTypes.object.isRequired,
}

export default App