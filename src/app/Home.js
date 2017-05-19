import React from "react"
import "./App.scss"
import { Link } from "react-router-dom"
import contents from "../contents"
import { connect } from "react-redux"
import ImmutablePropTypes from "react-immutable-proptypes"
import Paper from "material-ui/Paper"

function linkFactory(stateContent, contents) {
    return contents.map((content, key) => {
        const title = content.get("title")
        const show = stateContent.filter(item => item.get("title") === title).get(0).get("show")
        if (show) {
            // If it has a React component, link to that
            return content.get("component") !== undefined
                ? <li key={key}><Link to={`/${content.get("path").toLowerCase()}`}
            >Day {content.get("day")} {content.get("title")}</Link><hr /> </li>

                // If no React component, just load the html
                : <li key={key}><a href={`/../${content.get("day")}-${content.get("title").toLowerCase()}/index.html`}
            >Day {content.get("day")} {content.get("title")}</a><hr /> </li>
        } else {
            return <span key={key}></span>
        }
    })
}

const VidBG  = props => {
    return (
        <div>
            <div className="VidBG__overlay"></div>
            <video
                className="VidBG__video"
                src="https://s3-us-west-2.amazonaws.com/aaroncoding/videos/bigCalendar.3gp"
                autoPlay={true}
                loop
            />
        </div>
    )
}

const Home = props => {
    return (
        <div>
            <VidBG />
            <div className="home__text-wrapper">
                <Paper className="home__text">
                    <h2>Coded In A Day</h2>
                    <p>By Aaron Price</p>
                    <p>I'm attempting to get a job as a front end web developer. But I'm not great at talking about myself. So I've decided to let my skills speak for themselves</p>
                    <p>To that end, on April 24th, 2017, I started building a small project, every day.</p>
                        <br />
                        <p>I haven't missed a day yet.</p>
                </Paper>
            </div>
            <div className="home__list-wrapper">
                <Paper className="home__list">
                    <ul>
                        {linkFactory(props.stateContent, contents)}
                    </ul>
                </Paper>
            </div>
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