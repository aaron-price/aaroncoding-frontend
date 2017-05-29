import React from "react"
import { TweenMax, Bounce, Sine, Elastic, Expo } from "gsap"
import Slider from "material-ui/Slider"
import Paper from "material-ui/Paper"
import may28 from "./data/may-28-2017"
import { between } from "../../helpers/Random"

class SupplyDemand extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            minJSTD: 0.001,
            maxSStd: 100,
            jobs: 1,
            seekers: 1000,
            JtoS: 0,
            sortBy: "handicappedJtoS",
            dirAsc: false,
            disallowed: [],
            columns: [
                {text: "Name", field: "name"},
                {text: "Jobs", field: "jobs"},
                {text: "Candidates", field: "seekers"},
                {text: "Jobs : Candidates ratio", field: "JtoS"},
            ],
            points: may28.map(d => {
                return {y: 50, bg: `${between(0,255)},${between(0,255)},${between(0,255)}`}
            }),
        }
        this.changeHandler = this.changeHandler.bind(this)
        this.disAllower = this.disAllower.bind(this)
        this.reAllow = this.reAllow.bind(this)
    }
    reAllow(val) {
        let newState = this.state.disallowed
        let index = newState.includes(val)
        this.setState({disallowed: newState.splice(index, 1)})
    }
    changeHandler(e, field, val) {
        console.log(field)
        let newState = Object.assign({}, this.state)
        newState[field] = val
        // if you're sorting, and already sorted that col, change direction
        if (field === "sortBy" && val === this.state.sortBy) {
            newState.dirAsc = !this.state.dirAsc
        }

        this.setState(newState)
    }
    disAllower(val) {
        let newState = this.state.disallowed
        newState.push(val)
        this.setState(prevState => ({disallowed: newState}))
    }

    render() {
        const graphHeight = may28.length * 18
        const data = may28.filter(d => {
            return !(
                d.JobStd < this.state.minJSTD ||
                d.SeekerStd > this.state.maxSStd ||
                d.jobs < this.state.jobs ||
                d.seekers > this.state.seekers ||
                d.JtoS < this.state.JtoS ||
                this.state.disallowed.includes(d.name)
            )
        }).sort((a,b) => {
            const field = this.state.sortBy
            const asc = this.state.dirAsc

            if (a[field] < b[field]) { return asc ? -1 : 1 }
            if (a[field] > b[field]) { return asc ? 1 : -1 }
            return 0
        })
        return (
            <div>
                <Paper className="supply-demand-padded-paper">This is the Job/supply data, collected from indeed.com. Note that it's not the data they give
                    <a href="https://www.indeed.com/jobtrends"> here </a>
                which doesn't account for location, absolute numbers, or (I think) date. Instead, I did my own research,
                    and these are the numbers for the last 7 days, within 50km of Vancouver, looking at the number of jobs
                    and resumes matching each keyword.
                </Paper>

                <form>
                    <Paper className="supply-demand-padded-paper">
                        <div>
                            <div>Minimum Job Count ({this.state.jobs})</div>
                            <Slider
                                style={{width: "90%", display: "inline-block", marginLeft: 20}}
                                defaultValue={1}
                                min={1} max={200}
                                step={1}
                                onChange={(e, val) => this.changeHandler(e, "jobs", val)}
                            />
                        </div>

                        <div>
                            <div>Maximum Seeker Count ({this.state.seekers})</div>
                            <Slider
                                style={{width: "90%", display: "inline-block", marginLeft: 20}}
                                defaultValue={100}
                                min={1} max={100}
                                step={1}
                                onChange={(e, val) => this.changeHandler(e, "seekers", val)}
                            />
                        </div>

                        <div>
                            <div>Minimum Job to Seeker ratio ({this.state.JtoS})</div>
                            <Slider
                                style={{width: "90%", display: "inline-block", marginLeft: 20}}
                                defaultValue={0}
                                min={0} max={4.01}
                                step={0.01}
                                onChange={(e, val) => this.changeHandler(e, "JtoS", val)}
                            />
                        </div>

                        <div>
                            <div>Min Standard Deviation of Jobs count ({this.state.minJSTD})</div>
                            <Slider
                                style={{width: "90%", display: "inline-block", marginLeft: 20}}
                                defaultValue={0.01}
                                min={0.01} max={4}
                                step={0.01}
                                onChange={(e, val) => this.changeHandler(e, "minJSTD", val)}
                            />
                        </div>

                        <div>
                            <div>Max Standard Deviation of Job Seekers ({this.state.maxSStd})</div>
                            <Slider
                                style={{width: "90%", display: "inline-block", marginLeft: 20}}
                                defaultValue={5}
                                min={0.01} max={5}
                                step={0.01}
                                onChange={(e, val) => this.changeHandler(e, "maxSStd", val)}
                            />
                        </div>


                    </Paper>
                </form>

                <Paper className="supply-demand-padded-paper">
                    <h4>May 28th, 2017</h4>
                    <div className="supply-demand-table">
                        {/* Generate Columns */}
                        {this.state.columns.map((col, key) => {
                            return (
                                <div key={key} className="supply-demand-col">
                                    <div><strong onClick={e => this.changeHandler(e, "sortBy", col.field)}>{col.text}</strong></div>
                                    {/* Generate Cells */}
                                    {data.map((d,key) => {
                                        if (col.field === "name") {
                                            return (
                                                <div key={key}>
                                                    <span onClick={e => this.disAllower(d.name)}
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
                <h4>{this.state.disallowed.length > 0 && "Disallowed"}</h4>
                <ul>{this.state.disallowed.map((d,i) => {
                    return <li className="supply-demand-x" key={i} onClick={e => this.reAllow(d)}>{d}</li>})
                }</ul>
            </div>
        )
    }
}

export default SupplyDemand