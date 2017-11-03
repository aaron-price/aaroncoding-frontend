import TopBar from './TopBar.js'

const months_array_long = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
]

const week_days = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

const YearLabel = (props) => (
    <div
        onClick={() => props.change_view('year')}
        className='calendar__monthview_toplabel'>
        {props.year} - {months_array_long[props.month]}
    </div>
)

const DaysOfWeek = (props) => (
    <div className='calendar__dayletters'>
        {week_days.map((day, key) => {
            return <div className='calendar__weekday' key={key}>{day}</div>
        })}
    </div>
)

const MonthGrid = (props) => (
    <div className='calendar__monthview_grid'>
        {props.prev_dates.map((date, key) => {
            return <div key={key} className='calendar__monthview_date placeholder'>{date}</div>
        })}
        {props.dates.map((date, key) => {
            return <div key={key} className='calendar__monthview_date'>{date}</div>
        })}
        {props.next_dates.map((date, key) => {
            return <div key={key} className='calendar__monthview_date placeholder'>{date}</div>
        })}
    </div>
)

// Includes the label, the <DaysOfWeek />, and <MonthGrid />
// But not the topbar
const MonthPane = (props) => {
    // Calculate the month
    let month = props.date.month
    let year = props.date.year
    if (month > 11) {
        month = 0
        year += 1
    }

    // Finds the day of the week for the 1st of the month. Sunday = 0
    const first_day = new Date(year, month, 1).getDay()

    // Finds the last date of the month. E.g. 31
    const last_date = new Date(year, month + 1, 0).getDate()

    // Use spacers at the beginning of the month
    let prev_month = new Date(year, month, 0).getDate()
    let prev_dates = []
    for (let i = 0; i < first_day; i++) {
        prev_dates.unshift(prev_month)
        prev_month -= 1
    }

    // The main grid of days.
    let dates = []
    for (let i = 1; i <= last_date; i++) {
        dates.push(i)
    }

    // Use spacers at the end of the month
    const last_day = new Date(year, month + 1, 0).getDay()
    let next_dates = []
    let counter = 1
    for (let i = last_day; i < 6; i++) {
        next_dates.push(counter)
        counter += 1
    }
    return (
        <div className='calendar__monthpane'>
            <YearLabel month={month} year={year} change_view={props.change_view}/>
            <DaysOfWeek />
            <MonthGrid
                prev_dates={prev_dates}
                next_dates={next_dates}
                dates={dates} />
        </div>
    )
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

class MonthView extends React.Component {
    constructor(props) {
        super(props)
        // Get objects with a day, month and year property.
        // middle object is the current selection
        // Then finally put the array in the state
        let available_months = []
        for (let i = -20; i < 20; i++) {
            const {y, m} = validate_date(
                this.props.selection.year,
                this.props.selection.month
            )
            const mo = new Date(this.props.selection.year, this.props.selection.month + i)
            available_months.push({
                year: mo.getFullYear(),
                month: mo.getMonth()
            })
        }
        this.state = {
            default_month: this.props.selection.month,
            default_year: this.props.selection.year,
            available_months
        }
        this.handle_scroll = this.handle_scroll.bind(this)
    }
    force_scroll() {

    }
    handle_scroll() {
        const top = this.spacer_top.getBoundingClientRect().bottom
        const bottom = this.spacer_bottom.getBoundingClientRect().top
        if (top >= this.state.min_height) {
            // The user is scrolling near the top, add a month
            this.setState((prevState) => {
                const available_months = prevState.available_months
                const top_date = available_months[0]
                // Find the year and month above the top available month
                const {y, m} = validate_date(top_date.year, top_date.month - 1)
                // Add it to the state
                available_months.unshift({year: y, month: m})
                return { available_months }
            })
        } else if (bottom <= this.state.max_height) {
            // The user is scrolling near the bottom, add a month
            this.setState((prevState) => {
                const available_months = prevState.available_months
                const bottom_date = available_months.slice(-1)[0]
                // Find the year and month below the bottom available month
                const {y, m} = validate_date(bottom_date.year, bottom_date.month + 1)
                // Add it to the state
                available_months.unshift({year: y, month: m})
                return { available_months }
            })
        }
    }
    componentDidMount() {
        document.addEventListener('scroll', this.handle_scroll, true)
        this.setState({
            min_height: this.spacer_top.getBoundingClientRect().top,
            max_height: this.spacer_bottom.getBoundingClientRect().bottom
        })
    }
    render() {
        // We start with 4 months, and add more to the top or bottom
        // if the user hits the edges.
        return (
            <div className='calendar__monthview_outer'>
                <div className='calendar__monthview_topbar'>
                    <TopBar
                        toggle_text='Year'
                        select_today={this.props.select_today}
                        change_view={this.props.change_view} />
                </div>

                <div ref={el => this.spacer_top = el}></div>
                {/* Displays the days of the month */}
                <div className='calendar__monthview_scrollbox'>
                    {this.state.available_months.map((m, key) => {
                        return (
                            <MonthPane
                                key={key}
                                change_view={this.props.change_view}
                                date={{
                                    year: m.year,
                                    month: m.month
                                }}/>
                        )
                    })}
                </div>
                <div ref={el => this.spacer_bottom = el}></div>
                {/*
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
                */}


            </div>
        )
    }
}
export default MonthView