import React from "react"
import "./App.scss"
import { Link } from "react-router-dom"
import contents from "../contents"
import { connect } from "react-redux"
import ImmutablePropTypes from "react-immutable-proptypes"
import PropTypes from "prop-types"
import Paper from "material-ui/Paper"
import { TweenMax } from "gsap"

const featureBoxes = [
    {
        title: "30 Days Of Coding",
        description: "I made a thing a day for a month",
        image: "https://s3-us-west-2.amazonaws.com/aaroncoding/images/calendar2.png",
        uri: "/30days",
    },{
        title: "Mockups",
        description: "Demo web pages",
        image: "https://s3-us-west-2.amazonaws.com/aaroncoding/images/website2.png",
        uri: "/mockups",
    },{
        title: "Hire Me",
        description: "Front end developer, seeking new challenges",
        image: "https://s3-us-west-2.amazonaws.com/aaroncoding/images/me1.png",
        uri: "/hire",
    },{
        title: "Developer tools",
        description: "Some handy things",
        image: "https://s3-us-west-2.amazonaws.com/aaroncoding/images/opensource1.png",
        uri: "/tools",
    },
]

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {hoveredId: -1}
        this.hoverHandler = this.hoverHandler.bind(this)
    }
    hoverHandler(id = -1) { this.setState({hoveredId: id}) }
    render() {
        return (
            <div>
                <Paper className="padded-paper centered-text">
                    <h1>Aaron Coding</h1>
                </Paper>
                <div className="home-all-featureboxes">
                    {featureBoxes.map((box, key) => {
                        return <FeatureBox
                            key={key}
                            id={key}
                            title={box.title}
                            description={box.description}
                            image={box.image}
                            uri={box.uri}
                            hoverHandler={this.hoverHandler}
                            hoveredId={this.state.hoveredId}
                            />
                    })}
                </div>
            </div>
        )
    }
}


const FeatureBox = props => {
    const hovered = props.id === props.hoveredId
    const unhoveredStyle = {backgroundColor: "#FAFAFA", order: props.id}
    const hoveredStyle = {backgroundColor: "#F5F5F5", order: props.id}
    return (
        <Paper className="home-featurebox-container padded-paper"
            onMouseOver={e => props.hoverHandler(props.id)}
            onMouseOut={e => props.hoverHandler()}
            zDepth={hovered ? 1 : 2}
            style={hovered ? hoveredStyle : unhoveredStyle}
        >
            <Link to={props.uri}>
                <div className="home-featurebox-inner-container">
                    <h3 className="home-featurebox-title">{props.title}</h3>
                    <p className="home-featurebox-description">{props.description}</p>
                    <div className="home-featurebox-image-wrapper">
                        <img
                            className="home-featurebox-image"
                            alt={props.title}
                            src={props.image}
                        />
                    </div>
                </div>
            </Link>
        </Paper>
    )
}

Home.propTypes = {}
FeatureBox.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
    hoverHandler: PropTypes.func.isRequired,
    hoveredId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    uri: PropTypes.string.isRequired,
}

export default Home