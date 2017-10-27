import Link from 'next/link'
import 'isomorphic-fetch'
import React, { Component } from 'react'

import Paper from 'material-ui/Paper'
import { initStore } from '../redux/store'
import withRedux from 'next-redux-wrapper'
import AccordionPaper from '../components/AccordionPaper'
import { CodeBlock, GreenText as Grn} from '../components/CodeBlocks'
import Header from '../components/Head'
import Head from '../components/Head.js'
import Filters from '../components/Projects/projects_page/Filters.js'
import Project from '../components/Projects/projects_page/Project.js'
import {
    tags,
    micro_projects,
    oss_projects,
    mockup_projects } from '../components/Projects/projects_page/data.js'

import { return_current_user } from '../services/current_user.js'

class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tags,
            micro_projects,
            oss_projects,
            mockup_projects,
            show_filters: false,
            force_open: false
        }
        this.filter = this.filter.bind(this)
        this.handle_input = this.handle_input.bind(this)
        this.update_all = this.update_all.bind(this)
        this.update_state = this.update_state.bind(this)
        this.force_open_filters = this.force_open_filters.bind(this)
        this.unforce_filters = this.unforce_filters.bind(this)
    }
    force_open_filters() {
        this.setState({ force_open: true })
        // Stop forcing after a second
        // this.setTimeout(() => this.setState({ force_open: false }), 1000)
    }
    unforce_filters() {
        this.setState({ force_open: false})
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
        let new_big = oss_projects.filter(this.filter)
        let new_micro = micro_projects.filter(this.filter)
        this.setState({
            oss_projects: new_big,
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
            }
        }

        // If all pass, return true
        return true
    }
    componentDidMount() {
        this.controller()
    }
    render() {
        let project_count = (
            oss_projects.length
            + mockup_projects.length
            + micro_projects.length)
        let current_count = (
            this.state.oss_projects.length
            + this.state.mockup_projects.length
            + this.state.micro_projects.length)
        return (
            <Head current_user={this.props.current_user}>
                <AccordionPaper
                    padding={true}
                    force_open={this.state.force_open}
                    unforce={this.unforce_filters}
                    title='Filters'
                    slug={`Showing ${current_count} out of ${project_count} projects`}>
                    <Filters
                        tags={this.state.tags}
                        handle_input={this.handle_input} />
                </AccordionPaper>

                <br />
                <AccordionPaper
                    padding={true}
                    title={`Open Source (${this.state.oss_projects.length})`}
                    slug={'Cool stuff I made that other devs can use.'}>
                    {this.state.oss_projects.map((project, key) => {
                        return (
                            <Project
                                project={project}
                                key={key}/>
                        )
                    })}
                </AccordionPaper>

                <br />
                <AccordionPaper
                    padding={true}
                    title={`Thing A Day (${this.state.micro_projects.length})`}
                    slug={'I did 1 small project every day, after work, for a month.'}>
                    {this.state.micro_projects.map((project, key) => {
                        return (
                            <Project
                                project={project}
                                key={key}
                                force_open_filters={this.force_open_filters}/>
                        )
                    })}
                </AccordionPaper>

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