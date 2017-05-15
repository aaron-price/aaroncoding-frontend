import React from "react"
import { TweenMax, Bounce, Sine, Elastic, Expo } from "gsap"

export default class Stats extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            points: [
                {y: 50, bg: "D32F2F"},
                {y: 50, bg: "1976D2"},
                {y: 50, bg: "388E3C"},
                {y: 50, bg: "F9A825"},
                {y: 50, bg: "7B1FA2"},
            ],
        }
        this.animate = this.animate.bind(this)
    }
    componentDidMount() {
        this.animate()
    }
    animate() {
        const tl = TweenMax
        let figsArr = []
        let figsOdd = []
        let figsEven = []
        this.state.points.forEach((point, key) => {
            figsArr.push(this.refs[`fig${key}`])
            key % 2 === 0
                ? figsEven.push(this.refs[`fig${key}`])
                : figsOdd.push(this.refs[`fig${key}`])
        })

        step1()
        function step1() { tl.staggerTo(figsArr, 2, {width: 150, ease: Bounce.easeOut, onComplete: step2}, 0.5) }
        function step2() { tl.to(figsArr, 1, {width: 80, delay: 2, ease: Elastic.easeOut.config(1, 0.3), onComplete: step3}) }
        function step3() { tl.to(figsEven, 1, {width: 150, ease: Sine.easeOut, onStart: step4}, -0.5) }
        function step4() { tl.to(figsOdd, 1, {width: 10, ease: Sine.easeOut, onComplete: step5}, 0.5) }
        function step5() { tl.staggerTo(figsArr, 1, {width: 80, ease: Expo.easeOut, onComplete: step6 }, 0.5) }
        function step6() { tl.staggerTo(figsArr, 2, {width: 10, delay: 2, ease: Expo.easeOut, onComplete: step1 }, -0.5) }
    }
    render() {
        return (
            <div>
                <p>An animated bar graph. I call this work: "Oh beloved sleep, how shall I enumerate the ways I miss thee".</p>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 200 200">
                    <g id="layer">
                        {this.state.points.map((point, key) =>
                            <rect
                                key={key}
                                ref={`fig${key}`}
                                x="1" y={40 + (key * 15)}
                                width={0}
                                fill={`#${point.bg}`}
                                height={10} />
                        )}
                    </g>
                    <g id="axis">
                        <polyline style={{fill: "none", stroke: "#000000", strokeWidth: 2}} points="1,32 1,133 25,133 225,133" />
                    </g>
                </svg>
            </div>
        )
    }
}