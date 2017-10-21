import Link from 'next/link'
import 'isomorphic-fetch'
import React, { Component } from 'react'

import Paper from 'material-ui/Paper'
import Header from '../components/Head'
import HoverPaper from '../components/HoverPaper'
import FocusedHead from '../components/FocusedHead.js'
import { CodeBlock, GreenText as Grn} from '../components/CodeBlocks'
import List from '../components/Projects/List.js'
import { initStore } from '../redux/store'
import withRedux from 'next-redux-wrapper'

import { return_current_user } from '../services/current_user.js'

let surprise = "https://s3-us-west-2.amazonaws.com/aaroncoding/images/surprise-01+(1).png"
let smile = "https://s3-us-west-2.amazonaws.com/aaroncoding/images/smile-01+(1).png"
let logo = "https://s3-us-west-2.amazonaws.com/aaroncoding/images/logo/logo3-01+(1).png"
let reactjo1 = "https://s3-us-west-2.amazonaws.com/aaroncoding/images/buttons/projects2-01.png"
let reactjo2 = "https://s3-us-west-2.amazonaws.com/aaroncoding/images/buttons/projects-01.png"

const ImageComponent = (props) => (
		<img
				className={props.classes + ' ' + props.visible}
				src={props.src} />
)

class index extends Component {
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
						<FocusedHead current_user={this.props.current_user}>
								<div className="full_screen cyan" id="Home">
										<div className="full_screen__inner_wrapper">
												<Paper className="spa_logo_paper">
														<ImageComponent visible={''} classes="full_screen__logo_img" src={logo} />
												</Paper>
												<div className="choice_box">
														<HoverPaper classes="choice_box__item" href="#About">
																<div
																		onMouseOver={() => this.update_state('hover_me', true)}
																		onMouseOut={() => this.update_state('hover_me', false)}>
																		<h1 className="center_text choice_box__text">Learn About Me</h1>
																		<ImageComponent visible={!this.state.hover_me && 'invisible'} src={surprise} classes="choice_box__img smile"/>
																		<ImageComponent visible={this.state.hover_me && 'invisible'} src={smile} classes="choice_box__img smile"/>
																</div>
														</HoverPaper>

														<HoverPaper classes="choice_box__item" href="#Projects">
															<div
																	onMouseOver={() => this.update_state('hover_prj', true)}
																	onMouseOut={() => this.update_state('hover_prj', false)}>
																	<h1 className="center_text choice_box__text">Explore My Projects</h1>
																	<ImageComponent visible={!this.state.hover_prj && 'invisible'} src={reactjo1} classes="choice_box__img smile"/>
																	<ImageComponent visible={this.state.hover_prj && 'invisible'} src={reactjo2} classes="choice_box__img smile"/>
															</div>
														</HoverPaper>

												</div>
										</div>
								</div>
                <div className="full_screen blue" id="About">
                    <div className="full_screen_content">
                        <h1 className="about_header">Aaron Price - Web Developer</h1>
                        <hr />

                        <h4 className="about_header">Education</h4>
                        <p className='about_text'>2010 - Certificate in web design and animation from UFV.</p>
                        <hr />

                        <h4 className="about_header">Frontend UI / UX</h4>
                        <p className='quote_text'>Early 2000s: I started doodling with flash animation and games in high school.
                            Remember flash? Well, the tools might have changed, but I haven't.</p>
                            <p className='about_text'>
                                <strong>I once challenged myself to start and finish one small project, </strong><br />
                                UI/UX examples: <a>form_demo</a>,<a>hovers</a><br />
                                Animation examples: line graph, bar graph, sliding list<br />
                                Games: memory_game, minesweeper<br />
                            </p>

                            <p><strong>Frontend technology</strong></p>
                            <CodeBlock>
                                    HTML
                                    CSS, SASS, LESS, postCSS <br />
                                    Javascript
                                    ReactJS

                                    Created my own templating engine which can replace react's 'jsx' syntax.<br />
                                    This whole portfolio is built on React, including these 30 projects.<br />
                                    Comfortable with html, css, sass, less, postCSS, and more.<br />
                            </CodeBlock>
                        <hr />

                        <h4 className="about_header">Pro Troubleshooter</h4>
                        <p className='quote_text'>Over 4 years ago I asked my boss at the time if I could take a shot
                            at a tech support position. He said nobody had time to train me,
                            but I was welcome to dive in and figure it out myself.<br />
                            Within 2 weeks, he fired the entire existing tech support team and
                            put me in charge of rewriting the process and training a new
                            tech support team.</p>
                        <ul className='about_text'>
                            <li>Over 120,000 tech support cases under my belt. Not even exaggerating.</li>
                            <li>I can solve nearly any bug or problem I encounter.</li>
                        </ul>
                        <hr />

                        <h4 className="about_header">Backends, APIs, and Beyond</h4>
                        <p className='quote_text'>The summer of 2017: I wanted to learn Python, so I
                            used it to create an open-source, scaffolding engine for
                            microservice web applications.</p>
                        <p className='about_text'>
                            Most of my backend experience comes from <a>Reactjo</a>. It's my now
                            my stack of choice and powers both my portfolio, and it's own docs.</p>
                        <ul className='about_text'>
                            <li>A Python (Django) API server.</li>
                            <li>A NodeJS server to consume the API.</li>
                            <li>User authentication by default.</li>
                            <li>Custom database models with frontend CRUD operations.</li>
                            <li>All with a shiny ReactJS frontend, utilizing bootstrap and material-ui.</li>
                            <li>And the ability to generate extensions for itself so you can use other stacks</li>
                        </ul>
                        <hr />


                    </div>
                </div>
                <div className="full_screen cyan" id="Projects">
                    <List />
                </div>
						</FocusedHead>
				)
		}
}
index.getInitialProps = async function(context) {
		return {
				current_user: await return_current_user(context),
		}
}
export default withRedux(initStore, null)(index)
