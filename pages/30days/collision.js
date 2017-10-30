import Link from 'next/link'
import 'isomorphic-fetch'
import React, { Component } from 'react'

import Paper from 'material-ui/Paper'

import Head from '../../components/Head.js'
import { initStore } from '../../redux/store'
import withRedux from 'next-redux-wrapper'
import { return_current_user } from '../../services/current_user.js'

class Collision extends Component {
    constructor(props) {
        super(props)
        this.state = {
            unit: '1vmin',
            discovered: false,
            speed: 1,
            el1: {
                left: 32.5,
                top: 20,
                width: 5,
                height: 5,
            },
            el2: {
                left: 20,
                top: 50,
                width: 30,
                height: 2,
            },
            el3: {
                left: 20,
                top: 10,
                width: 30,
                height: 2,
            },
        }
        this.handle_resize = this.handle_resize.bind(this)
        this.update_unit = this.update_unit.bind(this)
        this.move = this.move.bind(this)
    }
    update_unit(el) {
        if(el && !this.state.discovered) {
            this.setState({
                unit: el.getBoundingClientRect().width,
                discovered: true,
            })
        }
    }
    handle_resize() {
        this.setState({discovered: false})
    }
    componentDidMount() {
        window.addEventListener('resize', this.handle_resize)
        let ticker = setInterval(() => this.move(), 20)
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handle_resize)
    }
    move() {
        this.setState((prevState) => {
            let top_of_floor = (prevState.el2.top)
            let bottom_of_ball = (prevState.el1.top + prevState.el1.height + prevState.speed)
            let top_of_ball = (prevState.el1.top + prevState.speed)
            let bottom_of_roof = prevState.el3.top + prevState.el3.height + (prevState.el1.height)
            // While moving downward
            if(prevState.speed > 0) {
                if(top_of_floor <= bottom_of_ball) {
                    // Ball is too low. Bounce up.
                    return {
                        speed: prevState.speed * -1,
                        el1: {
                            left: prevState.el1.left,
                            top: prevState.el1.top + (prevState.speed * -2),
                            width: prevState.el1.width,
                            height: prevState.el1.height,
                        }
                    }
                } else {
                    // Ball is not too low. Keep falling
                    return {
                        el1: {
                            left: prevState.el1.left,
                            top: prevState.el1.top + prevState.speed,
                            width: prevState.el1.width,
                            height: prevState.el1.height,
                        }
                    }
                }
            } else {
                // While moving upward
                if(bottom_of_roof >= bottom_of_ball) {
                    // Ball is too low. Bounce up.
                    return {
                        speed: prevState.speed * -1,
                        el1: {
                            left: prevState.el1.left,
                            top: prevState.el1.top + (prevState.speed * -2),
                            width: prevState.el1.width,
                            height: prevState.el1.height,
                        }
                    }
                } else {
                    // Ball is not too low. Keep falling
                    return {

                        el1: {
                            left: prevState.el1.left,
                            top: prevState.el1.top + prevState.speed,
                            width: prevState.el1.width,
                            height: prevState.el1.height,
                        }
                    }
                }
            }

        })

    }
    render() {
        let spacer = 200
        return (
            <Head
                description='A react animation with collision detection'
                current_user={this.props.current_user}>
                <h1>Collision</h1>
                <p>"Boing!"</p>
                <div style={{width: '1vmin', height: spacer * 5}} ref={(el) => this.update_unit(el)}></div>
                {this.state.discovered && (
                    <div>
                        <div className='collision_element' style={{
                            left: this.state.el1.left * this.state.unit,
                            top: this.state.el1.top * this.state.unit + spacer,
                            width: this.state.el1.width * this.state.unit,
                            height: this.state.el1.height * this.state.unit,
                            borderRadius: '100%',
                        }}></div>
                        <div className='collision_element' style={{
                            left: this.state.el2.left * this.state.unit,
                            top: this.state.el2.top * this.state.unit + spacer,
                            width: this.state.el2.width * this.state.unit,
                            height: this.state.el2.height * this.state.unit,
                            backgroundColor: '#000000'
                        }}></div>
                        <div className='collision_element' style={{
                            left: this.state.el3.left * this.state.unit,
                            top: this.state.el3.top * this.state.unit + spacer,
                            width: this.state.el3.width * this.state.unit,
                            height: this.state.el3.height * this.state.unit,
                            backgroundColor: '#000000'
                        }}></div>
                    </div>
                )}


            </Head>
        )
    }
}
Collision.getInitialProps = async function(context) {
    return {
        current_user: await return_current_user(context),
    }
}
export default withRedux(initStore, null)(Collision)
