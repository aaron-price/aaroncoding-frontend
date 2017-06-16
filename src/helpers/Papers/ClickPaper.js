import React from "react"
import PropTypes from "prop-types"
import Paper from "material-ui/Paper"
import { Link } from "react-router-dom"
/* Usage
Use any, or all, or none of the props.

    <ClickPaper
        contents={() => <div>Profile page (social network)</div>}
        uri="/mockups/social"
        commonStyles={}
        hoverStyles={}
        unhoverStyles={}
    />
*/

class ClickPaper extends React.Component {
    constructor(props) {
        super(props)
        this.state = {hovered: false, active: false}
        this.hoverHandler = this.hoverHandler.bind(this)
        this.clickHandler = this.clickHandler.bind(this)
    }
    hoverHandler(hovered = false) { this.setState({hovered}) }
    clickHandler(active = false) {
        this.setState({active})
    }
    render() {
        const Contents = this.props.contents || <span></span>
        const commonStyles = {margin: "0.5em", cursor: "pointer", width: "100%"}
        const prehoverStyles = {backgroundColor: "#F5F5F5"}
        const preunhoverStyles = {backgroundColor: "#FAFAFA"}
        const hoverStyles = Object.assign({}, commonStyles, this.props.commonStyles || {}, prehoverStyles, this.props.hoverStyles || {})
        const unhoverStyles = Object.assign({}, commonStyles, this.props.commonStyles || {}, preunhoverStyles, this.props.unhoverStyles || {})
        return (
            <Paper
                style={this.state.hovered ? hoverStyles : unhoverStyles}
                className="padded-paper"
                zDepth={this.state.active ? 2 : 1}
                onMouseDown={(e) => this.clickHandler(true)}
                onMouseUp={(e) => this.clickHandler(false)}
                onMouseOut={(e) => this.hoverHandler(false)}
                onMouseOver={(e) => this.hoverHandler(true)}>
                {
                    this.props.uri && (
                        <Link to={this.props.uri}>
                            <Contents />
                        </Link>
                    )
                }
            </Paper>
        )
    }
}

const Child = props => {
    return null
}

ClickPaper.propTypes = {
    contents: PropTypes.func,
    uri: PropTypes.string,
    commonStyles: PropTypes.object,
    hoverStyles: PropTypes.object,
    unhoverStyles: PropTypes.object,
}

export default ClickPaper