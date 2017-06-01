import React from "react"
import Paper from "material-ui/Paper"

const IntroText = props => {
    return (
        <Paper className="supply-demand-padded-paper">
            <p>This is the Job/supply data, collected from indeed.com. Note that it's not the data they give
            <a href="https://www.indeed.com/jobtrends"> <strong>here</strong> </a> which doesn't account for location, or absolute numbers.</p>
            <p> Instead, I did my own research, and these are the numbers for the last 7 days, within 50km of Vancouver, looking at the number of jobs
            and resumes matching each keyword.</p>
        </Paper>
    )
}

export default IntroText