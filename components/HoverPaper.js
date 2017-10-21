import { Component } from 'react'
import Paper from 'material-ui/Paper'

class HoverPaper extends Component {
    constructor(props) {
        super(props)
        this.state = { hover: false }
        this.update_hover = this.update_hover.bind(this)
    }
    update_hover(value) {
        this.setState({ hover: value })
    }
    click() {
       // @TODO
    }
    render() {
        let max_z = !!this.props.max ? this.props.max : 5
        let classes = !!this.props.classes ? this.props.classes : ""
        let href = this.props.href
        let style = this.props.style || {}
        return (
            <Paper
                onMouseOver={() => this.update_hover(true)}
                onMouseOut={() => this.update_hover(false)}
                onClick={() => this.click()}
                className={classes}
                style={style}
                zDepth={this.state.hover ? max_z : 1}>
                    {href ? (
                            <a href={href} className="stealth_link">
                                {this.props.children}
                            </a>
                        ) : (
                            this.props.children
                        )
                    }

            </Paper>
        )
    }
}
export default HoverPaper
