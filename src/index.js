import React from "react"
import ReactDOM from "react-dom"
import App from "./app/App"
import store from "./redux/store/store"
import "./index.scss"

ReactDOM.render(
  <App store={store} />,
  document.getElementById("root")
)
