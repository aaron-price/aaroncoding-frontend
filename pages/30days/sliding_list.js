import Link from 'next/link'
import 'isomorphic-fetch'
import React, { Component } from 'react'

import Paper from 'material-ui/Paper'
import { TweenMax } from "gsap"

import Head from '../../components/Head.js'
import { initStore } from '../../redux/store'
import withRedux from 'next-redux-wrapper'
import { return_current_user } from '../../services/current_user.js'

let items = [1,2,3,4,5,6,7]

class SlidingList extends Component {
		constructor(props) {
				super(props)
				this.state = {}
		}
		componentDidMount() {
        this.animate()
    }
    animate() {
        const ulBox = document.getElementsByClassName("slidelist__ul")[0]
                              .getBoundingClientRect()
        const ulRight = ulBox.right
        const ulOffset =  -1 * (ulRight * 2)

        const tl = TweenMax
        tl.staggerFrom(".slidelist__li", 2, {x: ulOffset}, 0.25)
    }
		render() {
				return (
						<Head current_user={this.props.current_user}>
								<h1>Sliding List</h1>
								<p className='about_text center_text'>Magic!</p>
								<div className="slidelist__wrapper">
										<ul className="slidelist__ul unstyled_list">
												{items.map(item =>
														<li
																key={item}
																className="slidelist__li"
																ref={`item${item}`}
														>
																<Paper className="slidelist__item">List item {item}</Paper>
																</li>
												)}
										</ul>
								</div>
						</Head>
				)
		}
}
SlidingList.getInitialProps = async function(context) {
		return {
				current_user: await return_current_user(context),
		}
}
export default withRedux(initStore, null)(SlidingList)
