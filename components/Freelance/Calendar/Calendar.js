import MonthView from './MonthView.js'
import YearView from './YearView.js'

// Calculate local time in a different city given the city's UTC offset
function get_static_time(offset) {
    const local_date = new Date()
    const utc_date = local_date.getTime() + (local_date.getTimezoneOffset() * 60000)
    return new Date(utc_date + (3600000 * offset))
}

const todays_date = () => {
    // To let the user use their own timezone, don't touch anything.

    // To use a specific one, change the get_static_time arg from -7 to whatever you want.
    // And change `const date = local_date` to `const date = static_date`
    const local_date = new Date()
    const static_date = get_static_time(-7)
    const date = local_date

    return {
        day: date.getDate(), // 1 - 31,
        month: date.getMonth(), // 0 - 11
        year: date.getFullYear(), // e.g. 2017
    }
}
const default_date = () => {
    // To use a different default, return an object with a day, month, and year.
    // e.g. for Jan 1st, 2018, return { day: 1, month: 0, year: 2018 }
    return todays_date()
}

const update_detected = (selection, type) => {
    console.log('sel', selection, 'dat', type)
    // This callback is executed as soon as the user selects something
    // If Nov 2, 2017 then selection = { day: 2, month: 10, year: 2017 }
    if (type === 'day') {
        // The user selected a day
        // view it with selection.day
    }
    if (type === 'month') {
        // The user selected a month
        // view it with selection.month
    }
    if (type === 'year') {
        // The user selected a year
        // view it with selection.year
    }
}
// so we don't end up with the 14th month etc.
// New Date() handles that slightly, but gets very buggy when you go too far.
// Recursively 'correct' the y and m until they work.
function validate_date(y, m) {
    if (m >= 12) {
        return validate_date(y + 1, m - 12)
    } else if (m < 0) {
        return validate_date(y - 1, m + 12)
    } else {
        return { y, m }
    }
}

// Contains all state and logic, and renders the top level view components.
class CalendarWrapper extends React.Component {
    constructor(props) {
        super(props)
        const date = default_date()
        this.state = {
            selection: {
                day: date.day,
                month: date.month,
                year: date.year,
            },
            view: 'month', // 'month' or 'year'
            updating: false,
        }
        this.change_view = this.change_view.bind(this)
        this.make_selection = this.make_selection.bind(this)
        this.select_today = this.select_today.bind(this)
        this.arrow = this.arrow.bind(this)
        this.finish_updating = this.finish_updating.bind(this)
    }
    finish_updating() {
        this.setState({ updating: false })
    }
    arrow(dir) {
        if (dir === 'up') {
            let { m } = validate_date(this.state.selection.year, this.state.selection.month - 1)
            this.make_selection(m, 'month')
            if (m === 11) { this.make_selection(this.state.selection.year - 1, 'year')}
        }
        if (dir === 'down') {
            let { m } = validate_date(this.state.selection.year, this.state.selection.month + 1)
            this.make_selection(m, 'month')
            if (m === 0) { this.make_selection(this.state.selection.year + 1, 'year')}
        }
    }
    // From 'month' to 'year' and vice versa
    change_view(target = null) {
        this.setState((prevState) => {
            if (target === null) {
                // Just toggle it automatically
                return { view: prevState === 'month' ? 'year' : 'month' }
            } else {
                // Change to a *specific* view
                return { view: target }
            }
        })
    }
    make_selection(data, type) {
        this.setState((prevState) => {
            let selection = Object.assign({}, prevState.selection)
            selection[type] = data

            // Execute the callback
            update_detected(selection, type)

            // Update the state
            return { selection, updating: true }
        })
    }
    select_today() {
        const date = new Date()

        const selection = todays_date()
        // Change the state
        this.setState({ selection, view: 'month' })

        // Execute the callback
        update_detected(selection, 'today')
    }
    render() {
        const revealed = { marginLeft: '-17em' }
        const hidden = { marginLeft: '0em' }

        return (
            <div className='calendar__root'>
                <div className='calendar__root_outer'>
                    <div
                        style={this.state.view === 'month' ? revealed : hidden}
                        className='calendar__root_month calendar__root_inner'>
                        <YearView
                            change_view={this.change_view}
                            select_today={this.select_today}
                            make_selection={this.make_selection}
                            updating={this.state.updating}
                            finish_updating={this.finish_updating}
                            selection={this.state.selection} />
                    </div>
                    <div className='calendar__root_year calendar__root_inner'>
                        <MonthView
                            change_view={this.change_view}
                            arrow={this.arrow}
                            select_today={this.select_today}
                            make_selection={this.make_selection}
                            selection={this.state.selection} />
                    </div>
                </div>
            </div>
        )
    }
}

export default CalendarWrapper