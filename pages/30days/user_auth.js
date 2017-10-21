import Link from 'next/link'
import 'isomorphic-fetch'
import React, { Component } from 'react'

import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'

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
								<h1>User Authentication</h1>
								<p className="about_text">The original project was an extremely
										minimalistic user auth system, which barely worked, and didn't maintain sessions.

										<br/><br/>I have since rebuilt the portfolio from the ground up using my
										scaffolding engine, ReactJo, which provides user auth. It took me much longer
										than 1 day to build that functionality into ReactJo, although
										it only takes a few minutes as the end user to use it. Call it even?

										<br/><br/>So here is the far more robust user auth system,
										provided by ReactJo. The backend app uses Django, and the
										frontend app uses NodeJS + React.<br/><br/>

										What it comes with:
								</p>
								<ul>
										<li>Microservice architecture (Django backend app + Node frontend app)</li>
										<li>User database model</li>
										<li>User cookie and token sessions</li>
										<li>User permissions</li>
										<li>User CRUD API</li>
										<li>User list and details pages</li>
										<li>Protection again CSRF attacks, SQL Injection attacks, and some XSS attacks</li>
								</ul>
								<RaisedButton href='/signup' label='Sign up'/><br /><hr/>
								<RaisedButton href='/login' label='Log in'/>
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
