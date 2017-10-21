import Link from 'next/link'
import 'isomorphic-fetch'
import React, { Component } from 'react'

import Paper from 'material-ui/Paper'
import { TweenMax } from "gsap"
import { between } from "../../services/Random.js"
import isMobile from "ismobilejs"

import Head from '../../components/Head.js'
import { initStore } from '../../redux/store'
import withRedux from 'next-redux-wrapper'
import { return_current_user } from '../../services/current_user.js'

const input = "Aaron Price"
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

class About extends Component {
		constructor(props) {
				super(props)
				this.state = {}
		}
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
						<Head current_user={this.props.current_user}>
								<div>
                    <h1>Stranger Logos</h1>
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
						</Head>
				)
		}
}
About.getInitialProps = async function(context) {
		return {
				current_user: await return_current_user(context),
		}
}
export default withRedux(initStore, null)(About)
