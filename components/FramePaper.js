import React, { Component } from 'react'
import 'isomorphic-fetch'
import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'

// Takes '100vw', returns { number: 100, unit: 'vw' }
function strip_unit(val) {
    if (typeof val === 'string') {
        let number = ''
        let unit = ''
        for (let i = 0; i < val.length; i++) {
            const isNum = !isNaN(val.charAt(i))
            if (isNum) {
                number += val.charAt(i)
            } else {
                unit += val.charAt(i)
            }
        }
        number = Number(number)
        return { number, unit }
    }
}
const FrameContainer = (props) => {
    let style = {
        width: props.width,
        height: props.height,
        margin: props.margin,
        transition: 'all 0.5s ease-out',
    }
    return <div className={props.className} style={style}>{props.children}</div>
}

class FramePaper extends Component {
    constructor(props) {
        super(props)
        let w = this.props.width
        let h = this.props.height
        this.state = {
            width: w ? strip_unit(w).number : 100,
            w_unit: w ? strip_unit(w).unit : 'px',
            height: h ? strip_unit(h).number : 100,
            h_unit: h ? strip_unit(h).unit : 'px',
            dir: this.props.dir ? this.props.dir : 'vertical',
            selection: 0,
        }
        let st = this.state
        this.props.frames.forEach((frame, key) => {
            if (st.dir === 'vertical') {
                st[`margin${key}`] = ((key * -1) * st.height) + st.h_unit
            } else {
                st[`margin${key}`] = ((key * -1) * st.width) + st.w_unit
            }
        })
        this.strip_unit = strip_unit
        this.handle_next_click = this.handle_next_click.bind(this)
        this.handle_prev_click = this.handle_prev_click.bind(this)
    }
    handle_next_click() {
        this.setState((prevState) => {
            if (prevState.selection < this.props.frames.length - 1) {
                return { selection: prevState.selection + 1 }
            } else {
                return { }
            }
        })
    }
    handle_prev_click() {
        this.setState((prevState) => {
            if (prevState.selection > 0) {
                return { selection: prevState.selection - 1 }
            } else {
                return { }
            }
        })
    }
    render() {
        const Overlay = this.props.overlay ? this.props.overlay : () => <span></span>
        return (
            <div className='framepaper' style={{
                width: this.props.width,
                height: this.props.height,
                overflow: 'hidden'
            }}>
                <Overlay
                    next_button={this.handle_next_click}
                    prev_button={this.handle_prev_click} />

                {this.props.frames.map((Frame, key) => {
                    let margin = '0'
                    if (key === 0) {
                        // Add a margin
                        margin = `${this.state[`margin${this.state.selection}`]} 0 0 0`
                    }
                    return (
                        <FrameContainer
                            key={key}
                            width={this.props.width}
                            height={this.props.height}
                            margin={margin}
                            className={`framepaper_child${key}`}>
                            <Frame />
                        </FrameContainer>
                    )
                })}
            </div>
        )
    }
}

FramePaper.propTypes = {
    frames: PropTypes.array.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
}

export default FramePaper