import React from "react"
import PropTypes from "prop-types"
import Paper from "material-ui/Paper"

const DisplayItems = props => {
    return (
        <div>
            <Paper className="supply-demand-padded-paper">
                <h4>May 28th, 2017</h4>
                <div className="supply-demand-table">
                    {/* Generate Columns */}
                    {props.columns.map((col, key) => {
                        return (
                            <div key={key} className="supply-demand-col">
                                <div><strong onClick={e => props.changeHandler(e, "sortBy", col.field)}>{col.text}</strong></div>
                                {/* Generate Cells */}
                                {props.data.map((d,key) => {
                                    if (col.field === "name") {
                                        return (
                                            <div key={key}>
                                                <span onClick={e => props.disAllower(d.name)}
                                                      className="supply-demand-x"
                                                ><strong>X </strong></span>
                                                {d[col.field]}
                                            </div>
                                        )
                                    } else {
                                        return <div key={key}>{d[col.field]}</div>
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
}

export default DisplayItems