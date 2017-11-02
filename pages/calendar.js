import Head from '../components/Head.js'
import { return_current_user } from '../services/current_user.js'
import { initStore } from '../redux/store'
import withRedux from 'next-redux-wrapper'

const months_array = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
    'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
]
const months_array_long = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
]
const week_days = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

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
        }
        this.change_view = this.change_view.bind(this)
        this.make_selection = this.make_selection.bind(this)
        this.select_today = this.select_today.bind(this)
    }
    // From 'month' to 'year' and vice versa
    change_view(target = null) {
        this.setState((prevState) => {
            if (target === null) {
                // Just toggle it automatically
                return { view: prevState === 'month' ? 'year' : 'month'}
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
            return { selection }
        })
        if (type === 'month') {
            this.change_view('month')
        }
    }
    select_today() {
        const date = new Date()

        const selection = todays_date()
        // Change the state
        this.setState({ selection, view: 'month' })

        // Execute the callback
        update_detected(selection)
    }
    render() {
        if (this.state.view === 'month') {
            // Render the MonthView component
            return (
                <Head
                    description='Learn about, and hire, Aaron Price.'
                    current_user={this.props.current_user}>
                    <MonthView
                        change_view={this.change_view}
                        select_today={this.select_today}
                        make_selection={this.make_selection}
                        selection={this.state.selection} />
                </Head>
            )
        } else {
            // Render the YearView component
            return (
                <Head
                    description='Learn about, and hire, Aaron Price.'
                    current_user={this.props.current_user}>
                    <YearView
                        change_view={this.change_view}
                        select_today={this.select_today}
                        make_selection={this.make_selection}
                        selection={this.state.selection} />
                </Head>
            )
        }
    }
}

const TopBar = (props) => {
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

const MonthView = (props) => {
    // Calculate the next month
    let month = props.selection.month
    let next_month = month + 1
    let next_year = props.selection.year
    if (next_month > 11) {
        next_year += 1
        next_month = 0
    }

    // Finds the day of the week for the 1st of the month. Sunday = 0
    const first_day = new Date(
        props.selection.year,
        props.selection.month,
        1
    ).getDay()

    // Finds the last date of the month. E.g. 31
    const last_day = new Date(
        props.selection.year,
        props.selection.month + 1,  // Get next month
        0                           // Get the day before the 1st
    ).getDate()

    // This eventually gets turned into the grid of days.
    let dates = []
    // Use spacers for the empty day tiles at the beginning of a month
    for (let i = 0; i < first_day; i++) {
        dates.push('')
    }

    // Add the real dates to the array
    for (let i = 1; i <= last_day; i++) {
        dates.push(i)
    }

    return (
        <div className='calendar__monthview_outer'>
            <TopBar
                toggle_text='Year'
                select_today={props.select_today}
                change_view={props.change_view} />

            {/* Displays the current month */}
            <div className='calendar__monthview_toplabel'>
                {props.selection.year} {months_array_long[month]}
            </div>

            {/* Displays the days of the week */}
            <div className='calendar__dayletters'>
                {week_days.map((day, key) => {
                    return <div className='calendar__weekday' key={key}>{day}</div>
                })}
            </div>

            {/* Displays the days of the month */}
            <div className='calendar__monthview_grid'>
                {dates.map((date, key) => {
                    // Gives this date an extra class if it's selected
                    let className = props.selection.day === date
                        ? 'calendar__monthview_date calendar__monthview_date--selected'
                        : 'calendar__monthview_date'
                    return (
                        <div
                            key={key}
                            onClick={() => props.make_selection(date, 'day')}
                            className={className}>{date}
                        </div>
                    )
                })}
            </div>

            {/* Displays the next month */}
            <div
                onClick={() => props.make_selection(next_month, 'month')}
                className='calendar__monthview_bottomlabel'>
                {next_year} {months_array_long[next_month]}
            </div>

        </div>
    )
}

const YearView = (props) => {
    return (
        <div className='calendar__yearview_outer'>
            <TopBar
                toggle_text='Month'
                select_today={props.select_today}
                change_view={props.change_view} />
            <div className='calendar__yearview_inner'>

                <div className='calendar_yearview_years'>
                    <YearList
                        make_selection={props.make_selection}
                        selection={props.selection} />
                </div>

                <div className='calendar__yearview_months'>
                    <MonthsGrid
                        make_selection={props.make_selection}
                        selection={props.selection} />
                </div>

            </div>
        </div>
    )
}



const YearList = (props) => {
    // Creates array of years from 2017 to 2100
    // Adjust the const's below to change that
    const min_year = 2017
    const max_year = 2100
    const years_length = max_year - min_year
    let years = []
    for (let i = 0; i < years_length; i++) {
        years.push(min_year + i)
    }
    return (
        <div className='calendar__yearlist_scrollbox'>
            {/* Iterate over all the years */}
            {years.map((year, key) => {
                // Give an extra className if this year is selected
                let className = `calendar__yearlist_item calendar_yearitem_${year}`
                if (props.selection.year === year) {
                    className += ' calendar__yearlist_item--selected'
                }
                return (
                    <div
                        className={className}
                        onClick={() => props.make_selection(year, 'year')}
                        key={key}>{year}</div>
                )
            })}
        </div>
    )
}

const MonthsGrid = (props) => {
    return (
        <div className='calendar__yearview_grid'>
            {months_array.map((month, key) => {
                // Iterate over each month
                // Add a className if selected
                let className = props.selection.month === key
                    ? 'calendar__yearview_month calendar__yearview_month--selected'
                    : 'calendar__yearview_month'
                // Render the month
                return <div
                    key={key}
                    onClick={() => props.make_selection(key, 'month')}
                    className={className}>{month}</div>
            })}
        </div>
    )
}

CalendarWrapper.getInitialProps = async function(context) {
    return {
        current_user: await return_current_user(context),
    }
}


export default withRedux(initStore, null)(CalendarWrapper)