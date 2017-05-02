import React from "react"
import "./App.scss"
import { Route } from "react-router-dom"
import contents from "../contents"
import Home from "./Home"
import Settings from "./Settings"

function routeFactory() {
    return contents.map((content, key) => {
        return content.get("component") !== undefined
            && <Route key={key} path={`/${content.get("title")}`} component={content.get("component")}/>
    })
}
const Body = props => {
    return (
        <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/settings" component={Settings}/>
            {routeFactory()}
        </div>
    )
}

export default Body