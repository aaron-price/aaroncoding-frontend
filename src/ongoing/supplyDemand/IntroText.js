import React from "react"
import Paper from "material-ui/Paper"

const IntroText = props => {
    return (
        <Paper className="supply-demand-padded-paper">
            <p>This is the Job:Supply data, collected from indeed.com. Note that it's not the data they give
            <a href="https://www.indeed.com/jobtrends"> <strong>here</strong> </a> which doesn't account for location, or absolute numbers.</p>
            <p>Instead, I did my own research, and these are the numbers for the last 30 days, within 50km of Vancouver, looking at the number of jobs
            and resumes matching each keyword.</p>
            <p><strong>Update:</strong> I decided to automate this and build a web crawler - which worked. But it lead me to read their robots.txt, which disables crawlers. I realize now they probably don't like people doing this even manually, so out of respect, I'm not collecting any more data moving forward.</p>
        </Paper>
    )
}

export default IntroText
