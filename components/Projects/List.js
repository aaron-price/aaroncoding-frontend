import Paper from 'material-ui/Paper'
import FlatButton from 'material-ui/FlatButton'
import Scroll from 'react-scroll'
import {scroller} from 'react-scroll'
let scroll = Scroll.animateScroll
import HoverPaper from '../../components/HoverPaper'

const Filter = (props) => (
    <div className="project_filter_item">{props.tag.title}:<br />
        <FlatButton
            label='show'
            onClick={() => props.handle_input(props.keyname, 'show')}
            primary={props.tag.visibility !== 'show'}
            secondary={props.tag.visibility === 'show'} /> |
        <FlatButton
            label='hide'
            onClick={() => props.handle_input(props.keyname, 'hide')}
            primary={props.tag.visibility !== 'hide'}
            secondary={props.tag.visibility === 'hide'} /> |
        <FlatButton
            label='required'
            onClick={() => props.handle_input(props.keyname, 'required')}
            primary={props.tag.visibility !== 'required'}
            secondary={props.tag.visibility === 'required'} />
        <hr />
    </div>
)
const Filters = (props) => {
    return <div>{Object.keys(props.tags).map((tag, key) => {
        return <Filter
                   key={key}
                   tag={props.tags[tag]}
                   keyname={tag}
                   handle_input={props.handle_input} />
    })}</div>
}
const Item = (props) => {
    if(props.project.href.charAt(0) === '#') {
        return (
          <HoverPaper
              max={3}
              classes="projects_item">
              <div onClick={() => {
                  scroll.scrollToTop({duration: 500})
                  setTimeout(()=> props.toggle_filters(), 700)
              }
              } style={{cursor: 'pointer'}}>
                  <h4 className='about_text'>{props.project.title}</h4>
                  <p className='about_text'>{props.project.description}</p>
                  <p className='about_text'><strong>Tags: </strong>
                      {props.project.tags.map(tag => tag.title).join(', ')}
                  </p>
              </div>
          </HoverPaper>
        )
    } else {
        return (
          <HoverPaper
              max={3}
              href={props.project.href}
              classes="projects_item">
              <h4 className='about_text'>{props.project.title}</h4>
              <p className='about_text'>{props.project.description}</p>
              <p className='about_text'><strong>Tags: </strong>
                  {props.project.tags.map(tag => tag.title).join(', ')}
              </p>
          </HoverPaper>
        )
    }

}
export default (props) => (
    <div className="full_screen__content" id='filters'>
        <h1>Projects</h1>
        <p className='about_text'>Currently showing {
            props.big_projects.length + props.micro_projects.length
        } out of {
            props.project_count
        }.</p>
        <FlatButton
            label={props.show_filters ? 'Hide Filters': 'Show Filters'}
            primary={!props.show_filters}
            secondary={props.show_filters}
            onClick={() => props.toggle_filters()}/><br /><hr />
        {props.show_filters && (
          <div>
              All Tags: <br />
              <FlatButton
                  label='show all'
                  onClick={() => props.update_all('show')}
                  primary={true} /> |
              <FlatButton
                  label='hide all'
                  onClick={() => props.update_all('hide')}
                  primary={true} /> |
              <FlatButton
                  label='require all'
                  onClick={() => props.update_all('required')}
                  primary={true} />
              <hr />


              <Filters
                  tags={props.tags}
                  handle_input={props.handle_input} />
          </div>
        )}
        <br />
        {props.big_projects.length > 0 && (
            <div>
                <h3 className='about_text'>Open Source</h3>
                <p>I like making cool things that other people can use</p>
                {props.big_projects.map((project, key) => {
                    return <Item key={key} project={project} />
                })}
                <br />
            </div>
        )}
        {props.micro_projects.length > 0 && (
            <div>
                <h3 className='about_text'>Micro Projects</h3>
                <p>I built 1 small project, every day after work, for 30 consecutive days.</p>
                {props.micro_projects.map((project, key) => {
                    return <Item key={key} show_filters={props.show_filters} toggle_filters={props.toggle_filters} project={project} />
                })}<br />
            </div>
        )}




    </div>
)
