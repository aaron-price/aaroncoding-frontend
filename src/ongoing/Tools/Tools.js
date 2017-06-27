import React from "react"
import Paper from "material-ui/Paper"
import { Link } from "react-router-dom"

const items = [
    {
        title: "Sweet Render",
        description: "An open source template engine sandbox. Can be used to create your own alternative syntax to React's 'JSX' syntax.",
        uri: "https://www.npmjs.com/package/sweet-render",
        image: "https://s3-us-west-2.amazonaws.com/aaroncoding/images/sweet_render.png",
    },{
        title: "Developer quiz",
        description: "A quiz I update constantly with questions ranging from html, css, javascript, sql, nosql, tdd/bdd, and more.",
        uri: "/quiz",
        image: "https://s3-us-west-2.amazonaws.com/aaroncoding/images/quiz.png",
    },{
        title: "Supply and demand",
        description: "I take a data driven approach to make myself as useful as possible to potential employers. Here's the developer supply:demand data I've collected.",
        uri: "/supply_and_demand",
        image: "https://s3-us-west-2.amazonaws.com/aaroncoding/images/supply_demand.png",
    },{
        title: "Stock validation",
        description: "I examine various stocks using criteria from Benjamin Graham, Warren Buffet, and check the piotroski f-score",
        uri: "/stocks",
        image: "https://s3-us-west-2.amazonaws.com/aaroncoding/images/stocks.jpg",
    },
]

class Tools extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hoveredId: -1}
    }
    hoverHandler(id = -1) { this.setState({hoveredId: id})}
    render() {
        return (
            <div>
                {items.map((item, key) => {
                    return (
                        <Paper
                            className="padded-paper tools-item"
                            onMouseOver={ () => this.hoverHandler(key) }
                            onMouseOut={ () => this.hoverHandler() }
                            zDepth={this.state.hoveredId === key ? 1 : 2}
                            key={key}
                        >
                            <a href={item.uri} className="tools-link">
                                <div className="tools-image-wrapper">
                                    <img alt={item.title} src={item.image} className="tools-image"/>
                                </div>
                                <div className="tools-text-wrapper">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </a>
                        </Paper>
                    )})}
            </div>
        )
    }
}

export default Tools