import React from "react"
import Paper from "material-ui/Paper"
import { TweenMax } from "gsap"

let items = [1,2,3,4,5,6,7]

class SlideList extends React.Component {
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
            <div className="slidelist__wrapper">
                <ul className="slidelist__ul">
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
        )
    }
}

export default SlideList