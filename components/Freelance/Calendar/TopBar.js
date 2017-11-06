const TogglerMonth = (props) => {
    return (
        <div>Month <span className="fa fa-chevron-right" aria-hidden="true"></span></div>
    )
}
const TogglerYear = (props) => {
    return (
        <div><span className="fa fa-chevron-left" aria-hidden="true"></span> Year</div>
    )
}
export default (props) => {
    let other_view = props.view === 'month' ? 'year' : 'month'
    return (
        <div className='calendar__topbar'>
            <div
                onClick={() => props.select_today()}
                className='calendar__topbar_today'>Today</div>
            <div
                onClick={() => props.change_view(other_view)}
                className='calendar__topbar_toggler'>
                {props.view === 'year' ? (
                    <TogglerMonth />
                ) : (
                    <TogglerYear />
                )}
            </div>
        </div>
    )
}