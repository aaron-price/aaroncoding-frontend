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
        this.state = { lower: "block"}
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
            lower: block > floating ? "block" : "floating",
        })
    }
    render() {
        const Callback = this.props.callback
        return (
            <div>
                <BlockBottom />
                <FloatingBottom />
                <Callback lower={this.state.lower}/>
            </div>
        )
    }
}
BottomDetector.propTypes = {
    callback: PropTypes.func.isRequired,
}

const BlockBottom = props => {
    return <div className="bottomdetector-block" style={{marginTop: "4em"}}></div>
}
const FloatingBottom = props => {
    return <div className="bottomdetector-floating" style={{position: "fixed", bottom: "0"}}></div>
}


export default BottomDetector