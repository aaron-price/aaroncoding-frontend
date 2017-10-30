import Link from 'next/link'
import 'isomorphic-fetch'
import React, { Component } from 'react'

import Paper from 'material-ui/Paper'

import Head from '../../components/Head.js'
import HoverPaper from '../../components/HoverPaper.js'
import { CodeBlock } from '../../components/CodeBlocks.js'
import { initStore } from '../../redux/store'
import withRedux from 'next-redux-wrapper'
import { return_current_user } from '../../services/current_user.js'

const DroppableContainer = (props) => (
    <Paper
        style={{backgroundColor: '#F0F4C3'}}
        className='dd_container1'
        onDrop={(event) => props.drop(event)}
        onDragOver={(event) => props.allowDrop(event)}>
    </Paper>
)

class CreateElement extends Component {
    constructor(props) {
        super(props)
        this.state = {
            container1_hover: false,
            container2_hover: false,
            obj_hover: false,
        }
        this.allowDrop = this.allowDrop.bind(this)
        this.drag = this.drag.bind(this)
        this.drop = this.drop.bind(this)
        this.hover = this.hover.bind(this)
        this.unhover = this.unhover.bind(this)
    }
    allowDrop(ev) {
        ev.preventDefault()
    }
    hover(e) {
        this.setState({[e]: true})
    }
    unhover(e) {
        this.setState({[e]: false})
    }
    drag(ev) {
        ev.dataTransfer.setData('text', ev.target.id)
    }
    drop(ev) {
        ev.preventDefault()
        let data = ev.dataTransfer.getData('text')
        ev.target.appendChild(document.getElementById(data))
    }
    render() {
        let ids = []
        for(let i = 0; i < 100; i++) {
            ids.push(i)
        }
        return (
            <Head
                description='A react drag and drop demo.'
                current_user={this.props.current_user}>
                <h1>Drag and Drop</h1>
                <p>Go ahead and move that green tile around</p>
                <p>Unfortunately this one won't work on most mobile devices</p>
                <div className='dd_root'>
                    <Paper
                        style={{backgroundColor: '#F0F4C3'}}
                        className='dd_container1'
                        onDrop={(event)=>this.drop(event)}
                        onDragOver={(event)=>this.allowDrop(event)}>

                        <Paper
                            style={{backgroundColor: '#7CB342'}}
                            className='dd_obj'
                            draggable='true'
                            id="drag1"
                            zDepth={this.state.obj_hover ? 3 : 1}
                            onMouseOver={() => this.hover('obj_hover')}
                            onMouseOut={() => this.unhover('obj_hover')}
                            onDragStart={(event)=>this.drag(event)}>
                        </Paper>
                    </Paper>
                    {ids.map((i, k) => {
                        return <DroppableContainer i={i} key={k} drop={this.drop} allowDrop={this.allowDrop} />
                    })}
                </div>
            </Head>
        )
    }
}
CreateElement.getInitialProps = async function(context) {
    return {
        current_user: await return_current_user(context),
    }
}
export default withRedux(initStore, null)(CreateElement)
