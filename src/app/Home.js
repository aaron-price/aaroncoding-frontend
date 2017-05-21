import React from "react"
import "./App.scss"
import { Link } from "react-router-dom"
import contents from "../contents"
import { connect } from "react-redux"
import ImmutablePropTypes from "react-immutable-proptypes"
import Paper from "material-ui/Paper"
import { TweenMax } from "gsap"

const VidBG = props => {
    return (
        <div>
            <div className="VidBG__overlay"></div>
            <video
                className="VidBG__video"
                autoPlay={true}
                loop={true}
                muted={true}
            >
                <source src="https://s3-us-west-2.amazonaws.com/aaroncoding/videos/bigCalendar.3gp"/>
                <source src="https://s3-us-west-2.amazonaws.com/aaroncoding/videos/bigCalendar.mp4" type="video/mp4"/>
                <source src="https://s3-us-west-2.amazonaws.com/aaroncoding/videos/bigCalendar.ogv" type="video/ogg"/>
                <source src="https://s3-us-west-2.amazonaws.com/aaroncoding/videos/bigCalendar.webm" type="video/webm"/>
            </video>
        </div>
    )
}

class Home extends React.Component {
    constructor(props) {
        super(props)
        let pendingState = {}
        contents.toJS().forEach((content, i) => pendingState[`paperLink${i}`] = 2)
        this.state = pendingState

        this.hoverHandler = this.hoverHandler.bind(this)
        this.unhoverHandler = this.unhoverHandler.bind(this)
    }
    hoverHandler(i) {
        this.setState({["paperLink" + i]: 1})
    }
    unhoverHandler(i) {
        this.setState({["paperLink" + i]: 2})
    }

    componentDidMount() {
        this.animate()
    }
    animate() {
        const ulBox = document.getElementsByClassName("home-slidelist__ul")[0]
            .getBoundingClientRect()
        const ulRight = ulBox.right
        const ulOffset =  -1 * (ulRight * 2)

        const tl = TweenMax
        tl.staggerFrom(".home-slidelist__li", 1, {x: ulOffset}, 0.1)
    }

    render() {
        return (
            <div>
                <VidBG />
                <div className="home__text-wrapper">
                    <Paper className="home__text">
                        <h2>Coded In A Day</h2>
                        <p>By Aaron Price</p>
                        <p>I'm attempting to get a job as a front end web developer. But I'm not great at talking about
                            myself. So I've decided to let my skills speak for themselves</p>
                        <p>To that end, on April 24th, 2017, I started building a small project, every day.</p>
                        <br />
                        <p>I haven't missed a day yet.</p>
                    </Paper>
                </div>
                <div className="home__list-wrapper">
                    <Paper className="home__list home-slidelist__wrapper">
                        <ul  className="home-slidelist__ul">
                            {contents.map((content, key) => {
                                const title = content.get("title")
                                const show = this.props.stateContent.filter(item => item.get("title") === title).get(0).get("show")
                                if (show) {
                                    // If it has a React component, link to that
                                    return content.get("component") !== undefined
                                        ? <li key={key} className="home-slidelist__li">
                                        <Link to={`/${content.get("path").toLowerCase()}`}>
                                        <Paper
                                            className="home-slidelist__item" ref={`paperLink${key}`}
                                            zDepth={this.state[`paperLink${key}`]}
                                            onMouseOver={() => this.hoverHandler(key)}
                                            onMouseOut={() => this.unhoverHandler(key)}
                                        >
                                            Day {content.get("day")} {content.get("title")}
                                        </Paper>
                                        </Link></li>

                                        // If no React component, just load the html
                                        : <li key={key} className="home-slidelist__li">
                                        <a href={`/../${content.get("day")}-${content.get("title").toLowerCase()}/index.html`}>
                                        <Paper
                                            className="home-slidelist__item" ref={`paperLink${key}`}
                                            zDepth={this.state[`paperLink${key}`]}
                                            onMouseOver={() => this.hoverHandler(key)}
                                            onMouseOut={() => this.unhoverHandler(key)}
                                        >
                                            Day {content.get("day")} {content.get("title")}
                                        </Paper>
                                        </a></li>
                                } else {
                                    return <span key={key}></span>
                                }
                            })}
                        </ul>
                    </Paper>
                </div>
            </div>
        )
    }
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