import React from "react"
import { Route } from "react-router-dom"
import Mockups from "./Mockups.js"
import ContentDjLANDING from "./contentdj/ContentDj.js"
import ContentDjTrial from "./contentdj/Trial.js"
import ContentDjLearn from "./contentdj/Learn.js"
import Social from "./social/Social.js"

const mockupRoutes = props => {
    return (
        <div>
            <Route exact path="/mockups" component={Mockups}/>
            <Route exact path="/mockups/contentdj" component={ContentDjLANDING}/>
            <Route exact path="/mockups/contentdj/trial" component={ContentDjTrial}/>
            <Route exact path="/mockups/contentdj/learn" component={ContentDjLearn}/>

            <Route exact path="/mockups/social" component={Social}/>
        </div>
    )
}

export default mockupRoutes