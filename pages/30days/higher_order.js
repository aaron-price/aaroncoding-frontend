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

const colors = ['B2DFDB', '80CBC4', '4DB6AC', '26A69A','009688','00897B','00796B','00695C','004D40']

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
        this.setState({['paper' + i]: 5})
    }
    unhoverHandler(i) {
        this.setState({['paper' + i]: 1})
    }

    render() {
        return (
            <Head
                description='React higher order components (HOC) demonstrated with material-ui'
                current_user={this.props.current_user}>

                <h1>Higher-Order Components</h1>
                <p className="about_text">Late day at work, not much time until bed,
									so I'm keeping today super simple.

                    <br/>Here I made a couple Higher-Order Components out of the
                                    Paper component from the material-ui package

                    <br/>One of the big advantages to using a framework like React, is the way it uses components. Write code once, use
                                    it in many places later.
                    <br/>The Material-UI 'Paper' component, for example, can be found all over this website. It makes up the nav bar, and the main content areas.
                    <br/>
                    <br/>So what is a 'Higher-Order' Component? According to the React Docs:</p>
                <p className='quote_text'>A higher-order component is a function that takes a component and returns a new component.</p>
                <p>
                    <br/>Below I show a regular Paper component, then HOC's I made; one with padding around it, One with hover functionality, and one with hover and click functionality.

                </p>
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
