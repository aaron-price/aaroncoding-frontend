import React from "react"
import { TweenMax } from "gsap"
import Paper from "material-ui/Paper"
import { between } from "../../../helpers/Random"
import isMobile from "ismobilejs"

const input = "Aaron Coding"
const inLn = input.length
const wid = (100 / (inLn)) * 1.5 + "vw"

const text = input.split("")
let textStyle = isMobile.any
    ? {
        textShadow: "0 0 7px #F00",
        fontWeight: 900,
    }
    : {
        textShadow: "0 0 0.5vmin #F00",
        fontWeight: 100,
    }
textStyle.color = "#000"
textStyle.fontSize = wid

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
            <div>
                <p>Big thanks to the 80's for giving us ET, the goonies, my own birth, and for inspiring Stranger Things.</p>
                <Paper className="stranger__container" style={{backgroundColor: "#000"}}>
                    {text.map((t, key) => <span
                        key={key}
                        ref={`char${key}`}
                        className="stranger__chars"
                        style={textStyle}>
                        {t === " " ? <span>&nbsp;</span> : t}
                    </span>)}
                </Paper>
            </div>
        )
    }
}

export default Stranger