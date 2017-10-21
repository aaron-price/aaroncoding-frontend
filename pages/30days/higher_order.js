import Link from 'next/link'
import 'isomorphic-fetch'
import React, { Component } from 'react'

import Paper from 'material-ui/Paper'

import Head from '../../components/Head.js'
import PaddedPaper from '../../components/PaddedPaper.js'
import HoverPaper from '../../components/HoverPaper.js'
import { initStore } from '../../redux/store'
import withRedux from 'next-redux-wrapper'
import { return_current_user } from '../../services/current_user.js'

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
            <Head current_user={this.props.current_user}>
                <h1>Higher-Order Components</h1>
                <p className="about_text">Late day at work, not much time until bed,
									so I'm keeping today super simple.

									<br/>Here I made a couple Higher-Order Components out of the
									Paper component from the material-ui package</p>
								<br/><br/><br/>
								<div className="paperdemo_wrapper">
										<Paper className="paperdemo">Regular Paper</Paper><br/>
										<PaddedPaper classes="paperdemo">Padded Paper</PaddedPaper><br />
										<HoverPaper classes="paperdemo">Hover Paper</HoverPaper><br/>
										<HoverPaper href="#" classes="paperdemo"><div className="paperdemo_button">Button Paper</div></HoverPaper><br/>
								</div>
                
            </Head>
        )
    }
}

PaperDemo.getInitialProps = async function(context) {
		return {
				current_user: await return_current_user(context),
		}
}
export default withRedux(initStore, null)(PaperDemo)
