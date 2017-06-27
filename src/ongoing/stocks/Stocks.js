import React from "react"
import data from "./data"
const Stocks = props => {
    return (
        <div>
            <h3>Introduction</h3>
            <p>Today I got fed up with the existing stock screeners out there</p>
            <p>Basically, none of them do ALL the things I want them to do. I'm more of an old school value investor, which means I want to dive into the financial health of a company, and find a strong company at a good price... then buy and hold for as long as possible.</p>
            <p>So I decided to make my own stock screener. Originally I was building a webcrawler to automatically take information from existing sites.</p>
            <p>But then I realized that whatever company I take data from could sue me. Maybe. And buying the raw data itself is extremely expensive.</p>
            <p>So I downsized the project significantly.</p>

            <h3>Picks</h3>
            <ul>

            </ul>
        </div>
    )
}

module.exports = Stocks