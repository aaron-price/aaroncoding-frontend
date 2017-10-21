import Link from 'next/link'
import 'isomorphic-fetch'
import React, { Component } from 'react'
import {Motion, spring} from 'react-motion'

import Paper from 'material-ui/Paper'
import Header from '../components/Head'
import HoverPaper from '../components/HoverPaper'
import FocusedHead from '../components/FocusedHead.js'
import Logo from '../components/Logo.js'
import { initStore } from '../redux/store'
import withRedux from 'next-redux-wrapper'
import { return_current_user } from '../services/current_user.js'
import { TweenMax, Bounce, Sine, Elastic, Expo } from "gsap"

let surprise = "https://s3-us-west-2.amazonaws.com/aaroncoding/images/surprise-01+(1).png"
let smile = "https://s3-us-west-2.amazonaws.com/aaroncoding/images/smile-01+(1).png"
let logo = "https://s3-us-west-2.amazonaws.com/aaroncoding/images/logo/logo3-01+(1).png"
let reactjo1 = 'https://s3-us-west-2.amazonaws.com/aaroncoding/images/jslogo.png'
let reactjo2 = 'https://s3-us-west-2.amazonaws.com/aaroncoding/images/buttons/React.png'
// let reactjo1 = "https://s3-us-west-2.amazonaws.com/aaroncoding/images/buttons/projects2-01.png"
// let reactjo2 = "https://s3-us-west-2.amazonaws.com/aaroncoding/images/buttons/projects-01.png"

const ImageComponent = (props) => (
		<img
				className={props.classes + ' ' + props.visible}
				src={props.src} />
)

class index extends Component {
		constructor(props) {
				super(props)
				this.state = { hover_me: false, hover_prj: false, visible: false }
				this.update_state = this.update_state.bind(this)
		}
		update_state(field, value) {
				this.setState({ [field]: value })
		}
		componentDidMount() {
			const tl = TweenMax
			let about = this.refs.about
			// let projects = this.refs.projects
			this.setState({visible: true})
			tl.staggerFrom(about, 1.8, {opacity: 0, ease: Sine.easeOut}, 0)        
			// tl.staggerFrom(projects, 1.8, {opacity: 0, ease: Sine.easeOut}, 0)
		}
		render() {
				return (
						<FocusedHead current_user={this.props.current_user}>
								<div className="full_screen light_cyan">
										<div className="full_screen__inner_wrapper">
												<Paper className="full_screen__header">
														{/*<ImageComponent visible={''} classes="full_screen__logo_img" src={logo} />*/}
														<Logo />
												</Paper>
												<div className="choice_box" style={this.state.visible ? {} : {display: 'none'}}>
														<Motion defaultStyle={{margin: 100}} style={{margin: spring(0, {stiffness:100, damping: 50})}}>
															 {value => (
																 <HoverPaper style={{marginLeft: `-${value.margin}vw`}} ref='about' classes="choice_box__item" href="/about">
																	<div
																		onMouseOver={() => this.update_state('hover_me', true)}
																		onMouseOut={() => this.update_state('hover_me', false)}>
																		<h1 className="center_text choice_box__text">Learn About Me</h1>
																		<ImageComponent visible={!this.state.hover_me && 'invisible'} src={surprise} classes="choice_box__img smile"/>
																		<ImageComponent visible={this.state.hover_me && 'invisible'} src={smile} classes="choice_box__img smile"/>
																	</div>
																</HoverPaper>
															)}
														</Motion>

														<Motion defaultStyle={{margin: 100}} style={{margin: spring(0, {stiffness:100, damping: 50})}}>
															{value => (
																<HoverPaper style={{marginRight: `-${value.margin}vw`}} classes="choice_box__item" href="/projects">
																	<div
																			onMouseOver={() => this.update_state('hover_prj', true)}
																			onMouseOut={() => this.update_state('hover_prj', false)}>
																			<h1 className="center_text choice_box__text">Explore My Projects</h1>
																			<ImageComponent visible={!this.state.hover_prj && 'invisible'} src={reactjo1} classes="choice_box__img smile"/>
																			<ImageComponent visible={this.state.hover_prj && 'invisible'} src={reactjo2} classes="choice_box__img smile"/>
																	</div>
																</HoverPaper>
															)}
														</Motion>
														

												</div>
										</div>
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
