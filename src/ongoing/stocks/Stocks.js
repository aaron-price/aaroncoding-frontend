import React from "react"
import data from "./data"
import Paper from "material-ui/Paper"

class Stocks extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            minF: 0,
        }
    }
    render() {
        return (
            <div>
                <h3>Introduction</h3>
                <p>Today I got fed up with the existing stock screeners out there</p>
                <p>Basically, none of them do ALL the things I want them to do. I'm more of an old school value investor, which means I want to dive into the financial health of a company, and find a strong company at a good price... then buy and hold for as long as possible.</p>
                <p>So I decided to make my own stock screener. Originally I was building a webcrawler to automatically take information from existing sites.</p>
                <p>But then I realized that whatever company I take data from could sue me. Maybe. And buying the raw data itself is extremely expensive.</p>
                <p>So I downsized the project significantly.</p>

                <h3>Picks</h3>
                <p>A lot of criteria is non-quantitative so it was ignored.</p>
                <ul>
                    {
                        data.sort((a,b) => a.grade < b.grade ? 1 : -1).map((d,key) => {
                            const goodF = "#4CAF50"
                            const midF = "#FFEB3B"
                            const badF = "#F44336"
                            let currentF = badF
                            if (d.f_score === 7) {currentF = midF}
                            if (d.f_score > 7) {currentF = goodF}
                            const style = {backgroundColor: currentF, margin: "1em"}

                            if (
                                d.f_score < this.state.minF ||
                                d.yield <= 1
                            ) {
                                return null
                            }

                            return (
                              <li>
                                  <Paper className="padded-paper" style={style}>
                                       <strong>${d.price} | {d.ticker}</strong>
                                       <br/>F-Score: {d.f_score} out of 9
                                       <br/>Ben Graham criteria: {d.ben} out of 7
                                       <br/>Warren Buffet criteria: {d.warren} out of 4
                                       <br/>Total Grade: {d.grade}%
                                       <br/>
                                       <br/>Yield {d.yield || "No dividends"}
                                       <br/>PEG {(d.peg).toFixed(2)}
                                       <br/>P/E {d.pe.toFixed(2)}
                                       <br/>EPS (Diluted, normalized) {d.eps[0]}
                                  </Paper>
                              </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

module.exports = Stocks