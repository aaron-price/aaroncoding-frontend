import Link from 'next/link'
import 'isomorphic-fetch'
import React, { Component } from 'react'

import Paper from 'material-ui/Paper'

import Head from '../../components/Head.js'
import { initStore } from '../../redux/store'
import withRedux from 'next-redux-wrapper'
import { return_current_user } from '../../services/current_user.js'

import {TweenMax, Power4 } from 'gsap'

function between(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

class Zipper extends Component {
    constructor() {
        super()
        this.state = { display: false }
        this.animate = this.animate.bind(this)
    }
    componentDidMount() {
        this.setState({ display: true })
        this.animate()

    }

    renderLines() {
        let lines = []
        for (let i = 0; i < 25; i++) {

            const width = between(0.1, 8)
            const colour1 = between(0, 255)
            const colour2 = between(0, 255)
            const colour3 = between(0, 255)

            // Upper line
            lines.push(<line
                className="lineUpper"
                key={`${i}-upper`} ref={`${i}-upper`}
                x1={i * 10} x2={i * 10} y1={20} y2={156}
                strokeWidth={width} stroke={`rgba(${colour1},${colour2},${colour3}, 1)`}/>)

            // Lower Line
            lines.push(<line
                className="lineLower"
                key={`${i}-lower`} ref={`${i}-lower`}
                x1={i * 10} x2={i * 10} y1={320} y2={155}
                strokeWidth={width} stroke={`rgba(${colour1},${colour2},${colour3}, 1)`}/>)
        }
        return lines
    }

    animate() {
        let ball = this.refs.ball
        let tl = TweenMax

        tl.to(ball, 2, {x: -280, delay: 0.5, yoyo:true, repeat:1, ease: Power4.easeIn })

        tl.staggerTo('.lineUpper', 1,
            {rotation: '60cw', yoyo:true, repeat:1, delay: 2.5, ease: Power4.easeOut}, -0.016)

        tl.staggerTo('.lineLower', 1,
            {rotation: '-60cw', yoyo:true, repeat:1, delay: 2.5, ease: Power4.easeOut, transformOrigin: 'bottom'}, -0.016)
    }

    render() {
        return (
            <Head current_user={this.props.current_user}>
                <h1>Zipper</h1>
                <p>This was going to be a barcode, but random colours were too much fun.</p>
                <div style={!this.state.display ? {display: 'none'} : {}}>
                    <svg className="container"
                        x="0px" y="0px"
                        width="100%" height="100%"
                        viewBox="-100 -100 800 800"
                        xmlns="http://www.w3.org/2000/svg">
                        {this.renderLines()}
                        <defs>
                            <linearGradient id="Grad" x1="0" x2="0" y1="0" y2="1">
                                <stop offset="0%" stopColor="#DDD"/>
                                <stop offset="50%" stopColor="black" stopOpacity="1"/>
                                <stop offset="100%" stopColor="#DDD"/>
                            </linearGradient>
                        </defs>
                        <circle className="zipper__ball" ref="ball" cx="550" cy="150" r="30" fill="url(#Grad)"/>
                    </svg>
                </div>
            </Head>
        )
    }
}

Zipper.getInitialProps = async function(context) {
    return {
        current_user: await return_current_user(context),
    }
}
export default withRedux(initStore, null)(Zipper)
