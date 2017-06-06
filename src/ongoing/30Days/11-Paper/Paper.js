import React from "react"
import { TweenMax, Linear } from "gsap"
import Paper from "material-ui/Paper"
const colors = ["B2DFDB", "80CBC4", "4DB6AC", "26A69A","009688","00897B","00796B","00695C","004D40"]

class PaperDemo extends React.Component {
    constructor(props) {
        super(props)
        let pendingState = {}
        colors.forEach(i => pendingState[`paper${i}`] = 1)
        this.state = pendingState

        this.hoverHandler = this.hoverHandler.bind(this)
        this.unhoverHandler = this.unhoverHandler.bind(this)
    }
    hoverHandler(i) {
        this.setState({["paper" + i]: 5})
    }
    unhoverHandler(i) {
        this.setState({["paper" + i]: 1})
    }

    render() {
        return (
            <div>
                <p>Keeping it super simple today because I desperately need sleep.
                    A demo of Google's Material UI. You can change the zDepth by hovering.</p>
                {colors.map((color, i) => {
                    return (
                        <Paper
                            key={i}
                            style={{
                                height: 100,
                                width: 100,
                                margin: 20,
                                textAlign: "center",
                                display: "inline-block",
                                backgroundColor: `#${color}`,
                            }}
                            className="paperdemo__paper"
                            zDepth={this.state[`paper${i}`]}
                            onMouseOver={() => this.hoverHandler(i)}
                            onMouseOut={() => this.unhoverHandler(i)}
                        />
                    )
                })}
            </div>
        )
    }
}
export default PaperDemo