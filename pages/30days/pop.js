import Link from 'next/link'
import 'isomorphic-fetch'
import React, { Component } from 'react'

import Paper from 'material-ui/Paper'
import FloatingActionButton from 'material-ui/FloatingActionButton'

import Head from '../../components/Head.js'
import HoverPaper from '../../components/HoverPaper.js'
import { initStore } from '../../redux/store'
import withRedux from 'next-redux-wrapper'
import { return_current_user } from '../../services/current_user.js'

class Walkthrough extends Component {
		constructor(props) {
				super(props)
				this.state = {
						active_key: -1,
						passive_size: 15,
						active_size: 15,
						items: ['red', 'blue', 'green', 'dogs', 'cats', 'fish']
				}
		}
		disappear() {
				let ticker = setInterval(() => {
						this.setState((prevState) => {
								return {
										active_size: prevState.active_size - 1
								}
						})
						if (this.state.active_size <= 0) {
								clearInterval(ticker)
								this.setState(prevState => {
										let items = prevState.items
										items.splice(prevState.active_key, 1)
										return {items, active_key: -1}
								})
						}
				}, 50)
		}
		clickHandler(k) {
				this.setState(prevState => {
						return {
								active_key: k,
								active_size: 15,
						}
				})
				this.disappear()
		}
		render() {
				return (
						<Head current_user={this.props.current_user}>
								<h1>Bubble Popping</h1>
								<p className='about_text'>Click on something, and watch it vanish. Just like me! That's all folks,
										I hope you enjoyed my daily project.</p>
								{this.state.items.map((option, key) => {
										let size = this.state.active_key === key
												? this.state.active_size
												: this.state.passive_size
										if(size <= 4) {
												return <span key={key}></span>
										} else {
												let fontSize = (size / 3) + 'vmin'
												size = size + 'vmin'
												return (
														<FloatingActionButton
																style={{
																		margin: '1em',
																		width: size,
																		height: size,
																}}
																iconStyle={{
																	width: size,
																	height: size,
																	fontSize,
																	color: '#FFFFFF'
																}}
																onClick={() => this.clickHandler(key)}
																key={key}
																secondary={true}>
																		{option}
														</FloatingActionButton>
												)
										}
								})}
						</Head>
				)
		}
}
Walkthrough.getInitialProps = async function(context) {
		return {
				current_user: await return_current_user(context),
		}
}
export default withRedux(initStore, null)(Walkthrough)
