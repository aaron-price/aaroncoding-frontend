import React, { Component } from 'react'
import Head from '../../components/MockupHead.js'
import { initStore } from '../../redux/store'
import withRedux from 'next-redux-wrapper'
import { return_current_user } from '../../services/current_user.js'

const Nav = (props) => {
    return (
        <div className='floating_nav daily'>
            <div><a className='dailyui_navbtn' href='/projects'>My Projects</a></div>
            <div><a className='dailyui_navbtn' href='/about'>About Me</a></div>
        </div>
    )
}

const InputField = (props) => (
    <input
        className='daily_ui_signup_input'
        type={props.placeholder || 'text'}
        placeholder={props.placeholder} />
)

const TextAreaField = (props) => (
    <textarea
        className='daily_ui_signup_input textarea'
        placeholder={props.placeholder} />
)
const SubmitField = (props) => (
    <input
        className='daily_ui_signup_submit'
        type={'submit'}
        value={props.placeholder} />
)
const Challenge = (props) => {
    return (
        <div className='dailyui_signup_box_container'>
            <div className='dailyui_signup_box'>

                <div className='dailyui_signup_box_head'>
                    <h1 style={{color: '#DADADA'}}>Your adventure awaits!</h1>
                    <p>Sign up now for free access</p>
                </div>
                <div className='dailyui_signup_box_formdiv'>
                    <form className='dailyui_signup_box_form'>
                        <InputField placeholder='Name' />
                        <InputField placeholder='Email' />
                        <TextAreaField placeholder='Bio' />
                        <InputField placeholder='Password' type='password' />
                        <SubmitField placeholder='Join'/>
                    </form>
                </div>

            </div>
        </div>
    )
}
const Main = (props) => {
    return (
        <div>
        </div>
    )
}

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = { visible: false }
    }
    componentDidMount() {
        if (document) {
            this.setState({ visible: true })
            document.body.style.backgroundColor = '#000000'
        }
    }
    render() {
        if (!this.state.visible) { return <span></span> } else {
            return (
                <Head current_user={this.props.current_user}>
                    <div className='dailyui_reset'>
                        <div className='flex_container'>
                            <div
                                className='dailyui_signup_body'
                                style={{backgroundImage: "url('/static/forest.png')"}}>
                                <Nav></Nav>
                                <Challenge></Challenge>
                            </div>
                            <Nav />
                        </div>
                    </div>
                </Head>
            )
        }
    }
}
Signup.getInitialProps = async function(context) {
    return {
        current_user: await return_current_user(context),
    }
}
export default withRedux(initStore, null)(Signup)
