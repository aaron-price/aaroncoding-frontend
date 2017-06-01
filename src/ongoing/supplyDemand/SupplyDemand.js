import React from "react"
import { TweenMax, Bounce, Sine, Elastic, Expo } from "gsap"
import Slider from "material-ui/Slider"
import Paper from "material-ui/Paper"
import may28 from "./data/may-28-2017"
import { between } from "../../helpers/Random"
const _ = require("lodash")
import SelectField from "material-ui/SelectField"
import MenuItem from "material-ui/MenuItem"

function bigName(name) {
    return <span><strong>{name.toUpperCase()}</strong></span>
}

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
            comparison1: 0,
            comparison2: 1,
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
        this.updateComparison1 = this.updateComparison1.bind(this)
        this.updateComparison2 = this.updateComparison2.bind(this)
    }
    reAllow(val) {
        let newState = this.state.disallowed
        let index = newState.includes(val)
        this.setState({disallowed: newState.splice(index, 1)})
    }
    changeHandler(e, field, val) {
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
    updateComparison1(e, index) { this.setState({comparison1: index}) }
    updateComparison2(e, index) { this.setState({comparison2: index}) }

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
        const comp1 = data[this.state.comparison1]
        const comp2 = data[this.state.comparison2]
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
                        <h3>Apply Filters</h3>
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

                <Paper  className="supply-demand-padded-paper">
                    <h3>Compare two keywords</h3>
                    <SelectField
                        value={this.state.comparison1}
                        onChange={this.updateComparison1}
                        maxHeight={200}
                      >
                        {data.map((d, key) => {
                            return <MenuItem key={key} value={key} primaryText={d.name} />
                        })}
                      </SelectField>

                    <SelectField
                        value={this.state.comparison2}
                        onChange={this.updateComparison2}
                        maxHeight={200}
                      >
                        {data.map((d, key) => {
                            return <MenuItem key={key} value={key} primaryText={d.name} />
                        })}
                      </SelectField>
                        /*
                            if the one with higher jobs ALSO has higher cand, then "but"
                        */
                    {
                        comp1.jobs < comp2.jobs
                        ? <p>{bigName(comp2.name)} has {bigName(_.round(comp2.jobs / comp1.jobs, 2).toString())} times more job posts than {bigName(comp1.name)}</p>
                        : <p>{bigName(comp1.name)} has {bigName(_.round(comp1.jobs / comp2.jobs, 2).toString())} times more job posts than {bigName(comp2.name)}</p>
                    }{
                        comp1.seekers < comp2.seekers
                        ? <p>{comp2.jobs > comp1.jobs && "but "}{bigName(comp2.name)} has {bigName(_.round(comp2.seekers / comp1.seekers, 2).toString())} times more competition than {bigName(comp1.name)}</p>
                        : <p>{comp1.jobs > comp2.jobs && "but "}{bigName(comp1.name)} has {bigName(_.round(comp1.seekers / comp2.seekers, 2).toString())} times more competition than {bigName(comp2.name)}</p>
                    }
                        <p>All else equal,&nbsp;
                    {
                        comp1.JtoS < comp2.JtoS
                        ? <span>{bigName(comp2.name)} has {bigName(_.round(comp2.JtoS / comp1.JtoS, 2).toString())} times better job prospects than {bigName(comp1.name)}</span>
                        : <span>{bigName(comp1.name)} has {bigName(_.round(comp1.JtoS / comp2.JtoS, 2).toString())} times better job prospects than {bigName(comp2.name)}</span>
                    }   </p>
                </Paper>

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
