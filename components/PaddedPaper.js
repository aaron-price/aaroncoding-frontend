import Paper from 'material-ui/Paper'

export default (props) => {
    let classes = props.classes || ''
    let style = Object.assign({}, {padding: '1em'}, props.style)
    return (
        <Paper style={style} className={props.classes || ''}>{props.children}</Paper>
    )
}
