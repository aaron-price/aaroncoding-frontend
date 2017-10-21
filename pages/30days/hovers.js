import Link from 'next/link'
import 'isomorphic-fetch'
import React, { Component } from 'react'

import Paper from 'material-ui/Paper'

import Head from '../../components/Head.js'
import { initStore } from '../../redux/store'
import withRedux from 'next-redux-wrapper'
import { return_current_user } from '../../services/current_user.js'

class About extends Component {
		constructor(props) {
				super(props)
				this.state = {}
		}
		render() {
				return (
						<Head current_user={this.props.current_user}>
							<div>
									<h1>Hovers</h1>
									<p> Hover over buttons to see cool CSS effects (ok, actually it was SCSS...)
									<br/> Inspired by 'Hover.css'</p>

									<h4>Shadows</h4>
									<button className="hovers__shadow1">shadow shrink</button>
									<button className="hovers__shadow2">shadow grow</button>
									<button className="hovers__shadow3">shadow inner</button>

									<h4>Underlines</h4>
									<button className="hovers__underline1">Left to Right</button>
									<button className="hovers__underline4">Right to Left</button>
									<button className="hovers__underline3">Middle to Sides</button>

									<h4>Slides</h4>
									<button className="hovers__colour1">Left to Right</button>
									<button className="hovers__colour4">Right to Left</button>
									<button className="hovers__colour5">Bottom to Top</button>
									<button className="hovers__colour6">Top to Bottom</button>
									<button className="hovers__colour2">Middle to Top and Bottom</button>
									<button className="hovers__colour3">Middle to Sides</button>
									<section></section>

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
