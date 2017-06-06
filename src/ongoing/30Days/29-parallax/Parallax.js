import React from "react"
import { between } from "../../../helpers/Random"

let bubbleArray = []
const count = 10
for (let i = 0; i < count; i++) {
    bubbleArray.push(
        {
            size: between(1,100),
            cx: between(-100, 600),
            cy: between(-100, 600),
        }
    )
}

class Parallax extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bubbles: bubbleArray,
        }
    }
    componentDidMount() {
        this.animate()
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    animate() {
        this.interval = setInterval(() => {
            let newBubbles = this.state.bubbles.map(bubble => {
                function pop() { return bubble.cy < (-150 - Number(bubble.size)) }
                return pop()
                    ? {
                        size: between(1,100),
                        cx: between(-100, 600),
                        cy: 700,
                    }

                    : {
                        size: bubble.size,
                        cx: bubble.cx,
                        cy: bubble.cy - (bubble.size * 0.02),
                    }
            })

            this.setState({bubbles: newBubbles})
        } ,30)

    }
    render() {
        return (
            <div>
                <p>My bubbles</p>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                     x="0px" y="0px"
                     width="100%" height="100%"
                     viewBox="-100 -100 600 600"
                     style={{
                         backgroundColor: "#E1F5FE",
                     }}>
                    {this.state.bubbles.map((bubble, i) => {
                        return <circle
                                key={i}
                                size={bubble.size}
                                className="parallax__bubble"
                                cx={bubble.cx}
                                cy={bubble.cy}
                                r={bubble.size.toString()}
                                fill="#00ACC1"
                                fillOpacity={bubble.size * 0.01}
                            />
                    })}
                </svg>
            </div>
        )
    }
}

export default Parallax