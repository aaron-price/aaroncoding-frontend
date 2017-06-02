import React from "react"
import PropTypes from "prop-types"
import Paper from "material-ui/Paper"

const hoveredStyle = {backgroundColor: "#FFFF00"}

const DisplayItems = props => {
    const hovered = props.hovered
    return (
        <div>
            <Paper className="supply-demand-padded-paper">
                <div className="supply-demand-table" onMouseOut={props.unHoverHandler}>
                    {/* Generate Columns */}
                    {props.columns.map((col, key) => {
                        return (
                            <div key={key} className="supply-demand-col">
                                <div><strong
                                    style={{cursor: "pointer"}}
                                    onClick={e => props.changeHandler(e, "sortBy", col.field)}>
                                    {col.text}
                                </strong></div>
                                {/* Generate Cells */}

                                {props.data.map((d,key) => {
                                    if (col.field === "name") {
                                        return (
                                            <div
                                                key={key}
                                                onMouseOver={e => props.hoverHandler(key)}
                                                style={hovered === key ? hoveredStyle : {}}>
                                                <span onClick={e => props.disAllower(d.name)}
                                                      className="supply-demand-x"
                                                ><strong>X </strong></span>
                                                {d[col.field]}
                                            </div>
                                        )
                                    } else {
                                        return (
                                            <div
                                                key={key}
                                                onMouseOver={e => props.hoverHandler(key)}
                                                style={hovered === key ? hoveredStyle : {}}>
                                                {d[col.field]}
                                            </div>
                                        )
                                    }
                                })}

                            </div>
                        )
                    })}

                </div>

            </Paper>
            <h4>{props.disallowed.length > 0 && "Disallowed"}</h4>
            <ul>{props.disallowed.map((d,i) => {
                return <li className="supply-demand-x" key={i} onClick={e => props.reAllow(d)}>{d}</li>})
            }</ul>
        </div>
    )
}
DisplayItems.propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    changeHandler: PropTypes.func.isRequired,
    disAllower: PropTypes.func.isRequired,
    disallowed: PropTypes.array.isRequired,
    reAllow: PropTypes.func.isRequired,
    hovered: PropTypes.number.isRequired,
    hoverHandler: PropTypes.func.isRequired,
    unHoverHandler: PropTypes.func.isRequired,
}

export default DisplayItems