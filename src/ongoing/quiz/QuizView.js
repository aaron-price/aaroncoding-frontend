import React from "react"
import PropTypes from "prop-types"
import RaisedButton from "material-ui/RaisedButton"
import { formatDrill } from "./quizHelpers"
import Paper from "material-ui/Paper"

const commonStyles = {cursor: "pointer", margin: "0.5em"}
const clickableHovered = Object.assign(commonStyles, {})
const clickableUnhovered = Object.assign(commonStyles, {})

class QuizView extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hovered: -1 }
        this.hoverHandler = this.hoverHandler.bind(this)
        this.unHoverHandler = this.unHoverHandler.bind(this)
    }
    hoverHandler(n) { this.setState({hovered: n}) }
    unHoverHandler() { this.setState({hovered: -1}) }
    render() {
        const d = this.props.drill
        return (
            <div>
                <Paper className="padded-paper" zDepth={1}>
                    <h2>{d.title}</h2>
                    <code>{formatDrill(d.question)}</code>
                </Paper>
                {
                    this.props.wrong ? (
                        <div className="padded-paper">
                            <p>Oops, sorry that's not right. You said:</p><hr/>
                            <div className="padded-paper quiz-incorrect">{formatDrill(this.props.previousAnswer)}</div><hr/><br/>
                            <p>But the correct answer was:</p><hr/>
                            <div className="padded-paper quiz-correct">{formatDrill(d.answers[d.correct])}</div><hr/>
                            <p>If you need to study up on this topic, here's some resources:</p>
                            <p><a href={d.resources}>{d.resources}</a></p>
                            <RaisedButton onClick={this.props.clearWrong}>Move on!</RaisedButton>
                        </div>
                    ) : (
                        <ul>{d.answers.map((a, i) => {
                            return (
                                <li onClick={e => this.props.clickHandler(i)}
                                    key={i}
                                ><Paper className="padded-paper"
                                    onMouseOver={e => this.hoverHandler(i)}
                                    onMouseOut={e => this.unHoverHandler()}
                                    zDepth={i === this.state.hovered ? 1 : 2}
                                    style={i === this.state.hovered ? clickableHovered : clickableUnhovered}>
                                        {formatDrill(a)}
                                </Paper></li>
                            )
                        })}</ul>
                    )
                }
            </div>
        )
    }
}

QuizView.propTypes = {
    drill: PropTypes.object.isRequired,
    clickHandler: PropTypes.func.isRequired,
    wrong: PropTypes.bool.isRequired,
    clearWrong: PropTypes.func.isRequired,
    previousAnswer: PropTypes.string,
}

export default QuizView