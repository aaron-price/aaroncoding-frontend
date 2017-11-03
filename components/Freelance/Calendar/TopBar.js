export default (props) => {
    return (
        <div className='calendar__topbar'>
            <div
                onClick={() => props.select_today()}
                className='calendar__topbar_today'>Today</div>
            <div
                onClick={() => props.change_view(props.toggle_text.toLowerCase())}
                className='calendar__topbar_toggler'>{props.toggle_text}</div>
        </div>
    )
}