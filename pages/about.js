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

const HireMe = props => (
    <div>
        <Paper className='about_row'>
            <div className='about_img'>
                <Handshake />
            </div>
            <div className='about_textdiv'>
                <h4 className='about_header'>Hire Me</h4>
                <p>
                    Email: coding.aaronp@gmail.com <br/>
                    Phone: 778-835-4451<br/>
                    LinkedIn: <a href='https://www.linkedin.com/in/aaronjprice/'>Aaron J. Price</a><br/>
                    Github: <a href='https://github.com/aaron-price'>aaron-price</a></p>
                <p>Or fill out this form</p>
                <ContactForm className='about_contactform'/>
            </div>
        </Paper><br/>
    </div>
)

const EducationSnippet = props => (
    <div>
        <Paper className='about_row'>
            <div className='about_img'>
                <Education />
            </div>
            <div className='about_textdiv'>
                <h4 className='about_header'>Education</h4>
                <p>2010 - Certificate in web design and animation from <a href='https://www.ufv.ca/'>UFV</a>.</p>
            </div>
        </Paper><br/>
    </div>
)

const OSS = props => (
    <div>
        <Paper className='about_row'>
            <div className='about_img'>
                <Octocat />
            </div>
            <div className='about_textdiv'>
                <h4 className='about_header'>Open Source</h4>
                <p>According to GitHub, I made <a href='https://github.com/aaron-price/'><strong>over 2,500</strong> contributions</a> in the last year.</p>
                <p>A couple projects I created:</p>
                <ul className='unstyled_list'>
                    <li><hr/>
                        <br/>
                        <strong className='about_strong'>Thing a day</strong><br/>
                        <a href='https://aaroncoding.com/30days'>Check out this month of madness</a><br/><br/>
                        I challenged myself to start and finish one small project every day for a month.<br/><br/>
                        Some of my personal favourites from this series:<br/>
                        <a href='https://aaroncoding.com/30days/minesweeper'>Day 4: Minesweeper</a><br/>
                        <a href='https://aaroncoding.com/30days/story'>Day 17: Random Story Generator</a><br/>
                        <a href='https://aaroncoding.com/30days/line_graph'>Day 22: Handmade Animation Engine</a>
                        <br/><br/>
                    </li>
                    <li>
                        <strong className='about_strong'>ReactJo</strong><br/>
                        Links: <a href='https://pypi.org/project/reactjo/'>PIP</a> | <a href="https://github.com/aaron-price/reactjo">GitHub</a><br/><br/>
                        A tool for generating web apps. It asks you what you want, and walks you through everything you'll need to think about; then builds it for you. You could use it to make and launch a social network in an hour. Or a SaaS, e-commerce, forum, etc.<br/><br/>

                        This was my first python project, so it's a bit rough around the edges. I didn't even follow a python tutorial, I decided to wing it every step of the way, and the language is so easy that it worked out just fine.<br/><br/>

                        On a technical level, it creates two servers (one in python, another in javascript)<br/>
                        It implements material-ui, nextjs, react, and redux.<br/>
                        This portfolio site that you're looking at right now was built with with reactjo, so you can see how pretty it is.<br/>
                        This architecture means you could add more frontends in the future (like a mobile app)<br/>
                        It comes with user authentication and some nifty features for handling user permissions.<br/>
                        It comes with interactive model scaffolding, which I think is even better than how ruby on rails does it.
                    </li>
                    <li><hr/>
                        <br/>
                        <strong className='about_strong'>Sweet-Render</strong><br/>
                        Links: <a href='https://www.npmjs.com/package/sweet-render'>NPM</a> | <a href="https://github.com/aaron-price/sweet-render">GitHub</a><br/><br/>
                        A tool which lets you design your own templating language, and render it as HTML or React.<br />
                        You can even replace React's 'JSX' syntax with your own.
                        <br/><br/>
                        Probably not very useful. I built it because I was curious about how things worked under the hood.
                    </li>
                    <li><hr/>
                        <br/>
                        <strong className='about_strong'>console.dog()</strong><br/>
                        Links: <a href='https://www.npmjs.com/package/console-dog'>NPM</a> | <a href="https://github.com/aaron-price/console-dog">GitHub</a><br/><br/>
                        A bad pun, that was too good <strong><i>not</i></strong> to publish in an afternoon.
                        <br/><br/>
                        If you know javascript, this should make you groan.
                    </li>
                </ul>
            </div>
        </Paper><br/>
    </div>
)

const ProblemSolving = props => (
    <div>
        <Paper className='about_row'>
            <div className='about_img'>
                <Bug />
            </div>
            <div className='about_textdiv'>
                <h4 className='about_header'>Problem Solving</h4>
                <p>I used to do customer service - mostly tech support.</p>
                <p>During that 4.5 year period, I solved <strong>over 120,000</strong> cases.</p>
                <p>I was heavily involved in writing the tech support guidelines, and training other staff.</p>
                <p>Needless to say, I have developed a strong ability to troubleshoot and fix bugs.</p>
            </div>
        </Paper><br/>
    </div>
)

const TechStack = props => (
    <div>
        <Paper className='about_row'>
            <div className='about_img'>
                <Js />
            </div>
            <div className='about_textdiv'>
                <h4 className='about_header'>Technologies</h4>
                <p>Languages:</p>
                <Skill value={8.5}>Javascript</Skill>
                <Skill value={8}>HTML</Skill>
                <Skill value={7.5}>CSS / SCSS / postCSS</Skill>
                <Skill value={7}>Python</Skill>
                <Skill value={6.5}>Elixir</Skill>
                <br />

                <p>Frameworks:</p>
                <Skill value={9}>React</Skill>
                <Skill value={8}>Node</Skill>
                <Skill value={6.5}>Django</Skill>
                <Skill value={6}>Phoenix</Skill>
                <br />

            </div>
        </Paper><br/>
    </div>
)

const Backstory = props => (
    <div>
        <Paper className='about_row'>
            <div className='about_img'>
                <img src={smile} className='about_img__me' />
            </div>
            <div className='about_textdiv'>
                <h4 className='about_header'>My Backstory</h4>
                <p><strong className='about_strong'>Nerdy before it was cool.</strong></p>
                <p> I remember fiddling with hex codes
                    in my gameboy gameshark as a child, to hack pokemon (the original one).
                    And yes, I <i>did</i> catch them all.<br/><br/>
                    Then there was lego mindstorms which lets you build and program robots.
                    I did farm labour all summer to save up for it when I was 9 or 10. Totally worth it.</p>

                <p><strong className='about_strong'>University.</strong></p>
                <ol>
                    <li>I skipped a grade and went to university at age 17</li>
                    <li>I graduated right after the great recession decimated the job market</li>
                    <li>I did manual labour and tech support for the next several years, instead.</li>
                </ol>

                <p><strong className='about_strong'>Becoming a web developer.</strong></p>
                <p>August 2016 - I decided (again) to become a programmer at all costs.<br/><br/>
                    Aware that everything I knew was obsolete, I started re-teaching myself web development after work, and have learned or built something
                    pretty much every day, ever since.
                    <br/><br/>
                    At first, I mostly stuck to a Javascript stack (VanillaJS, NodeJS, React, Redux).
                    During that time I released my first open source npm library and built a portfolio site.
                </p>
                <p>
                    After about 10 months, I decided to branch out and try Django (Python's web framework)
                    but I didn't even know Python. Instead of following courses or books, I decided to just wing it
                    and build something.<br/><br/>

                    So my "Hello World" project in Python was a massive scaffolding engine which interactively
                    generates a site with a Django backend server and a Node frontend server rendering React,
                    with user authentication, and permissions built in by default. This whole portfolio was built using
                    that system!<br/><br/>
                </p>
                <p><strong className='about_strong'>Present</strong></p>
                <p>I now work as a freelance web dev, but I would love to find something full time.</p>
            </div>
        </Paper>
    </div>
)
const Text = (props) => (
    <div>
        <HireMe />
        <EducationSnippet />
        <OSS />
        <ProblemSolving />
        <TechStack />
        <Backstory /><br/>
        <HireMe />
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
