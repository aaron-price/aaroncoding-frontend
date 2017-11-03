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
    // if (month > 11) {
    //     month = 0
    //     year += 1
    // }

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
        <div className={`calendar__monthpane year_${year}_month_${month}`}>
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
        let half_range = 2
        for (let i = -1 * half_range; i < half_range; i++) {
            const {y, m} = validate_date(
                this.props.selection.year,
                this.props.selection.month + i
            )
            available_months.push({
                year: y,
                month: m
            })
        }
        this.state = {
            default_month: this.props.selection.month,
            default_year: this.props.selection.year,
            half_range,
            scroll_target: (half_range - 1) * 294,
            scroll_month: {
                year: this.props.selection.year,
                month: this.props.selection.month
            },
            pos: 0,
            available_months
        }
        this.handle_scroll = this.handle_scroll.bind(this)
        this.autofocus = this.autofocus.bind(this)
    }
    autofocus(el) {
        if (this.state.is_safari) {
            el.scrollIntoView(false)
        }
    }
    handle_scroll() {
        let box = document
            .getElementsByClassName('calendar__monthview_outer')[0]
            .getBoundingClientRect()

        let top = document
            .getElementsByClassName('calendar__monthview_top')[0]
            .getBoundingClientRect().top

        let bottom = document
            .getElementsByClassName('calendar__monthview_bottom')[0]
            .getBoundingClientRect().bottom

        // User hit the top, add a month
        if (top >= box.top) {
            this.setState((prevState) => {
                let available_months = prevState.available_months
                let m1 = available_months[0]
                let new_month = validate_date(m1.year, m1.month - 1)
                available_months.unshift({ month: new_month.m, year: new_month.y })
                return { available_months }
            }, () => {
                this.setState((prevState) => {
                    return { scroll_month: prevState.available_months[1] }
                })
            })
        }

        // User hit the bottom, add a month
        if (bottom <= box.bottom) {
            this.setState((prevState) => {
                let available_months = prevState.available_months
                let last_m = available_months.slice(-1)[0]
                let new_month = validate_date(last_m.year, last_m.month + 1)
                available_months.push({ year: new_month.y, month: new_month.m })
                return { available_months }
            })
        }
    }

    componentDidMount() {
        document.addEventListener('scroll', this.handle_scroll, true)
        const is_safari = (
            navigator.userAgent.indexOf('Safari') != -1
            && navigator.userAgent.indexOf('Chrome') == -1
        )
        this.setState({
            is_safari,
            mounted: true
        })
    }
    render() {
        // We start with 4 months, and add more to the top or bottom
        // if the user hits the edges.
        if (!this.state.mounted) {return <span></span>}
        return (
            <div className='calendar__monthview_outer'>
                <div className='calendar__monthview_topbar'>
                    <TopBar
                        toggle_text='Year'
                        select_today={this.props.select_today}
                        change_view={this.props.change_view} />
                </div>

                <div ref={el => this.spacer_top = el}></div>
                <div
                    ref={el => this.scrollbox = el}
                    className='calendar__monthview_scrollbox'>

                    {/* Displays the days of the month */}
                    {this.state.available_months.map((m, key) => {
                        let className = ''
                        if (this.state.available_months.length - 1 <= key) {
                            className += 'calendar__monthview_bottom'
                        }
                        if (key === 0) {
                            className += 'calendar__monthview_top'
                        }
                        // Check whether it matches the centered month
                        const match = (
                            m.month === this.state.scroll_month.month &&
                            m.year === this.state.scroll_month.year
                        )
                        const safari = this.state.is_safari
                        // Centered month, in safari
                        if (match && safari) {
                            return (
                                <div key={key} className={className}>
                                    <div
                                        ref={el => this.autofocus(el)}
                                        className='calendar__monthview_autofocus'
                                        style={{
                                            zIndex: -100,
                                            transform: 'translateY(350px)',
                                        }}>
                                    </div>
                                    <MonthPane
                                        change_view={this.props.change_view}
                                        date={{
                                            year: m.year,
                                            month: m.month
                                        }}/>
                                </div>
                            )
                        // Centered month, not safari
                        } else if (match && !safari) {
                            return (
                                <div
                                    className={className}
                                    key={key} ref={el => this.autofocus(el)}>
                                    <input
                                        style={{
                                            zIndex: -100,
                                            position: 'absolute',
                                            transform: 'translateY(150px)',
                                        }}
                                        className='calendar__monthview_autofocus'
                                        autoFocus={true}
                                        type='text' />
                                    <MonthPane
                                        change_view={this.props.change_view}
                                        date={{
                                            year: m.year,
                                            month: m.month
                                        }}/>
                                </div>
                            )
                            // Regular month
                        } else {
                            return (
                                <div className={className} key={key}>
                                    <MonthPane
                                        change_view={this.props.change_view}
                                        date={{
                                            year: m.year,
                                            month: m.month
                                        }}/>
                                </div>
                            )
                        }
                    })}
                </div>
                <div ref={el => this.spacer_bottom = el}></div>
            </div>
        )
    }
}

export default MonthView