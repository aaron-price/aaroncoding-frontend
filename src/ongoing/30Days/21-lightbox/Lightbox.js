import React from "react"
import PropTypes from "prop-types"
import Hammer from "hammerjs"

function linkBuilder(name) {
    return `https://s3-us-west-2.amazonaws.com/aaroncoding/images/${name}.jpg`
}
const names = ["Bay", "Puffin", "Fox", "Kittens", "Lake"]

export default class LightboxContainer extends React.Component {
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
        window.addEventListener("keydown", this.keyHandler, false)

        let myElement = document.getElementsByClassName("lightbox__container")[0]
        const mc = new Hammer(myElement)
        let kh = this.keyHandler
        mc.on("swipeleft swiperight", e => kh(e.type))
    }

    render() {
        return (
            <div className="lightbox__container">
                <h4>My first crack at building a lightbox. You know the drill, click things, and magic happens.</h4>
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
        )
    }
}

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
Thumbs.propTypes = {
    images: PropTypes.array.isRequired,
    current: PropTypes.number.isRequired,
    updateCurrent: PropTypes.func.isRequired,
    toggle: PropTypes.func.isRequired,
}

const FullImg = props => {
    return (
        <div className="lightbox__overlay" onClick={() => props.toggle()}>
            <img className="lightbox__full" src={props.image.full} alt={props.image.alt} />
        </div>
    )
}
FullImg.propTypes = {
    image: PropTypes.object.isRequired,
    overlay: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
}