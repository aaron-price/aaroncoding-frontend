import Link from 'next/link'
import 'isomorphic-fetch'
import React, { Component } from 'react'

import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import shuffle from "fisher-yates"

import Head from '../../components/Head.js'
import HoverPaper from '../../components/HoverPaper.js'
import { initStore } from '../../redux/store'
import withRedux from 'next-redux-wrapper'
import { return_current_user } from '../../services/current_user.js'

function cardFactory() {
    const colors = ["F44336", "E91E63", "9C27B0", "3F51B5","2196F3","00897B","4CAF50","CDDC39","FFEB3B"]
    const items = []
    colors.forEach((color, key) => {
        const part1 = {value: color, pair: key, pos: 0, visible: true}
        const part2 = {value: color, pair: key, pos: 1, visible: true}
        items.push(part1)
        items.push(part2)
    })
    return items
}
const Card = (props) => {
		return (
			<Paper
		      key={props.id}
		      style={{
		          height: 100,
		          width: 100,
		          margin: 20,
		          textAlign: "center",
		          display: "inline-block",
		          backgroundColor: props.revealed ? `#${props.value}` : "#BDBDBD",
		          borderColor: props.clicked && "#FFEA00",
		          borderStyle: props.clicked && "solid",
							cursor: !props.clicked && 'pointer'

		      }}
		      zDepth={props.z}
		      className="memory__card"
		      onMouseOver={() => props.hoverHandler(props.id)}
		      onMouseOut={() => props.unhoverHandler(props.id)}
		      onClick={() => props.clickHandler(props.id)}
		  />
		)
}
class Memory extends Component {
		constructor(props) {
				super(props)
				this.state = {
	          items: [],//shuffle(cardFactory()),
	          clicked1: -1,
	          clicked2: -1,
	          known: [],
	          wrong: 0,
	          revealAll: true,
	      }
				this.hoverHandler = this.hoverHandler.bind(this)
        this.unhoverHandler = this.unhoverHandler.bind(this)
        this.clickHandler = this.clickHandler.bind(this)
				this.start = this.start.bind(this)
		}
    componentDidMount() {
        // setTimeout(() => this.setState({revealAll: false}), 5000)
    }
		start() {
				this.setState({ items: shuffle(cardFactory()) })
				setTimeout(() => this.setState({revealAll: false}), 5000)
		}
    // Check whether the two revealed cards are a match
    checkPair() {
        const item1 = this.state.items[this.state.clicked1]
        const item2 = this.state.items[this.state.clicked2]

        // If clicked1 and clicked2 have the same pair property, they're a pair.
        const match = item1.pair === item2.pair
        let newState = Object.assign({}, this.state)

        if (match) {
            newState.clicked1 = -1
            newState.clicked2 = -1
            newState.known.push(item1.pair)
            this.setState(newState)
        } else {
            newState.clicked1 = -1
            newState.clicked2 = -1
            newState.wrong += 1
            // Delay so users can see what the wrong one was.
            setTimeout(() => this.setState(newState), 1500)
        }
    }

    clickHandler(i) {
        // Don't count double clicks
        if (i === this.state.clicked1 || i === this.state.clicked2) { return }
        // Handle the first clicked card
        if (this.state.clicked1 === -1) { this.setState({clicked1: i}) }
        // Handle the second clicked card, and check for a match
        else if (this.state.clicked2 === -1) { this.setState({clicked2: i}, this.checkPair) }
    }
    hoverHandler(i) {
        let newState = Object.assign({}, this.state)
        newState.items[i].z = 5
        this.setState(newState)
    }
    unhoverHandler(i) {
        let newState = Object.assign({}, this.state)
        newState.items[i].z = 1
        this.setState(newState)
    }
		render() {
				return (
						<Head current_user={this.props.current_user}>
		            <div>
                    <h1>Memory Game</h1>
		                 <p>Memorize all the cards. Click on pairs.</p>
										 {this.state.items.length === 0
											 	? (<RaisedButton label="Start" onClick={() => this.start()}/>)
												: (
															<div>
																	<h1>Correct pairs: {this.state.known.length}</h1>
			 		                 				<h1>Incorrect pairs: {this.state.wrong}</h1>
															</div>
													)}


		                 {this.state.items.map((item, i) => {
		                    let revealed = false
		                    let clicked = false
		                    if (this.state.revealAll) { revealed = true }
		                    if (this.state.clicked1 === i) { revealed = true; clicked = true }
		                    if (this.state.clicked2 === i) { revealed = true; clicked = true }
		                    if (this.state.known.includes(item.pair)) { revealed = true }

		                    return (
		                        <Card
		                            revealed={revealed}
		                            value={item.value}
		                            id={i} key={i}
		                            clicked={clicked}
		                            partner={item.pos === 0 ? i + 1 : i - 1}
		                            hoverHandler={this.hoverHandler}
		                            unhoverHandler={this.unhoverHandler}
		                            clickHandler={this.clickHandler}
		                            z={item.z}
		                        />
		                    )
		                })}
		            </div>
						</Head>
				)
		}
}
Memory.getInitialProps = async function(context) {
		return {
				current_user: await return_current_user(context),
		}
}
export default withRedux(initStore, null)(Memory)
//
// import React from "react"
// import PropTypes from "prop-types"
// import { TweenMax, Linear } from "gsap"
// import Paper from "material-ui/Paper"
// import shuffle from "fisher-yates"
//
//
// function cardFactory() {
//     const colors = ["F44336", "E91E63", "9C27B0", "3F51B5","2196F3","00897B","4CAF50","CDDC39","FFEB3B"]
//     const items = []
//     colors.forEach((color, key) => {
//         const part1 = {value: color, pair: key, pos: 0, z: 1}
//         const part2 = {value: color, pair: key, pos: 1, z: 1}
//         items.push(part1)
//         items.push(part2)
//     })
//     return items
// }
//
// class Memory extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             items: shuffle(cardFactory()),
//             clicked1: -1,
//             clicked2: -1,
//             known: [],
//             wrong: 0,
//             revealAll: true,
//         }
//
//         this.hoverHandler = this.hoverHandler.bind(this)
//         this.unhoverHandler = this.unhoverHandler.bind(this)
//         this.clickHandler = this.clickHandler.bind(this)
//         // this.checkPair = this.checkPair.bind(this)
//     }
//     componentDidMount() {
//         setTimeout(() => this.setState({revealAll: false}), 5000)
//     }
//
//
//     // Check whether the two revealed cards are a match
//     checkPair() {
//         const item1 = this.state.items[this.state.clicked1]
//         const item2 = this.state.items[this.state.clicked2]
//
//         // If clicked1 and clicked2 have the same pair property, they're a pair.
//         const match = item1.pair === item2.pair
//         let newState = Object.assign({}, this.state)
//
//         if (match) {
//             newState.clicked1 = -1
//             newState.clicked2 = -1
//             newState.known.push(item1.pair)
//             this.setState(newState)
//         } else {
//             newState.clicked1 = -1
//             newState.clicked2 = -1
//             newState.wrong += 1
//             // Delay so users can see what the wrong one was.
//             setTimeout(() => this.setState(newState), 1500)
//         }
//     }
//
//     clickHandler(i) {
//         // Don't count double clicks
//         if (i === this.state.clicked1 || i === this.state.clicked2) { return }
//         // Handle the first clicked card
//         if (this.state.clicked1 === -1) { this.setState({clicked1: i}) }
//         // Handle the second clicked card, and check for a match
//         else if (this.state.clicked2 === -1) { this.setState({clicked2: i}, this.checkPair) }
//     }
//     hoverHandler(i) {
//         let newState = Object.assign({}, this.state)
//         newState.items[i].z = 5
//         this.setState(newState)
//     }
//     unhoverHandler(i) {
//         let newState = Object.assign({}, this.state)
//         newState.items[i].z = 1
//         this.setState(newState)
//     }
//
//     render() {
//         return (
//             <div>
//                 <p>Building on day 11's paper demo, here's a simple memory game</p>
//                 <h1>Correct pairs: {this.state.known.length}</h1>
//                 <h1>Incorrect pairs: {this.state.wrong}</h1>
//                 {this.state.items.map((item, i) => {
//                     let revealed = false
//                     let clicked = false
//                     if (this.state.revealAll) { revealed = true }
//                     if (this.state.clicked1 === i) { revealed = true; clicked = true }
//                     if (this.state.clicked2 === i) { revealed = true; clicked = true }
//                     if (this.state.known.includes(item.pair)) { revealed = true }
//
//
//                     return (
//                         <Card
//                             revealed={revealed}
//                             value={item.value}
//                             id={i} key={i}
//                             clicked={clicked}
//                             partner={item.pos === 0 ? i + 1 : i - 1}
//                             hoverHandler={this.hoverHandler}
//                             unhoverHandler={this.unhoverHandler}
//                             clickHandler={this.clickHandler}
//                             z={item.z}
//                         />
//                     )
//                 })}
//             </div>
//         )
//     }
// }
//
// const Card = props => {
//     return (
//         <Paper
//             key={props.id}
//             style={{
//                 height: 100,
//                 width: 100,
//                 margin: 20,
//                 textAlign: "center",
//                 display: "inline-block",
//                 backgroundColor: props.revealed ? `#${props.value}` : "#BDBDBD",
//                 borderColor: props.clicked && "#FFEA00",
//                 borderStyle: props.clicked && "solid",
//
//             }}
//             zDepth={props.z}
//             className="memory__card"
//             onMouseOver={() => props.hoverHandler(props.id)}
//             onMouseOut={() => props.unhoverHandler(props.id)}
//             onClick={() => props.clickHandler(props.id)}
//         />
//     )
// }
// Card.propTypes = {
//     revealed: PropTypes.bool.isRequired,
//     value: PropTypes.string.isRequired,
//     id: PropTypes.number.isRequired,
//     partner: PropTypes.number.isRequired,
//     hoverHandler: PropTypes.func.isRequired,
//     clickHandler: PropTypes.func.isRequired,
//     unhoverHandler: PropTypes.func.isRequired,
//     z: PropTypes.number.isRequired,
//     clicked: PropTypes.bool.isRequired,
// }
//
// export default Memory
