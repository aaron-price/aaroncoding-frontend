import React from "react"
import ReactDOM from "react-dom"
import getMuiTheme from "material-ui/styles/getMuiTheme"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import App from "./app/App"
import store from "./redux/store/store"
import "./index.scss"
import {grey900} from "material-ui/styles/colors"
const muiTheme = getMuiTheme({
    palette: {
        textColor: grey900,
    },
    fontFamily: "Lato",
})

import injectTapEventPlugin from "react-tap-event-plugin"
injectTapEventPlugin()

ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
        <App store={store} />
    </MuiThemeProvider>,
  document.getElementById("root")
)
