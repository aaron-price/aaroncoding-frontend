import React from "react"
import PropTypes from "prop-types"
import Paper from "material-ui/Paper"
import { Link } from "react-router-dom"

/* USAGE:
Call it anywhere, either by itself or with an array of objects as the "contents" props
<HoverPaper />
or

////////////////////
let ctaContents = [
    {title: "FREE TRIAL", uri: "/mockups/contentdj/trial"},
    {title: "LEARN MORE", uri: "/mockups/contentdj/learn"},
]
ctaContents = ctaContents.map(i => {
    return {
        ...i,
        commonStyles: { width: "80vw" },
    }
})

const CTA = props => {
    return (
        <div>
            <HoverPaper
                contents={ctaContents}
            />
        </div>
    )
}
////////////////////

available properties:

<HoverPaper contents={[{
    title: String,
    description: String,
    image: String,
    uri: String,
    hoverBg: String,
    unhoverBg: String,
    hoverZ: number,
    unhoverZ: number,
    classProp: String,
    hoverClass: String,
    unhoverClass: String,
    commonStyles: String,
    hoverStyles: String,
    unhoverStyles: String,
}]}/>

*/
class HoverPaper extends React.Component {
    constructor(props) {
        super(props)
        this.state = {hoveredId: -1}
        this.hoverHandler = this.hoverHandler.bind(this)
    }
    hoverHandler(id = -1) { this.setState({hoveredId: id}) }
    render() {
        const contents = this.props.contents || [{}]
        return (
            <div>
                {contents.map((item, key) => {
                    return <FeatureBox
                        key={key}
                        id={key}
                        item={item}
                        hoverId={this.state.hoveredId}
                        hoverHandler={this.hoverHandler}
                        />
                })}
            </div>
        )
    }
}
HoverPaper.propTypes = {
    contents: PropTypes.array,
}

const FeatureBox = props => {
    const { title, description, image, uri, hoverBg, unhoverBg,
        hoverZ, unhoverZ, classProp, hoverClass, unhoverClass,
        commonStyles, hoverStyles, unhoverStyles } = props.item
    const hovered = props.id === props.hoverId
    const unhoveredStyle = {backgroundColor: unhoverBg || "#FFFFFF", order: props.id, ...commonStyles, unhoverStyles}
    const hoveredStyle = {backgroundColor: hoverBg || "#FAFAFA", order: props.id, ...commonStyles, hoverStyles}
    return (
        <Paper className="hoverpaper padded-paper"
            onMouseOver={e => props.hoverHandler(props.id)}
            onMouseOut={e => props.hoverHandler()}
            zDepth={hovered ? hoverZ || 1 : unhoverZ || 2}
            style={hovered ? hoveredStyle : unhoveredStyle}
        >
            <Link to={uri || ""} className="hoverpaper-link">
                <div className="hoverpaper-div">
                    <h2 className="hoverpaper-title">{title || ""}</h2>
                    <p className="hoverpaper-description">{description || ""}</p>
                    <div className="hoverpaper-image-wrapper">
                        {
                            image
                            ? (
                                <img
                                    className="hoverpaper-image"
                                    alt={title || ""}
                                    src={image || ""}
                                />
                            )
                            : null
                        }
                    </div>
                </div>
            </Link>
        </Paper>
    )
}

FeatureBox.propTypes = {
    item: PropTypes.object,
    id: PropTypes.number.isRequired,
    hoverId: PropTypes.number.isRequired,
    hoverHandler: PropTypes.func.isRequired,
}

export default HoverPaper