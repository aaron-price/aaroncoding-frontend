import React from "react"
import { TweenMax } from "gsap"
import Paper from "material-ui/Paper"
import { between } from "../helpers/Random"

const input = "Aaron Coding"
const text = input.split("")

class Stranger extends React.Component {
    componentDidMount() {
        this.animate()
    }
    animate() {
        const tl = TweenMax
        const chars = text.map((t, key) => this.refs[`char${key}`])
        chars.forEach(c => {
            tl.from(c, 10, {x: between(-200, 200), y: between(-200, 200)})
        })
    }
    render() {
        return (
            <Paper className="stranger__container" style={{backgroundColor: "#000"}}>
                {text.map((t, key) => <span
                    key={key}
                    ref={`char${key}`}
                    className="stranger__chars"
                    style={{
                        color: "#000",
                        textShadow: "0 0 8px #F00",
                        fontWeight: 100,
                    }}>
                    {t === " " ? <span>&nbsp;</span> : t}
                </span>)}
            </Paper>
        )
    }
}

export default Stranger