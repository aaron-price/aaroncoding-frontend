import React from "react"
import { TweenMax, Bounce, Sine, Elastic, Expo } from "gsap"
import Slider from "material-ui/Slider"
import Paper from "material-ui/Paper"
import may28 from "./data/may-28-2017"
import { between } from "../../helpers/Random"
const _ = require("lodash")
import SelectField from "material-ui/SelectField"
import MenuItem from "material-ui/MenuItem"
import PropTypes from "prop-types"
import ApplyFilters from "./ApplyFilters"
import CompareKeywords from "./CompareKeywords"
import DisplayItems from "./DisplayItems"
import IntroText from "./IntroText"

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
                <IntroText />
                <ApplyFilters state={this.state} changeHandler={this.changeHandler}/>
                <CompareKeywords
                    comparison1={this.state.comparison1}
                    comparison2={this.state.comparison2}
                    updateComparison1={this.updateComparison1}
                    updateComparison2={this.updateComparison2}
                    comp1={comp1}
                    comp2={comp2}
                    data={data}
                />
                <DisplayItems
                    columns={this.state.columns}
                    data={data}
                    changeHandler={this.changeHandler}
                    disAllower={this.disAllower}
                    disallowed={this.state.disallowed}
                    reAllow={this.reAllow}
                />
            </div>
        )
    }
}




export default SupplyDemand
