import React from "react"
import "./App.scss"
import { Route } from "react-router-dom"
import contents from "../contents"
import Home from "./Home"
import Settings from "./Settings"
import AuthContainer from "./auth/AuthContainer"
import Hire from "../Hire/Hire.js"

function routeFactory() {
    return contents.map((content, key) => {
        return content.get("component") !== undefined
            && <Route key={key} path={`/${content.get("path")}`} component={content.get("component")}/>
    })
}
const Body = props => {
    return (
        <div className="body">
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={AuthContainer}/>
            <Route exact path="/settings" component={Settings}/>
            <Route exact path="/hire" component={Hire}/>
            {routeFactory()}
        </div>
    )
}

export default Body