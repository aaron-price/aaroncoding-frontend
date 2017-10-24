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
import List from '../components/Projects/List.js'

import { return_current_user } from '../services/current_user.js'

const tags = {
    'animation': { title: 'Animation', visibility: 'show' },
    'api': { title: 'API', visibility: 'show' },
    'back': { title: 'Backend', visibility: 'show' },
    'day': { title: 'Built in 1 day', visibility: 'show' },
    'django': { title: 'Django', visibility: 'show' },
    'front': { title: 'Frontend', visibility: 'show' },
    'game': { title: 'Game', visibility: 'show' },
    'html': { title: 'HTML', visibility: 'show' },
    'js': { title: 'Javascript', visibility: 'show' },
    'mockup': { title: 'Mockup', visibility: 'show' },
    'node': { title: 'NodeJS', visibility: 'show' },
    'oss': { title: 'Open Source', visibility: 'show' },
    'python': { title: 'Python', visibility: 'show' },
    'react': { title: 'ReactJS', visibility: 'show' },
    'sass': { title: 'CSS, SASS, and postCSS', visibility: 'show' },
    'svg': { title: 'SVG', visibility: 'show' },
}
const big_projects = [
    {
        title: 'ReactJo Scaffolding Engine',
        description: 'Spin up microservice react apps in minutes',
        href: 'https://www.reactjo.com',
        tags: [
            tags.api, tags.back, tags.django, tags.front, tags.js, tags.node,
            tags.oss, tags.python, tags.react, tags.sass
        ],
    },
    {
        title: 'Sweet Render',
        description: 'A templating engine which can replace React\'s JSX syntax.',
        href: 'https://www.npmjs.com/package/sweet-render',
        tags: [
            tags.front, tags.html, tags.js, tags.oss, tags.react
        ],
    },
]
const mockups = []
const micro_projects = [
    {
        title: 'Day 1: Accordion',
        description: 'A simple js accordion.',
        href: '/30days/accordion',
        tags: [
            tags.day, tags.front, tags.html, tags.js
        ],
    },{
        title: 'Day 2: Drag and Drop',
        description: 'Literal pixel pushing.',
        href: '/30days/drag_drop',
        tags: [
            tags.day, tags.front, tags.html, tags.js, tags.react
        ],
    },{
        title: 'Day 3: Collision',
        description: 'Today I made some responsive collision detection.',
        href: '/30days/collision',
        tags: [
            tags.animation, tags.day, tags.front, tags.js, tags.react
        ],
    },{
        title: 'Day 4: Minesweeper',
        description: 'A nostalgic game from my youth.',
        href: '/30days/minesweeper',
        tags: [
            tags.day, tags.front, tags.game, tags.js, tags.svg
        ],
    },{
        title: 'Day 5: Zipper',
        description: 'A whimsical animation.',
        href: '/30days/zipper',
        tags: [
            tags.animation, tags.day, tags.front, tags.js, tags.svg
        ],
    },
    {
        title: 'Day 6: Hovers',
        description: 'A demo of several button hover-effects.',
        href: '/30days/hovers',
        tags: [
            tags.animation, tags.day, tags.front, tags.react, tags.sass
        ],
    },
    {
        title: 'Day 7: Redux menu colour',
        description: 'Change the menu colour using redux.',
        href: '/30days/menu_colours',
        tags: [
            tags.day, tags.front, tags.sass, tags.js, tags.react
        ],
    },
    {
        title: 'Day 8: Animated Gears',
        description: 'They just keep spinning, and spinning, and spinning...',
        href: '/30days/gears',
        tags: [
            tags.animation, tags.day, tags.front, tags.sass, tags.js, tags.react
        ],
    },
    {
        title: 'Day 9: Filter Settings',
        description: 'Adjust the available list of projects.',
        href: '#filters',
        tags: [
            tags.day, tags.front, tags.js, tags.react,
        ],
    },
    {
        title: 'Day 10: Cross origin API and Ajax',
        description: 'Today I made two servers.',
        href: '/30days/api',
        tags: [
            tags.day, tags.back, tags.js, tags.node, tags.api
        ],
    },
    {
        title: 'Day 11: Higher-Order Components',
        description: 'A simple demo of HOC in React.',
        href: '/30days/higher_order',
        tags: [
            tags.day, tags.front, tags.js, tags.react
        ],
    },
    {
        title: 'Day 12: Loading Bar',
        description: 'A simple loading bar.',
        href: '/30days/loading',
        tags: [
            tags.animation, tags.day, tags.front, tags.js, tags.react, tags.sass
        ],
    },
    {
        title: 'Day 13: Memory Game',
        description: 'Uh... I don\'t remember what I was going to put here.',
        href: '/30days/memory',
        tags: [
            tags.animation, tags.day, tags.front, tags.js, tags.react
        ],
    },
    {
        title: 'Day 14: Dynamic Search',
        description: 'A search bar that updates the results as you type.',
        href: '/30days/search',
        tags: [
            tags.day, tags.front, tags.js, tags.react
        ],
    },
    {
        title: 'Day 15: Menu Bar',
        description: 'A responsive, material-ui, menu bar.',
        href: '/30days/menubar',
        tags: [
            tags.day, tags.front, tags.html, tags.js, tags.react, tags.sass, tags.html
        ],
    },
    {
        title: 'Day 16: Form Demo',
        description: 'A Form with a preview panel.',
        href: '/30days/forms',
        tags: [
            tags.day, tags.front, tags.html, tags.js, tags.react
        ],
    },
    {
        title: 'Day 17: Random Story Generator',
        description: 'I give you a starting point, you fill in the blanks!',
        href: '/30days/story',
        tags: [
            tags.day, tags.js, tags.react
        ],
    },
    {
        title: 'Day 18: User Authentication',
        description: 'I create a simple signup / login / logout system.',
        href: '/30days/user_auth',
        tags: [
            tags.day, tags.back, tags.js, tags.html, tags.react, tags.node, tags.api
        ],
    },
    {
        title: 'Day 19: Chat App',
        description: 'A quick sketch of how a chat application might look.',
        href: '/30days/chat_app',
        tags: [
            tags.day, tags.front, tags.js, tags.react,
        ],
    },
    {
        title: 'Day 20: Animated Bar Graph',
        description: 'An endlessly animated bar graph.',
        href: '/30days/bar_graph',
        tags: [
            tags.animation, tags.day, tags.front, tags.js, tags.react, tags.svg
        ],
    },
    {
        title: 'Day 21: Lightbox',
        description: 'Click a thumbnail, get a full size. Navigate with arrows.',
        href: '/30days/lightbox',
        tags: [
            tags.day, tags.front, tags.js, tags.react,
        ],
    },
    {
        title: 'Day 22: Animated Line Graph',
        description: 'Today I built an animation engine from scratch.',
        href: '/30days/line_graph',
        tags: [
            tags.animation, tags.day, tags.front, tags.js, tags.react,
        ],
    },
    {
        title: 'Day 23: Video Player',
        description: 'Today I played with the <video> api.',
        href: '/30days/video',
        tags: [
            tags.day, tags.front, tags.html, tags.js
        ],
    },
    {
        title: 'Day 24: Email Integration',
        description: 'Today I wired up a form to Sendgrid\'s SMTP api.',
        href: '/30days/email',
        tags: [
            tags.day, tags.back, tags.js, tags.react, tags.html
        ],
    },
    {
        title: 'Day 25: HTTPS and Custom Domain',
        description: 'Today, my portfolio became https://aaroncoding.com.',
        href: '/30days/https',
        tags: [
            tags.day, tags.back,
        ],
    },
    {
        title: 'Day 26: Video Background',
        description: 'Today I created a video background.',
        href: '/30days/video_bg',
        tags: [
            tags.day, tags.front, tags.js, tags.react, tags.html
        ],
    },
    {
        title: 'Day 27: Sliding List',
        description: 'Weeeeeeeeeeeeee...',
        href: '/30days/sliding_list',
        tags: [
            tags.day, tags.front, tags.js, tags.react, tags.html
        ],
    },
    {
        title: 'Day 28: Stranger Logos',
        description: 'An animated logo, straight out of the fake 1980\'s',
        href: '/30days/stranger_logos',
        tags: [
            tags.animation, tags.day, tags.front, tags.js, tags.react
        ],
    },
    {
        title: 'Day 29: Parallax',
        description: 'A screensave-like animation',
        href: '/30days/parallax',
        tags: [
            tags.animation, tags.day, tags.front, tags.js, tags.react
        ],
    },
    {
        title: 'Day 30: Bubble popping',
        description: 'Click on things to make them shrink and vanish.',
        href: '/30days/pop',
        tags: [
            tags.day, tags.front, tags.js, tags.react
        ],
    },
]

class Projects extends Component {
		constructor(props) {
				super(props)
				this.state = {
            tags,
            micro_projects,
            big_projects,
            show_filters: false,
        }
        this.filter = this.filter.bind(this)
        this.handle_input = this.handle_input.bind(this)
        this.update_all = this.update_all.bind(this)
        this.update_state = this.update_state.bind(this)
        this.toggle_filters = this.toggle_filters.bind(this)
		}
    toggle_filters() {
      this.setState(prevState => ({show_filters: !prevState.show_filters}))
    }
		update_state(field, value) {
				this.setState({ [field]: value })
		}
    update_all(value) {
        let new_tags = Object.keys(this.state.tags).map(tag => {
            tag = this.state.tags[tag]
            tag.visibility = value
            return tag
        })
        this.setState({tags: new_tags})
        this.controller()
    }
    handle_input(tag, value) {
        let new_state = Object.assign({}, this.state)
        new_state.tags[tag].visibility = value
        this.setState(new_state)
        this.controller()
    }
		controller() {
        let new_big = big_projects.filter(this.filter)
        let new_micro = micro_projects.filter(this.filter)
        this.setState({
            big_projects: new_big,
            micro_projects: new_micro,
        })
    }
    filter(prj) {
        let required = []
        let show = []
        let hide = []
        Object.keys(this.state.tags).forEach(tag => {
            let vis = this.state.tags[tag].visibility
            if (vis === 'required') { required.push(this.state.tags[tag].title) }
            else if (vis === 'show'){ show.push(this.state.tags[tag].title) }
            else if (vis === 'hide'){ hide.push(this.state.tags[tag].title) }
        })
        // Check required if necessary
        if (required.length !== 0) {
            for (let i = 0; i < required.length; i++) {
                let tag = required[i]
                let prj_tags = prj.tags.map(tag => tag.title)
                let require_tag = prj_tags.indexOf(tag) !== -1
                if (!require_tag) {
                    // A required tag is missing. Don't allow.
                    return false
                    break
                }
            }
        }

        // Check Disallowed
        for (let i = 0; i < hide.length; i++) {
            let tag = hide[i]
            let prj_tags = prj.tags.map(tag => tag.title)
            let disallow_tag = prj_tags.indexOf(tag) !== -1
            if (disallow_tag) {
                return false
                break
            }
        }

        // If all pass, return true
        return true
    }
    componentDidMount() {
        this.controller()
    }
		render() {
        let project_count = big_projects.length + mockups.length + micro_projects.length
				return (
						<Head current_user={this.props.current_user}>
								<div>
										<List
                        big_projects={this.state.big_projects}
                        micro_projects={this.state.micro_projects}
                        mockups={this.state.mockups}
                        project_count={project_count}
                        handle_input={this.handle_input}
                        update_all={this.update_all}
                        show_filters={this.state.show_filters}
                        toggle_filters={this.toggle_filters}
                        tags={this.state.tags} />
								</div>
						</Head>
				)
		}
}
Projects.getInitialProps = async function(context) {
		return {
				current_user: await return_current_user(context),
		}
}
export default withRedux(initStore)(Projects)
