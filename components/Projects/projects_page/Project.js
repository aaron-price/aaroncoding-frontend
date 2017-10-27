import Scroll from 'react-scroll'
import {scroller} from 'react-scroll'

import HoverPaper from '../../HoverPaper.js'
let scroll = Scroll.animateScroll

const Item = (props) => {
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
const CallbackItem = (props) => {
    return (
        <HoverPaper
            max={3}
            classes="projects_item">
            <div onClick={() => {
                scroll.scrollToTop({duration: 500})
                setTimeout(()=> props.force_open_filters(), 700)
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
}
export default (props) => {
    if(props.project.href === '#filters') {
        return <CallbackItem project={props.project} force_open_filters={props.force_open_filters}/>
    } else {
        return <Item project={props.project} />
    }
}