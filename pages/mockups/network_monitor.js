import Link from 'next/link'
import 'isomorphic-fetch'
import React, { Component } from 'react'

import Paper from 'material-ui/Paper'
import { LineChart } from 'react-d3/linechart'

import Head from '../../components/Head.js'
import HoverPaper from '../../components/HoverPaper.js'
import { CodeBlock } from '../../components/CodeBlocks.js'
import { initStore } from '../../redux/store'
import withRedux from 'next-redux-wrapper'
import { return_current_user } from '../../services/current_user.js'
import { weighted_random } from '../../services/Random.js'
import Chart from '../../components/Projects/network_monitor/Chart.js'

const weights = [
    {range: [40, 60], likelihood: 15},
    {range: [30, 70], likelihood: 10},
    {range: [20, 80], likelihood: 7},
    {range: [0, 100], likelihood: 5},
]

function line_gen(name) {
    let values = []
    for(let i = 0; i < 30; i++) {
        values.push({
            x: i,
            y: weighted_random(0,100, weights)
        })
    }
    return { name, values }
}

const line_data = [
    line_gen('jan'),
    line_gen('feb'),
    line_gen('mar'),
    line_gen('apr'),
    line_gen('may'),
    line_gen('jun'),
    line_gen('jul'),
    line_gen('aug'),
    line_gen('sep'),
    line_gen('oct'),
    line_gen('nov'),
    line_gen('dec'),
]

class NetworkMonitor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            month: 0,
        }
    }
    componentDidMount() {
        this.setState({ visible: true })
    }
    render() {
        const data = [line_data[this.state.month]]
        return (
            <Head current_user={this.props.current_user}>
                <h1>Network Monitor</h1>
                <Paper>
                    {this.state.visible && (
                        <Chart data={line_data[this.state.month]} />
                    )}
                </Paper>
            </Head>
        )
    }
}
NetworkMonitor.getInitialProps = async function(context) {
    return {
        current_user: await return_current_user(context),
    }
}
export default withRedux(initStore, null)(NetworkMonitor)
