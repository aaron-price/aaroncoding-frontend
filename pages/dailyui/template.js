import React, { Component } from 'react'
import Head from '../../components/MockupHead.js'
import { initStore } from '../../redux/store'
import withRedux from 'next-redux-wrapper'
import { return_current_user } from '../../services/current_user.js'

const Nav = (props) => {
    return (
        <div>
        </div>
    )
}

const WireFrame = (props) => {
    return (
        <div>
        </div>
    )
}
const Challenge = (props) => {
    return (
        <div>
            <h1 className='dailyui_h1'>Day #1 | Template</h1>
            <p></p>
        </div>
    )
}
const Main = (props) => {
    return (
        <div>
        </div>
    )
}

class Template extends Component {
    constructor(props) {
        super(props)
        this.state = { visible: false }
    }
    componentDidMount() {
        if (document) {
            this.setState({ visible: true })
            // document.body.style.padding = 0
        }
    }
    render() {
        if (!this.state.visible) { return <span></span> } else {
            return (
                <Head description="Mockup design" current_user={this.props.current_user}>
                    <div className='dailyui_body'>
                        <Nav></Nav>
                        <Challenge></Challenge>
                    </div>
                </Head>
            )
        }
    }
}
Template.getInitialProps = async function(context) {
    return {
        current_user: await return_current_user(context),
    }
}
export default withRedux(initStore, null)(Template)
