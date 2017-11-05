import TopBar from './TopBar.js'

const months_array_long = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
]

const week_days = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

const YearLabel = (props) => (
    <div className='calendar__monthview_topbuttons'>
        <div
            onClick={() => props.change_view('year')}
            className='calendar__monthview_toplabel'>
            {props.year} - {months_array_long[props.month]}
        </div>
        <div>
            <span
                onClick={() => props.arrow('down')}
                className='calendar__monthview_arrow'>&darr;</span>
            <span
                onClick={() => props.arrow('up')}
                className='calendar__monthview_arrow'>&uarr;</span>
        </div>
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
            return <div key={key} className='calendar__monthview_date_placeholder'>{date}</div>
        })}
        {props.dates.map((date, key) => {
            if (props.selection.day === date
                && props.selection.month === props.month) {
                return (
                    <div
                        key={key}
                        onClick={() => props.make_selection(date, 'month')}
                        className='calendar__monthview_date calendar__monthview_date--selected'>{date}</div>
                )
            } else {
                return (
                    <div
                        key={key}
                        onClick={() => props.make_selection(date, 'day')}
                        className='calendar__monthview_date'>{date}</div>
                )
            }
        })}
        {props.next_dates.map((date, key) => {
            return <div key={key} className='calendar__monthview_date_placeholder'>{date}</div>
        })}
    </div>
)

// Includes the label, the <DaysOfWeek />, and <MonthGrid />
// But not the topbar
const MonthPane = (props) => {
    // Calculate the month
    let month = props.date.month
    let year = props.date.year

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
            <YearLabel
                arrow={props.arrow}
                month={month}
                year={year}
                change_view={props.change_view} />
            <DaysOfWeek />
            <MonthGrid
                selection={props.selection}
                month={month}
                prev_dates={prev_dates}
                next_dates={next_dates}
                make_selection={props.make_selection}
                dates={dates} />
        </div>
    )
}

class MonthView extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='calendar__monthview_outer'>
                <div className='calendar__monthview_topbar'>
                    <TopBar
                        view='month'
                        select_today={this.props.select_today}
                        change_view={this.props.change_view} />
                </div>


                <MonthPane
                    change_view={this.props.change_view}
                    selection={this.props.selection}
                    arrow={this.props.arrow}
                    make_selection={this.props.make_selection}
                    date={{
                        year: this.props.selection.year,
                        month: this.props.selection.month
                    }}/>

            </div>
        )
    }
}

export default MonthView