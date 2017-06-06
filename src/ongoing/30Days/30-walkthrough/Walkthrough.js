import React from "react"
import Paper from "material-ui/Paper"
import Proptypes from "prop-types"
import isMobile from "ismobilejs"

class Walkthrough extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pos: 100,
            step: [{text: "", x: 0, y: 0}],
        }
        this.stepper = this.stepper.bind(this)
    }
    componentDidMount() {
        const menuBox = document.getElementsByClassName("header")[0].getBoundingClientRect()
        const p1Box = document.getElementsByClassName("walkthrough__p1")[0].getBoundingClientRect()
        const p3Box = document.getElementsByClassName("walkthrough__p3")[0].getBoundingClientRect()
        this.setState(prevState => (
            {
                pos: 0,
                step: [
                    { text: "Hello! This is a tutorial walkthrough (demo)", y: 150, x: 150},
                    { text: "This is a menu.", side: "up", y: menuBox.bottom, x: menuBox.left + (menuBox.width / 2), el: "header"},
                    { text: "This paragraph doesn't make any sense to me", y: p1Box.bottom, x: p1Box.left, el: "walkthrough__p1"},
                    { text: "I can also highlight things below, or wherever", y: p3Box.top - 21, x: p3Box.left, el: "walkthrough__p3" },
                ],
            }
        ))
    }
    stepper() {
        const currEl = this.state.step[this.state.pos].el
        currEl && overlayUnhole(document.getElementsByClassName(currEl)[0])
        this.setState((prevState) => ({ pos: prevState.pos + 1 }))
    }
    render() {
        return (
            <div>
                <Page />
                {
                    this.state.pos < this.state.step.length &&
                        <Popup
                            stepper={this.stepper}
                            step={this.state.step[this.state.pos]}/>
                }
            </div>
        )
    }
}

const Popup = props => {
    return (
        <div>
            <div className="walkthrough__overlay"></div>
            {props.step.el && overlayHole(document.getElementsByClassName(props.step.el)[0])}
            <div>pointer</div>
            <Paper
                className="walkthrough__popup"
                onClick={e => props.stepper()}
                style={{
                    position: "absolute",
                    zIndex: 70,
                    padding: "2em",
                    top: props.step.y,
                    left: props.step.x,
                }}>{props.step.text}</Paper>
        </div>
    )
}
Popup.propTypes = {
    stepper: Proptypes.func.isRequired,
    step: Proptypes.object.isRequired,
}

function overlayHole(el) {
    el.style.zIndex = (Number(el.style.zIndex) + 60).toString()
    el.style.position = "relative"
    el.style.color = "#FFF"
}
function overlayUnhole(el) {
    el.style.zIndex = 0
    el.style.position = "static"
    el.style.color = "#000"
}

const Page = props => {
    return (
        <div className={`walkthrough__text-container--${isMobile.any ? "mobile" : "desktop"}`}>
            <p className="walkthrough__p1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultricies justo nec tincidunt volutpat. In hac habitasse platea dictumst. Vestibulum suscipit velit est, non varius felis ultrices sit amet. Aliquam fringilla mauris eu urna bibendum pharetra. Nunc at tellus venenatis, congue mi ut, tristique ante. Sed quis blandit quam. Donec nec libero vitae metus dapibus euismod. Donec rutrum ante et est sagittis consequat. Integer tincidunt gravida est sit amet porttitor.</p>
            <p className="walkthrough__p2">Proin vestibulum justo lectus, eu mollis augue egestas ac. Sed vehicula ligula orci, in lobortis justo fringilla et. Fusce blandit malesuada aliquet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas aliquam hendrerit maximus. Praesent tempor tortor a ex lobortis aliquam. Donec vulputate tellus in quam commodo, id varius augue bibendum. Aenean nec neque justo. Nulla malesuada a ante id auctor. Nulla faucibus nunc ac quam convallis, vitae consequat lacus auctor. Vestibulum lectus magna, pharetra in pulvinar ac, congue id urna. Cras ut aliquam purus, vel placerat turpis. Integer eleifend mi eget tortor consequat, at hendrerit tellus dignissim.</p>
            <p className="walkthrough__p3">Phasellus luctus quam in magna fringilla efficitur. Aliquam convallis consectetur pulvinar. Duis porttitor id dolor ut aliquam. Quisque ultricies neque eget fringilla cursus. Proin a ultrices risus. Morbi rutrum nisl leo, at rhoncus quam lacinia ut. Donec bibendum vel mauris at vulputate. Curabitur varius molestie eleifend. Vestibulum eu elit sit amet dui aliquet finibus. Nunc eu enim id lorem hendrerit dapibus. Phasellus in sollicitudin nunc.</p>
        </div>
    )
}

export default Walkthrough