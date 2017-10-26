import Link from 'next/link'
import 'isomorphic-fetch'
import React, { Component } from 'react'
import Slider from 'material-ui/Slider'
import ReactPlayer from 'react-player'
import Paper from 'material-ui/Paper'
import { initStore } from '../../redux/store'
import withRedux from 'next-redux-wrapper'
import Head from '../../components/Head.js'


const parentStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'vertical',
}
import { return_current_user } from '../../services/current_user.js'

class About extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: null,
            playing: false,
            volume: 0.8,
            played: 0,
            loaded: 0,
            duration: 0,
            playbackRate: 1.0,
            pos: 0,
        }
        this.progress = this.progress.bind(this)
        this.seek = this.seek.bind(this)
        this.adjustVolume = this.adjustVolume.bind(this)
        this.adjustRate = this.adjustRate.bind(this)
    }
    load(url) {
        this.setState({
            url,
            played: 0,
            loaded: 0,
        })
    }
    play() {
        this.setState((prevState) => (
            {playing: !prevState.playing}
        ))
    }
    progress(t) {
        console.log(t)
        // Sometimes at the beginning, it's NaN. This fixes it.
        const secs = t.playedSeconds ? Math.floor(t.playedSeconds) : 0
        this.setState({pos: t.played, duration: secs})
    }
    seek(t) { this.setState({pos: this.refs.player.seekTo(t)}) }
    adjustVolume(volume) { this.setState({volume})}
    adjustRate(rate) {
        this.setState({playbackRate: rate})
    }
    render() {
        return (
            <Head current_user={this.props.current_user}>
                <div>
                    <h1>Video Player</h1>
                    <p>Just playing with the HTML video API, and the existing
                        <a href="https://github.com/CookPete/react-player"> react-player </a></p>
                    <ul className='videoplayer__ul'>
                        <li style={parentStyles}>
                            {/* Player */}
                            <ReactPlayer
                                ref="player"
                                className="videoplayer__video"
                                url="https://s3-us-west-2.amazonaws.com/aaroncoding/videos/Sample+Videos+(52)+-+Copy.mp4.mp4"
                                playing={this.state.playing}
                                onClick={() => this.play()}
                                onProgress={(e) => this.progress(e)}
                                volume={this.state.volume}
                                playbackRate={this.state.playbackRate}
                            />

                            {/* Volume */}
                            <Slider
                                style={{height: 100, display: 'inline-block', marginLeft: 20}}
                                defaultValue={this.state.volume}
                                axis="y"
                                min={0} max={1}
                                name="volume"
                                step={0.01}
                                onChange={(e, val) => this.adjustVolume(val)}
                            /> Volume
                        </li>

                        {/* Progress */}
                        <li><br />Time: {this.state.duration}<Slider
                            style={{width: '100%', display: 'inline-block', marginLeft: 20}}
                            value={this.state.pos}
                            min={0} max={1}
                            name="progress"
                            step={0.01}
                            onChange={(e, val) => this.seek(val)}
                        /></li>

                        {/* Rate */}
                        <li><br />Speed: {this.state.playbackRate}X<Slider
                            style={{width: '100%', display: 'inline-block', marginLeft: 20}}
                            value={this.state.playbackRate}
                            min={0.1} max={10}
                            name="progress"
                            step={0.01}
                            onChange={(e, val) => this.adjustRate(val)}
                        /></li>




                    </ul>

                </div>
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
