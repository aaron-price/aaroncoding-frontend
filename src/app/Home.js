import React from "react"
import "./App.scss"
import { Link } from "react-router-dom"
import contents from "../contents"
import { connect } from "react-redux"
import ImmutablePropTypes from "react-immutable-proptypes"

function linkFactory(stateContent, contents) {
    return contents.map((content, key) => {
        const title = content.get("title")
        const show = stateContent.filter(item => item.get("title") === title).get(0).get("show")
        if (show) {
            // If it has a React component, link to that
            return content.get("component") !== undefined
                ? <li key={key}><Link to={`/${content.get("title").toLowerCase()}`}
            >day {content.get("day")} {content.get("title")}</Link> </li>

                // If no React component, just load the html
                : <li key={key}><a href={`/../${content.get("day")}-${content.get("title").toLowerCase()}/index.html`}
            >day {content.get("day")} {content.get("title")}</a> </li>
        } else {
            return <span key={key}></span>
        }
    })
}

const Home = props => {
    return (
        <div>
            <h2>Coded In A Day</h2>
            <p>By Aaron Price</p>
            <p>On April 24th, 2017, I started building a small project, every day. <br />
                I don't know when I'll stop. Some days they're pretty small, other times not so much. <br />
                It depends on whether I can spend the whole day, or just a lunch break, working on it.</p>
            <ul>
                {linkFactory(props.stateContent, contents)}
            </ul>
        </div>
    )
}
Home.propTypes = {
    stateContent: ImmutablePropTypes.list,
}


const mapStateToProps = (state) => {
    return {
        stateContent: state.get("content"),
    }
}

export default connect(mapStateToProps)(Home)