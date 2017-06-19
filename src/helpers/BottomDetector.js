import React from "react"
import ElementQueries from "css-element-queries"
import PropTypes from "prop-types"

/* USAGE
    <BottomDetector callback={CTAFooter}/>
    Footer takes a props "lower" which returns either "block" or "floating"
    Footer should use that prop to render a different footer component.
        One is absolute position, bottom 0
        The other is not. probably a margin-top.
*/
class BottomDetector extends React.Component {
    constructor(props) {
        super(props)
        this.state = { lower: "floating"}
        this.calculateBottoms = this.calculateBottoms.bind(this)
    }
    componentDidMount() {
        const body = document.getElementsByTagName("body")[0]
        new ElementQueries.ResizeSensor(body, this.calculateBottoms)
        this.calculateBottoms()
    }
    calculateBottoms() {
        const block = document.getElementsByClassName("bottomdetector-block")[0].getBoundingClientRect().bottom
        const floating = document.getElementsByClassName("bottomdetector-floating")[0].getBoundingClientRect().bottom

        this.setState({
            lower: floating >= block ? "floating" : "block",
        })
    }
    render() {
        return (
            <div style={{width: "100%"}}>
                <BlockBottom callback={this.props.callback} show={this.state.lower === "block"} />
                <FloatingBottom callback={this.props.callback} show={this.state.lower === "floating"} />
            </div>
        )
    }
}

const BlockBottom = props => {
    const Callback = props.callback
    return (
        <div className="bottomdetector-block" style={{marginTop: "4em", width: "100%", overflowX: "hidden"}}>
            {props.show && <Callback />}
        </div>
    )
}
const FloatingBottom = props => {
    const Callback = props.callback
    return (
        <div className="bottomdetector-floating" style={{position: "fixed", bottom: "0", width: "100%", overflowX: "hidden"}}>
            {props.show && <Callback />}
        </div>
    )
}
BottomDetector.propTypes = {
    callback: PropTypes.func.isRequired,
}
BlockBottom.propTypes = {
    callback: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
}
FloatingBottom.propTypes = {
    callback: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
}

export default BottomDetector