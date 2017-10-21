import Link from 'next/link'
import 'isomorphic-fetch'
import React, { Component } from 'react'
// import Hammer from "hammerjs"

import Paper from 'material-ui/Paper'

import Head from '../../components/Head.js'
import { initStore } from '../../redux/store'
import withRedux from 'next-redux-wrapper'
import { return_current_user } from '../../services/current_user.js'

function linkBuilder(name) {
    return `https://s3-us-west-2.amazonaws.com/aaroncoding/images/${name}.jpg`
}
const names = ["Bay", "Puffin", "Fox", "Kittens", "Lake"]


class LightboxContainer extends Component {
	constructor(props) {
			super(props)
			const imagesArray = names.map(name => {
					return {
							full: linkBuilder(name),
							thumb: linkBuilder("thumb" + name),
							alt: name,
					}
			})
			this.state = {
					images: imagesArray,
					current: Math.floor(imagesArray.length / 2),
					overlay: false,
			}
			this.updateCurrent = this.updateCurrent.bind(this)
			this.toggleOverlay = this.toggleOverlay.bind(this)
			this.keyHandler = this.keyHandler.bind(this)
	}
	updateCurrent(id) {
			this.setState({current: id})
	}
	toggleOverlay() {
			this.setState((prevState) => {
					return { overlay: !prevState.overlay }
			})
	}
	keyHandler(e) {
			let adjuster
			console.log(e)

			// Arrow keys
			if (e.keyCode === 39 && this.state.current !== this.state.images.length - 1) { adjuster = 1 }
			else if (e.keyCode === 37 && this.state.current !== 0) { adjuster = -1 }

			// Swipes
			else if (e === "swipeleft" && this.state.current !== this.state.images.length - 1) { adjuster = 1 }
			else if (e === "swiperight" && this.state.current !== 0) { adjuster = -1 }

			else { return }
			this.setState((prevState) => {
					return { current: prevState.current + adjuster }
			})
	}
	componentDidMount() {
			const Hammer = require('hammerjs')
			window.addEventListener("keydown", this.keyHandler, false)

			let myElement = document.getElementsByClassName("lightbox__container")[0]
			const mc = new Hammer(myElement)
			let kh = this.keyHandler
			mc.on("swipeleft swiperight", e => kh(e.type))
	}
		render() {
				return (
						<Head current_user={this.props.current_user}>
								<div className="lightbox__container">
                    <h1>Lightbox</h1>
										<p>My first crack at building a lightbox. You know the drill, click things, and magic happens.</p>
										<p>Arrow keys and swiping are also valid ways to navigate here.</p>

										<Thumbs
												images={this.state.images}
												current={this.state.current}
												toggle={this.toggleOverlay}
												updateCurrent={this.updateCurrent} />

										{/* Only render the FullImg if the overlay is active */}
										{this.state.overlay && <FullImg
												image={this.state.images[this.state.current]}
												overlay={this.state.overlay}
												toggle={this.toggleOverlay} />}
								</div>
						</Head>
				)
		}
}
LightboxContainer.getInitialProps = async function(context) {
		return {
				current_user: await return_current_user(context),
		}
}
export default withRedux(initStore, null)(LightboxContainer)

const Thumbs = props => {
    return (
        <ul className="lightbox__thumbs-ul">{props.images.map((image, key) => {
            return (
                <li key={key}
                    onClick={() => {
                        props.updateCurrent(key)
                        props.toggle()
                    }}
                    onMouseOver={() => props.updateCurrent(key)}
                    className="lightbox__thumbs-li"
                >
                    <img
                        className={`lightbox__thumb${props.current === key ? "--selected" : "--unselected"}`}
                        src={image.thumb}
                        alt={image.alt}
                    />
                </li>
            )}
        )}</ul>
    )
}

const FullImg = props => {
    return (
        <div className="lightbox__overlay" onClick={() => props.toggle()}>
            <img className="lightbox__full" src={props.image.full} alt={props.image.alt} />
        </div>
    )
}
