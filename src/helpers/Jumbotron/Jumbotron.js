import React from "react"
import PropTypes from "prop-types"
import hexToRgba from "../hexToRgba"
/*
Usage:

<Jumbotron
    component={<SomeComponent />}
    jumboInner="foo-class"
    image="/link-to-image.jpg"
    bgColor="#00796B"
    bgAlpha=0.5
/>
*/



const Jumbotron = props => {
    const image = props.image || false
    return (
        <div
            className="jumbotron-helper"
            style={{
                backgroundColor: hexToRgba(props.bgColor || "#00796B", props.bgAlpha || 0.5),
                color: props.color || "#FFFFFF"}}>
            {
                image
                ? <img
                    className={props.jumboImageClass || "jumbotron-image"}
                    src={props.image}
                    alt="jumbotron-background"/>
                : null
            }
            <div className={props.jumboInnerClass || "jumbotron-helper-inner"}>
                {props.component}
            </div>
        </div>
    )
}
Jumbotron.propTypes = {
    component: PropTypes.object.isRequired,
    jumboInnerClass: PropTypes.string,
    image: PropTypes.string,
    jumboImageClass: PropTypes.string,
    bgColor: PropTypes.string,
    color: PropTypes.string,
    image: PropTypes.string,
    bgAlpha: PropTypes.number,
}

export default Jumbotron