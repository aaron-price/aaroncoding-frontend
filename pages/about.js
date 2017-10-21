import Link from 'next/link'
import 'isomorphic-fetch'
import React, { Component } from 'react'

import Paper from 'material-ui/Paper'
import { initStore } from '../redux/store'
import withRedux from 'next-redux-wrapper'
import { CodeBlock, GreenText as Grn} from '../components/CodeBlocks'
import Header from '../components/Head'
import HoverPaper from '../components/HoverPaper'
import Head from '../components/Head.js'
import Education from '../components/images/Education.js'
import Octocat from '../components/images/Octocat.js'
import Bug from '../components/images/Bug.js'
import Js from '../components/images/JS.js'

import { return_current_user } from '../services/current_user.js'

const Text = (props) => (
		<div>

				<h1 className='center_text about_main_title--desktop'>Aaron Price - Web Developer</h1>
				<h1 className='center_text about_main_title--mobile'>Aaron Price,<br/>Web Developer</h1>
				<hr />
				<div>
						<Paper className='about_row'>
								<div className='about_img'>
										<Education />
								</div>
								<div className='about_textdiv'>
										<h4>Education</h4>
										<p>2010 - Certificate in web design and animation from <a href='https://www.ufv.ca/'>UFV</a>.</p>
										<p>But most of my programming skills are self-taught.</p>
								</div>
						</Paper><br/>
				</div>

				<div>
						<Paper className='about_row'>
								<div className='about_img'>
										<Octocat />
								</div>
								<div className='about_textdiv'>
										<h4>Open Source</h4>
										<p>According to GitHub, I made <a href='https://github.com/aaron-price/'><strong>over 2,000</strong> contributions</a> in the last year.</p>
										<p>My main projects:</p>
										<ul className='unstyled_list'>
												<li>[<a href='https://pypi.org/project/reactjo/'>PIP</a> | <a href="https://github.com/aaron-price/reactjo">GitHub</a>] <strong>ReactJo</strong>: A microservice scaffolding engine which generates React apps with User Auth and Model CRUD.</li>
												<li>[<a href='https://www.npmjs.com/package/sweet-render'>NPM</a> | <a href="https://github.com/aaron-price/sweet-render">GitHub</a>] <strong>Sweet-Render</strong>: A templating engine which can replace React's 'JSX' syntax.</li>
										</ul>
								</div>
						</Paper><br/>
				</div>

				<div>
						<Paper className='about_row'>
								<div className='about_img'>
										<Bug />
								</div>
								<div className='about_textdiv'>
										<h4>Problem Solving</h4>
										<p><strong>TLDR</strong>: I can troubleshoot almost any bug.</p>
										<p>I solved <strong>over 120,000 tech support cases</strong> across a 4.5 year timespan. That's not a typo, I was like a machine at that job.
										<br/><br/>I was also heavily involved in writing the tech support guidelines, and training other staff.</p>
										<p>Although I am no longer interested in support roles, the skills I gained have been transferrable, and invaluable.</p>
										<hr />
								</div>
						</Paper><br/>
				</div>

				<div>
						<Paper className='about_row'>
								<div className='about_img'>
										<Js />
								</div>
								<div className='about_textdiv'>
										<h4>Technologies</h4>
										<p>My <strong>primary</strong> language is Javascript.<br/>
										My <strong>secondary</strong> language is Python.<br/>
										</p>
										<p>This portfolio site uses the following microservice architecture:</p>
										<ul className='unstyled_list'>
												<li><strong>Frontend App</strong></li>
												<li>Javascript</li>
												<li>ReactJS</li>
												<li>NodeJS</li>
												<li>NextJS</li>
												<li>Redux</li>
												<li>SCSS, CSS, and postCSS</li>
												<li>SVG</li>
												<li>Material-UI</li>
												<li><br/></li>

												<li><strong>Backend App</strong></li>
												<li>Python</li>
												<li>Django</li>
												<li>Django REST Framework</li>
												<li>Postgresql</li>
												<li><br/></li>

												<li><strong>Misc</strong></li>
												<li>Amazon S2 file storage and CDN</li>
												<li>Heroku for hosting and infrastructure</li>
												<li>Browserstack for cross-platform testing</li>
										</ul>
								</div>
						</Paper><br/>
				</div>

		</div>
)

class About extends Component {
		constructor(props) {
				super(props)
				this.state = { hover_me: false, hover_prj: false }
				this.update_state = this.update_state.bind(this)
		}
		update_state(field, value) {
				this.setState({ [field]: value })
		}
		componentDidMount() {

		}
		render() {
				return (
						<Head current_user={this.props.current_user}>
								<div>
										<Text />
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
