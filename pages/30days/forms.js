import Link from 'next/link'
import 'isomorphic-fetch'
import React, { Component } from 'react'

import Paper from 'material-ui/Paper'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import Slider from 'material-ui/Slider'
import RaisedButton from 'material-ui/RaisedButton'
import MenuItem from 'material-ui/MenuItem'
import SelectField from 'material-ui/SelectField'
import Divider from 'material-ui/Divider'
import TextField from 'material-ui/TextField'
import LinearProgress from 'material-ui/LinearProgress'

import Head from '../../components/Head.js'
import { initStore } from '../../redux/store'
import withRedux from 'next-redux-wrapper'
import { return_current_user } from '../../services/current_user.js'

const positions = ['Developer', 'Designer', 'QA', 'Manager', 'Student', 'Other']
const experience = ['0 - 3 months', '3 - 6 months', 'about 1 year', '2 - 5 years', 'over 5 years']
const fields = {
    name: 'Aaron Price',
    email: 'coding.aaronp@gmail.com',
    description: 'Pretty cool web developer\nI turn code into shiny, fancy things.',
    position: 0,
    experience: 2,
}

class FormContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fields,
            progress: 0,
        }
        this.changeHandler = this.changeHandler.bind(this)
        this.progressHandler = this.progressHandler.bind(this)
    }
    progressHandler() {
        const fields = ['name', 'email', 'description', 'position', 'experience']
        const state = this.state.fields
        const increment = (100 / fields.length) // 100% divided by number of fields

        // Each field that has been changed by the user will increase the progress bar
        let progress = 0

        fields.forEach(field => {
            if (state[field] !== fields[field] && state[field] !== undefined) { progress += increment }
        })
        this.setState({ progress })
    }

    changeHandler(e, field, val) {
        console.log('e', e, ' field', field, ' val ', val)
        let value
        if (field === 'experience') { value = val }
        else if (field === 'position') { value = positions.indexOf(e.target.innerHTML) }
        else { value = e.target.value }

        let newFields = Object.assign({}, this.state.fields)
        newFields[field] = value
        this.setState({ fields: newFields }, this.progressHandler())
    }
    render() {
        return (
            <Head
                description='React forms with a preview panel that updates as you work'
                current_user={this.props.current_user}>

                <div>
                    <Preview fields={this.state.fields} />
                    <br /><hr /><br />
                    <Form changeHandler={this.changeHandler} fields={this.state.fields} />
                </div>
            </Head>
        )
    }
}
FormContainer.getInitialProps = async function(context) {
    return {
        current_user: await return_current_user(context),
    }
}
export default withRedux(initStore, null)(FormContainer)

const Progress = props => {
    return <LinearProgress mode="determinate" value={props.completed} />
}

const Form = props => {
    const style = { marginLeft: 20 }
    return (
        <Paper zDepth={2} className='form_wrapper'>
            <h1>Interactive Forms</h1>
            <p>Go ahead, play with it. Watch as the preview above changes.</p>
            <TextField
                hintText="Name"
                floatingLabelText="Name"
                floatingLabelFixed={true}
                style={style}
                onChange={e => props.changeHandler(e, 'name')}/>
            <Divider />

            <TextField
                hintText="aaronfan84@gmail.com"
                floatingLabelText="Email"
                floatingLabelFixed={true}
                style={style}
                onChange={e => props.changeHandler(e, 'email')} />
            <Divider />

            <TextField
                hintText="Description"
                floatingLabelText="Description"
                floatingLabelFixed={true}
                multiLine={true}
                rows={4}
                rowsMax={12}
                style={style}
                onChange={e => props.changeHandler(e, 'description')}
            />
            <Divider />

            <SelectField
                floatingLabelText="Position"
                value={props.fields.position}
                onChange={e => props.changeHandler(e, 'position')}
                style={style}
            >
                {positions.map((position, key) => <MenuItem key={key} value={key} primaryText={position} />)}
            </SelectField>
            <Divider /><br/>

            <h4 style={style}>Experience: {experience[props.fields.experience]}</h4>
            <Slider
                style={{width: 100, display: 'inline-block', marginLeft: 20}}
                defaultValue={2}
                min={0} max={4}
                name="experience"
                step={1}
                onChange={(e, val) => props.changeHandler(e, 'experience', val)}
            />
            <Divider />
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <RaisedButton label="Submit" secondary={true} style={{margin: '1em'}} />
            </div>
        </Paper>
    )
}

const Preview = props => {
    let experience
    if (props.fields.experience === 0) { experience = 'Beginner' }
    if (props.fields.experience === 1) { experience = 'Intern' }
    if (props.fields.experience === 2) { experience = 'Junior' }
    if (props.fields.experience === 3) { experience = 'Mid-level' }
    if (props.fields.experience === 4) { experience = 'Senior' }

    return (
        <Card style={{backgroundColor: '#FFFDE7'}} className='form_preview_wrapper'>
            <CardHeader
                title={`${props.fields.name} - ${experience} ${positions[props.fields.position]}`}
                subtitle={props.fields.email}
                avatar={`https://api.adorable.io/avatars/250/${props.fields.name}@adorable.io`}
            />


            <CardText>{props.fields.description
                .split(/\n/)
                .map((ln, key) => <span key={key}>{ln}<br /></span>
                )}</CardText>


        </Card>
    )
}