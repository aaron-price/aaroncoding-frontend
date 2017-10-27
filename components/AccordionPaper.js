import Paper from 'material-ui/Paper'
import FlatButton from 'material-ui/FlatButton'
/*
Usage:
import AccordionPaper from './AccordionPaper'
...

<AccordionPaper
    title='string'
    slug='string'
    padding={true|false} // applies 1em padding
    hide_button='Hide'
    show_button='Show'>

    <p>Content goes here</p>

</AccordionPaper>

You can force it to open on command by passing two more props:
    force_open={true|false}
    unforce={this.unforce}
this.unforce can be a callback which changes the force_open value to false.
*/
class AccordionPaper extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: this.props.open || false,
            hover: false,
        }
        this.toggle = this.toggle.bind(this)
        this.force_open = this.force_open.bind(this)
    }
    toggle() {
        this.setState((prevState) => {
            return { open: !prevState.open }
        })
    }
    handle_hover() {
        this.setState({ hover: true })
    }
    handle_unhover() {
        this.setState({ hover: false })
    }
    force_open() {
        this.setState({ open: true })
        this.props.unforce()
    }
    render() {
        if (this.props.force_open) { this.force_open() }
        const hide_button = this.props.hide_button || 'Hide'
        const show_button = this.props.show_button || 'Show'
        let header_style = { cursor: 'pointer' }
        let children_style = {}
        if (this.props.padding) {
            header_style.padding = '1em'
            children_style.padding = '1em'
        }

        if (this.state.open) {
            return (
                <Paper zDepth={this.state.hover ? 2 : 1}>
                    <div className='accordion_paper__wrapper'
                        style={header_style}
                        onMouseOver={() => this.handle_hover()}
                        onMouseOut={() => this.handle_unhover()}
                        onClick={() => this.toggle()}>
                        <div className='center_text'><h3>{this.props.title}</h3></div>
                        <div className='center_text'>{this.props.slug}</div>
                        <div className='center_div'>
                            <p className='accordion_paper__hide'>{hide_button}</p>
                        </div>
                    </div>
                    <div style={children_style}>
                        {this.props.children}
                    </div>
                </Paper>
            )
        } else {
            return (
                <Paper
                    style={header_style}
                    zDepth={this.state.hover ? 2 : 1}
                    onMouseOver={() => this.handle_hover()}
                    onMouseOut={() => this.handle_unhover()}
                    onClick={() => this.toggle()}>
                    <div>
                        <div className='center_text'><h3>{this.props.title}</h3></div>
                        <div className='center_text'>{this.props.slug}</div>
                        <div className='center_div'>
                            <p className='accordion_paper__show'>{show_button}</p>
                        </div>
                    </div>
                </Paper>
            )
        }
    }
}

export default AccordionPaper