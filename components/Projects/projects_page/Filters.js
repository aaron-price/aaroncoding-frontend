import FlatButton from 'material-ui/FlatButton'

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
export default (props) => {
    return <div>{Object.keys(props.tags).map((tag, key) => {
        return <Filter
            key={key}
            tag={props.tags[tag]}
            keyname={tag}
            handle_input={props.handle_input} />
    })}</div>
}