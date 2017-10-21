import Link from 'next/link'
import 'isomorphic-fetch'
import React, { Component } from 'react'

import Paper from 'material-ui/Paper'

import Head from '../../components/Head.js'
import { initStore } from '../../redux/store'
import withRedux from 'next-redux-wrapper'
import { return_current_user } from '../../services/current_user.js'

class MenuBar extends Component {
		constructor(props) {
				super(props)
				this.state = {}
		}
		render() {
				return (
						<Head current_user={this.props.current_user}>
								<div>
										<h1>Menu Bar</h1>
										You've been looking at it this whole time. It's up there ^
										<br/>That's what I built today.
										<br/> The old menu bar was... horrible. *shudders*
								</div>
						</Head>
				)
		}
}
MenuBar.getInitialProps = async function(context) {
		return {
				current_user: await return_current_user(context),
		}
}
export default withRedux(initStore, null)(MenuBar)
