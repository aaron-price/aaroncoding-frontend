import React from "react"
import { TweenMax, Linear } from "gsap"

class LoadingDoors extends React.Component {
    constructor() {
        super()
        this.state = {}
        this.animate = this.animate.bind(this)
    }
    componentDidMount() {
        this.animate()
    }
    animate() {
        let horizontal = this.refs.horizontal
        let left = this.refs.left
        let right = this.refs.right
        let leftText = this.refs.leftText
        let rightText = this.refs.rightText

        let vertical = this.refs.vertical
        let top = this.refs.top
        let bottom = this.refs.bottom
        let topText = this.refs.topText
        let bottomText = this.refs.bottomText



        let tl = TweenMax

        // tl.to(gear1, 5, {rotation: "360_cw", repeat: -1, transformOrigin: "50% 50%", ease:Linear.easeNone})
        // tl.to(gear4, 5, {rotation: "360_ccw", repeat: -1, transformOrigin: "50% 50%", ease:Linear.easeNone})
        // tl.to(gear3, 5, {rotation: "360_ccw", repeat: -1, transformOrigin: "50% 50%", ease:Linear.easeNone})
        // tl.to(gear2, 5, {rotation: "360_cw", repeat: -1, transformOrigin: "50% 50%", ease:Linear.easeNone})
    }
    render() {
        const canvasW = 350
        const canvasH = 350

        const viewboxW = 1000
        const viewboxH = 10

        return (
            <div>
                <p>The idea is that this could be a loading screen. You put the content of your web page under it, progressing the animation slowly until the page has loaded, and you reveal it with the final door.</p>
                <svg className="loadingDoors__container" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={canvasW} height={canvasH} viewBox={`0 0 ${viewboxW} ${viewboxH}`} style={{enableBackground: "new 0 0 350 350"}}>
                  <g ref="horizontal">
                    <rect ref="left" x="15.5" y="20.5" style={{fill: "#455A64", stroke: "#000000", strokeWidth: 3, strokeMiterlimit: 10}} width={159} height={309} />
                    <rect ref="right" x="174.5" y="20.5" style={{fill: "#455A64", stroke: "#000000", strokeWidth: 3, strokeMiterlimit: 10}} width={159} height={309} />
                    <rect ref="leftText" x={56} y={157} style={{fill: "none"}} width={78} height={36} />
                    <rect ref="rightText" x={215} y={157} style={{fill: "none"}} width={78} height={36} />
                  </g>
                  <g ref="vertical" style={{display: "none"}}>
                    <rect ref="top" x="15.5" y="20.5" style={{display: "inline", fill: "#616161", stroke: "#000000", strokeWidth: 3, strokeMiterlimit: 10}} width={318} height={155} />
                    <rect ref="bottom" x="15.5" y="175.5" style={{display: "inline", fill: "#616161", stroke: "#000000", strokeWidth: 3, strokeMiterlimit: 10}} width={318} height={155} />
                    <rect ref="topText" x={108} y={82} style={{display: "inline", fill: "none"}} width={117} height={39} />
                    <rect ref="bottomText" x={116} y={234} style={{display: "inline", fill: "none"}} width={117} height={39} />
                  </g>
                </svg>
            </div>
        )
    }
}
export default LoadingDoors