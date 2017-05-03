import React from "react"
import ReactDOM from "react-dom"
import getMuiTheme from "material-ui/styles/getMuiTheme"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import App from "./app/App"
import store from "./redux/store/store"
import "./index.scss"

import injectTapEventPlugin from "react-tap-event-plugin"
injectTapEventPlugin()


ReactDOM.render(
    <MuiThemeProvider muiTheme={getMuiTheme()}>
        <App store={store} />
    </MuiThemeProvider>,
  document.getElementById("root")
)
