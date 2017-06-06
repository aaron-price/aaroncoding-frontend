import React from "react"
import { TimelineLite, Bounce, Sine, Elastic, Expo, DrawSVGPlugin } from "gsap"
import { between } from "../../../helpers/Random"

export default class Stats extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            points: [[1,110],[26,130],[50,126],[75,105],[100,110],[125,90],[150,80],[170,100],[200,80]].join(" "),
        }
        this.animate = this.animate.bind(this)
    }
    componentDidMount() {
        const allPoints = [
            [[1,130],[26,130],[50,130],[75,130],[100,130],[125,130],[150,130],[170,130],[200,130]],
            this.generatePoints(9, 25),
        ]

        this.animate(allPoints)
    }
    generatePoints(quantity,spacing) {
        let points = []
        for (let i = 0; i < quantity; i++) {
            points.push([(i*spacing), between(50, 130)])
        }
        return points
    }

    animate(allPoints) {
        let start = allPoints[0]
        let target = allPoints[1]

        this.interval = setInterval(() => {
            let targetReached = true
            let newArr = []
            start.forEach((point, key) => {
                let speed = 1
                let newX
                let newY
                const startX = point[0]
                const targetX = target[key][0]
                const startY = point[1]
                const targetY = target[key][1]

                // Move X toward the target
                if (startX === targetX) { newX = startX }
                else if (startX > targetX) { newX = startX - speed; targetReached = false }
                else if (startX < targetX) { newX = startX + speed; targetReached = false }

                // Move Y toward the target
                if (startY === targetY) { newY = startY }
                else if (startY > targetY) { newY = startY - speed; targetReached = false }
                else if (startY < targetY) { newY = startY + speed; targetReached = false }

                newArr.push([newX, newY])
            })
            start = newArr

            // After the target is reached, move on to the next point
            if (targetReached) {
                start = target
                target = this.generatePoints(9, 25)
            }
            this.setState({points: newArr.join(" ")})

        } ,20)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    render() {
        return (
            <div>
                <p>This was a disaster, with a happy ending. I learned two things: <br />1. SVG polyline points are read-only. <br />2. Gsap's drawSVG is pay only.</p>
                <p>What was supposed to be a real quick day turned into writing my own animation engine from scratch.</p>
                <p>My first attempt worked, but only barely, so I refactored. It was an O(n^2) algorithm <strong>that ran on every interval</strong>. Yikes.</p>
                <p>Miraculously, my browser didn't crash, but I was still embarassed by it. So I rebuilt it.</p><br/>
                <p><strong>End result</strong>: An exponentially faster O(n^1) algorithm.</p>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 200 200">
                    <g id="layer">
                        <polyline ref="line" points={this.state.points}
                                  style={{fill: "none", stroke: "#388E3C", strokeWidth: 3}}>
                        </polyline>
                    </g>
                    <g id="axis">
                        <polyline style={{fill: "none", stroke: "#000000", strokeWidth: 2}} points="1,32 1,133 25,133 225,133" />
                    </g>
                </svg>
                <p>Hypnotic, isn't it?</p>
            </div>
        )
    }
}