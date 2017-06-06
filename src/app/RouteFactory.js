import React from "react"
import "./App.scss"
import { Route } from "react-router-dom"
import contents from "../contents"
import Home from "./Home"
import Settings from "./Settings"
import AuthContainer from "./auth/AuthContainer"
import Hire from "./Hire/Hire.js"
import SupplyDemand from "../ongoing/supplyDemand/SupplyDemand.js"
import QuizRunner from "../ongoing/quiz/QuizRunner.js"
import Days30 from "../ongoing/30Days/Browse.js"
import Tools from "../ongoing/Tools/Tools.js"
import mockupRoutes from "../ongoing/mockups/mockupRoutes.js"

// Automagically generates routes for the 30 thing-a-day projects
function routeFactory() {
    return contents.map((content, key) => {
        return content.get("component") !== undefined
            && <Route key={key} path={`/${content.get("path")}`} component={content.get("component")}/>
    })
}
const RouteFactory = props => {
    return (
        <div className="body">
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={AuthContainer}/>
            <Route exact path="/settings" component={Settings}/>
            <Route exact path="/hire" component={Hire}/>
            <Route exact path="/supply_and_demand" component={SupplyDemand}/>
            <Route exact path="/quiz" component={QuizRunner}/>
            <Route exact path="/30days" component={Days30}/>
            <Route exact path="/open_source" component={Days30}/>
            {mockupRoutes()}
            <Route exact path="/tools" component={Tools}/>
            {routeFactory()}
        </div>
    )
}

export default RouteFactory