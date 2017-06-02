import PropTypes from "prop-types"
import React from "react"
import Slider from "material-ui/Slider"
import Paper from "material-ui/Paper"

const ApplyFilters = props => {
    return (
        <form>
            <Paper className="supply-demand-padded-paper">
                <h3>Apply Filters</h3>
                <div>
                    <div>Minimum Job Count ({props.state.jobs})</div>
                    <Slider
                        style={{width: "90%", display: "inline-block", marginLeft: 20}}
                        defaultValue={1}
                        min={1} max={200}
                        step={1}
                        onChange={(e, val) => props.changeHandler(e, "jobs", val)}
                    />
                </div>

                <div>
                    <div>Maximum Seeker Count ({props.state.seekers})</div>
                    <Slider
                        style={{width: "90%", display: "inline-block", marginLeft: 20}}
                        defaultValue={1500}
                        min={1} max={1500}
                        step={1}
                        onChange={(e, val) => props.changeHandler(e, "seekers", val)}
                    />
                </div>

                <div>
                    <div>Minimum Job to Seeker ratio ({props.state.JtoS})</div>
                    <Slider
                        style={{width: "90%", display: "inline-block", marginLeft: 20}}
                        defaultValue={0}
                        min={0} max={4.01}
                        step={0.01}
                        onChange={(e, val) => props.changeHandler(e, "JtoS", val)}
                    />
                </div>

                <div>
                    <div>Min Standard Deviation of Jobs count ({props.state.minJSTD})</div>
                    <Slider
                        style={{width: "90%", display: "inline-block", marginLeft: 20}}
                        defaultValue={0.01}
                        min={0.01} max={4}
                        step={0.01}
                        onChange={(e, val) => props.changeHandler(e, "minJSTD", val)}
                    />
                </div>

                <div>
                    <div>Max Standard Deviation of Job Seekers ({props.state.maxSStd})</div>
                    <Slider
                        style={{width: "90%", display: "inline-block", marginLeft: 20}}
                        defaultValue={100}
                        min={0.01} max={100}
                        step={0.01}
                        onChange={(e, val) => props.changeHandler(e, "maxSStd", val)}
                    />
                </div>
            </Paper>
        </form>
    )
}
ApplyFilters.propTypes = {
    state: PropTypes.object.isRequired,
    changeHandler: PropTypes.func.isRequired,
}

export default ApplyFilters