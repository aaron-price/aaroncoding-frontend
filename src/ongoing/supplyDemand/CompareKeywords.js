import Paper from "material-ui/Paper"
const _ = require("lodash")
import SelectField from "material-ui/SelectField"
import React from "react"
import MenuItem from "material-ui/MenuItem"
import PropTypes from "prop-types"

function bigName(name) {
    return <span><strong>{name.toUpperCase()}</strong></span>
}

const CompareKeywords = props => {
    const comp1 = props.comp1
    const comp2 = props.comp2

    return (
        <Paper  className="supply-demand-padded-paper">
            <h3>Compare two keywords</h3>
            <SelectField
                value={props.comparison1}
                onChange={props.updateComparison1}
                maxHeight={200}
              >
                {props.data.map((d, key) => {
                    return <MenuItem key={key} value={key} primaryText={d.name} />
                })}
              </SelectField>

            <SelectField
                value={props.comparison2}
                onChange={props.updateComparison2}
                maxHeight={200}
              >
                {props.data.map((d, key) => {
                    return <MenuItem key={key} value={key} primaryText={d.name} />
                })}
              </SelectField>
            {
                comp1.jobs < comp2.jobs
                ? <p>{bigName(comp2.name)} has {bigName(_.round(comp2.jobs / comp1.jobs, 2).toString())}
                    &nbsp;times more job posts than {bigName(comp1.name)}</p>
                : <p>{bigName(comp1.name)} has {bigName(_.round(comp1.jobs / comp2.jobs, 2).toString())}
                    &nbsp;times more job posts than {bigName(comp2.name)}</p>
            }{
                comp1.seekers < comp2.seekers
                ? <p>{comp2.jobs > comp1.jobs && "but "}{bigName(comp2.name)}
                    &nbsp;has {bigName(_.round(comp2.seekers / comp1.seekers, 2).toString())}
                    &nbsp;times more competition than {bigName(comp1.name)}</p>
                : <p>{comp1.jobs > comp2.jobs && "but "}{bigName(comp1.name)}
                    &nbsp;has {bigName(_.round(comp1.seekers / comp2.seekers, 2).toString())}
                    &nbsp;times more competition than {bigName(comp2.name)}</p>
            }
                <p>All else equal,&nbsp;
            {
                comp1.JtoS < comp2.JtoS
                ? <span>{bigName(comp2.name)} has {bigName(_.round(comp2.JtoS / comp1.JtoS, 2).toString())}
                    &nbsp;times better job prospects than {bigName(comp1.name)}</span>
                : <span>{bigName(comp1.name)} has {bigName(_.round(comp1.JtoS / comp2.JtoS, 2).toString())}
                    &nbsp;times better job prospects than {bigName(comp2.name)}</span>
            }   </p>
                </Paper>
    )
}
CompareKeywords.propTypes = {
    comparison1: PropTypes.number.isRequired,
    comparison2: PropTypes.number.isRequired,
    comp1: PropTypes.object.isRequired,
    comp2: PropTypes.object.isRequired,
    updateComparison1: PropTypes.func.isRequired,
    updateComparison2: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired,
}

export default CompareKeywords