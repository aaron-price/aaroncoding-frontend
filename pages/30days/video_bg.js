import Link from 'next/link'
import 'isomorphic-fetch'
import React, { Component } from 'react'

import Paper from 'material-ui/Paper'

import Head from '../../components/Head.js'
import { initStore } from '../../redux/store'
import withRedux from 'next-redux-wrapper'
import { return_current_user } from '../../services/current_user.js'

class About extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <Head
                description='A demo of a video background.'
                body_middle_style={{backgroundColor: 'rgba(255,255,255, 0)'}}
                current_user={this.props.current_user}>

                <div className='VidBG__outer_div'>
                    <Paper className="VidBG__text">
                        <h1>Video Background</h1>
                        <p>Stored on amazon s3, delivered by their CDN</p><br/>
                    </Paper>
                    <div className="VidBG__overlay"></div>
                </div>
                <video
                    ref="player"
                    className="VidBG__video"
                    autoPlay={true}
                    muted={true}
                    loop={true} >
                    <source src="https://s3-us-west-2.amazonaws.com/aaroncoding/videos/bigCalendar.3gp"/>
                    <source src="https://s3-us-west-2.amazonaws.com/aaroncoding/videos/bigCalendar.mp4" type="video/mp4"/>
                    <source src="https://s3-us-west-2.amazonaws.com/aaroncoding/videos/bigCalendar.ogv" type="video/ogg"/>
                    <source src="https://s3-us-west-2.amazonaws.com/aaroncoding/videos/bigCalendar.webm" type="video/webm"/>
                </video>
            </Head>
        )
    }
}
About.getInitialProps = async function(context) {
    return {
        current_user: await return_current_user(context),
    }
}
export default withRedux(initStore, null)(About)
