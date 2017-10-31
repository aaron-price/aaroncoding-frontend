import Link from 'next/link'
import 'isomorphic-fetch'
import React, { Component } from 'react'

import Paper from 'material-ui/Paper'
import { initStore } from '../redux/store'
import withRedux from 'next-redux-wrapper'
import { CodeBlock, GreenText as Grn} from '../components/CodeBlocks'
import Header from '../components/Head'
import HoverPaper from '../components/HoverPaper'
import Head from '../components/Head.js'
import Logo from '../components/Logo'
import ContactForm from '../components/ContactForm.js'
import Education from '../components/images/Education.js'
import Skill from '../components/Skill.js'
import Octocat from '../components/images/Octocat.js'
import Handshake from '../components/images/Handshake.js'
import Bug from '../components/images/Bug.js'
import Js from '../components/images/JS.js'


import { return_current_user } from '../services/current_user.js'
let smile = 'https://s3-us-west-2.amazonaws.com/aaroncoding/images/me_square.jpg'

const Text = (props) => (
    <div>
        <div>
            <Paper className='about_row'>
                <div className='about_img'>
                    <Handshake />
                </div>
                <div className='about_textdiv'>
                    <h4>Hire Me</h4>
                    <p>Email: coding.aaronp@gmail.com <br/>
                                    Phone: 604-996-8835</p>
                    <p>Or fill out this form</p>
                    <ContactForm className='about_contactform'/>
                </div>
            </Paper><br/>
        </div>

        <div>
            <Paper className='about_row'>
                <div className='about_img'>
                    <Education />
                </div>
                <div className='about_textdiv'>
                    <h4>Education</h4>
                    <p>2010 - Certificate in web design and animation from <a href='https://www.ufv.ca/'>UFV</a>.</p>
                </div>
            </Paper><br/>
        </div>

        <div>
            <Paper className='about_row'>
                <div className='about_img'>
                    <Octocat />
                </div>
                <div className='about_textdiv'>
                    <h4>Open Source</h4>
                    <p>According to GitHub, I made <a href='https://github.com/aaron-price/'><strong>over 2,000</strong> contributions</a> in the last year.</p>
                    <p>My main projects:</p>
                    <ul className='unstyled_list'>
                        <li>[<a href='https://pypi.org/project/reactjo/'>PIP</a> | <a href="https://github.com/aaron-price/reactjo">GitHub</a>] <strong>ReactJo</strong>: A microservice scaffolding engine which generates React apps with User Auth and Model CRUD.</li>
                        <li>[<a href='https://www.npmjs.com/package/sweet-render'>NPM</a> | <a href="https://github.com/aaron-price/sweet-render">GitHub</a>] <strong>Sweet-Render</strong>: A templating engine which can replace React's 'JSX' syntax.</li>
                    </ul>
                </div>
            </Paper><br/>
        </div>

        <div>
            <Paper className='about_row'>
                <div className='about_img'>
                    <Bug />
                </div>
                <div className='about_textdiv'>
                    <h4>Problem Solving</h4>
                    <p>I used to do customer service - mostly tech support.</p>
                    <p>During that 4.5 year period, I solved <strong>over 120,000</strong> cases.</p>
                    <p>I was heavily involved in writing the tech support guidelines, and training other staff.</p>
                    <p>Although I am no longer interested in support roles, the skills I gained have been transferrable, 
											and invaluable when it comes to troubleshooting and fixing bugs.</p>
                </div>
            </Paper><br/>
        </div>

        <div>
            <Paper className='about_row'>
                <div className='about_img'>
                    <Js />
                </div>
                <div className='about_textdiv'>
                    <h4>Technologies</h4>
                    <p>Languages:</p>
                    <Skill value={8.5}>Javascript</Skill>
                    <Skill value={8}>HTML</Skill>
                    <Skill value={7.5}>CSS / SCSS / postCSS</Skill>
                    <Skill value={6.5}>Python</Skill>
                    <br />

                    <p>Frameworks:</p>
                    <Skill value={9}>React</Skill>
                    <Skill value={7}>Node</Skill>
                    <Skill value={6}>Django</Skill>
                    <br />

                    <p>Other:</p>
                    <Skill value={8.5}>Problem Solving</Skill>
                    <Skill value={7.5}>UI / UX</Skill>
                    <Skill value={7}>Microservices / APIs / AJAX</Skill>
                    <Skill value={7}>Design</Skill>
                </div>
            </Paper><br/>
        </div>
        <div>
            <Paper className='about_row'>
                <div className='about_img'>
                    <img src={smile} className='about_img__me' />
                </div>
                <div className='about_textdiv'>
                    <h4>My Backstory</h4>
                    <p><strong>Nerdy before it was cool.</strong></p>
                    <p> I remember fiddling with hex codes
                        in my gameboy gameshark as a child, to hack pokemon (the original one).
                        And yes, I <i>did</i> catch them all.<br/><br/>
                        Then there was lego mindstorms which lets you build and program robots.
                        I did farm labour all summer to save up for it when I was 9 or 10. Totally worth it.</p>

                    <p><strong>University.</strong></p>
                    <ol>
                        <li>I skipped a grade and went to university at age 17</li>
                        <li>The great recession decimated the job market</li>
                        <li>I graduated and couldn't get into the industry</li>
                        <li>I did manual labour and tech support for the next several years</li>
                    </ol>

                    <p><strong>Becoming a web developer.</strong></p>
                    <p>August 2016 - I decided to become a web developer, at all costs.
                        So I started teaching myself after work, and have learned or built something
                        pretty much every day, ever since.
                        <br/><br/>
                        At first, I mostly stuck to a Javascript stack (VanillaJS, NodeJS, React, Redux).
                        During that time I released my first open source npm library and built a portfolio site.
                    </p>
                    <p>
                        After about 10 months, I decided to branch out and try Django (Python's web framework)
                        but I didn't even know Python. Instead of following courses or books, I decided to just wing it
                        and build something.<br/><br/>
                        So my first project in Python was a simple command line tool to make Django sites with a ReactJS frontend.<br/>
                        This grew into the massive project it is today which generates
                        a site with a Django backend app and a Node frontend app, rendering React,
                        with user authentication, permissions, and feature rich scaffolding.
                    </p>
                    <p>October 2017 - I rebuilt my portfolio site using my scaffolding engine and started job hunting.</p>
                </div>
            </Paper>
        </div><br/>


    </div>
)

class About extends Component {
    constructor(props) {
        super(props)
        this.state = { hover_me: false, hover_prj: false }
        this.update_state = this.update_state.bind(this)
    }
    update_state(field, value) {
        this.setState({ [field]: value })
    }
    componentDidMount() {

    }
    render() {
        return (
            <Head
                description='Learn about, and hire, Aaron Price.'
                current_user={this.props.current_user}>
                <div>
                    <Text />
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
