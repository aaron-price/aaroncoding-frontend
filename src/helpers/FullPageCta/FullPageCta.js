import React from "react"
import PropTypes from "prop-types"
import hexToRgba from "../hexToRgba"
/*
Usage:

<FullPageCta
    component={<SomeComponent />}
    image="/link-to-image.jpg"
    bgColor="#00796B"
    bgAlpha=0.5
/>
*/



const FullPageCta = props => {
    const image = props.image || false
    return (
        <div
            className="fullpagecta-helper"
            style={{
                backgroundColor: hexToRgba(props.bgColor || "#00796B", props.bgAlpha || 0.5),
                color: props.color || "#FFFFFF"}}>
            {
                image
                ? <img
                    className={props.fullpagectaInnerClass || "fullpagecta-image"}
                    src={props.image}
                    alt="fullpagecta-background"/>
                : null
            }
            <div className={props.fullpagectaImageClass || "fullpagecta-helper-inner"}>
                {props.component}
            </div>
        </div>
    )
}
FullPageCta.propTypes = {
    component: PropTypes.object.isRequired,
    fullpagectaInnerClass: PropTypes.string,
    image: PropTypes.string,
    fullpagectaImageClass: PropTypes.string,
    bgColor: PropTypes.string,
    color: PropTypes.string,
    bgAlpha: PropTypes.number,
}

export default FullPageCta