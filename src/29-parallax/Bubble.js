import React from "react"

export default function Bubble(props) {
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="525px" height="525px" viewBox="0 0 525 525">
            <g id="Layer_2" style={{display: "none"}}>
                <rect x="-12.5" y="-6.5" style={{display: "inline", fill: "#3FA9F5", stroke: "#000000", strokeMiterlimit: 10}} width={556} height={540} />
            </g>
            <g id="Layer_1">
                <radialgradient id="SVGID_1_" cx="262.2373" cy="261.8506" r="259.8681" gradientUnits="userSpaceOnUse">
                    <stop offset={0} style={{stopColor: "#FFFFFF", stopOpacity: "0.1"}} />
                    <stop offset="0.5002" style={{stopColor: "#FFFFFF", stopOpacity: "0.1"}} />
                    <stop offset="0.9999" style={{stopColor: "#FFFFFF", stopOpacity: "0.8"}} />
                </radialgradient>
                <circle style={{fill: "url(#SVGID_1_)", stroke: "#000000", strokeWidth: 2, strokeMiterlimit: 10}} cx="262.237" cy="261.851" r="259.868" />
                <radialgradient id="SVGID_2_" cx="191.4829" cy="96.4297" r="49.792" fx="193.6281" fy="95.4345" gradientUnits="userSpaceOnUse">
                    <stop offset={0} style={{stopColor: "#FFFFFF"}} />
                    <stop offset={1} style={{stopColor: "#FFFFFF", stopOpacity: "0.6"}} />
                </radialgradient>
                <path style={{fill: "url(#SVGID_2_)"}} d="M220.48,125.427c22.352-22.352,27.49-53.455,11.475-69.47
                c-16.015-16.015-47.118-10.877-69.47,11.475s-27.49,53.455-11.475,69.47C167.025,152.917,198.128,147.779,220.48,125.427z" />
            </g>
        </svg>
    )
}
