/**
 * Created by aaronp on 2017-04-28.
 */
import React from "react"

const Hovers = props => {
    return (
        <div>
            <h1>Hovers</h1>
            <p> Hover over buttons to see cool CSS effects (ok, actually it was SCSS...)</p>

            <h4>Shadows</h4>
            <button className="hovers__shadow1">shadow shrink</button>
            <button className="hovers__shadow2">shadow grow</button>
            <button className="hovers__shadow3">shadow inner</button>

            <h4>Underlines</h4>
            <button className="hovers__underline1">Left to Right</button>
            <button className="hovers__underline4">Right to Left</button>
            <button className="hovers__underline3">Middle to Sides</button>

            <h4>Slides</h4>
            <button className="hovers__colour1">Left to Right</button>
            <button className="hovers__colour4">Right to Left</button>
            <button className="hovers__colour5">Bottom to Top</button>
            <button className="hovers__colour6">Top to Bottom</button>
            <button className="hovers__colour2">Middle to Top and Bottom</button>
            <button className="hovers__colour3">Middle to Sides</button>
            <section></section>




        </div>
    )
}

export default Hovers