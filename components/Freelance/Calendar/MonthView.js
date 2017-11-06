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
            style={{
                opacity: props.opacity,
                transition: `opacity ${props.animation_speed}s ease-out`
            }}
            className='calendar__monthview_toplabel'>
            {props.month_label.year}
            &nbsp;-&nbsp;
            {months_array_long[props.month_label.month]}
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
function validate_date(y, m) {
    if (m >= 12) {
        return validate_date(y + 1, m - 12)
    } else if (m < 0) {
        return validate_date(y - 1, m + 12)
    } else {
        return { y, m }
    }
}

function monthgrid_data(pos = 0, selection) {
    let date = validate_date(selection.year, selection.month + pos)
    let month = date.m
    let year = date.y

    // Finds the day of the week for the 1st of the month. Sunday = 0
    const first_day = new Date(year, month, 1).getDay()

    // Finds the last date of the month. E.g. 31
    const last_date = new Date(year, month + 1, 0).getDate()

    // Use spacer days at the beginning of the month
    let prev_month = new Date(year, month, 0)
    let prev_month_days = prev_month.getDate()
    let prev_dates = []
    for (let i = 0; i < first_day; i++) {
        prev_dates.unshift(prev_month_days)
        prev_month_days -= 1
    }

    // The main grid of days.
    let dates = []
    for (let i = 1; i <= last_date; i++) {
        dates.push(i)
    }

    // Use spacer days at the end of the month
    const last_day = new Date(year, month + 1, 0).getDay()
    let next_dates = []
    let counter = 1
    for (let i = last_day; i < 6; i++) {
        next_dates.push(counter)
        counter += 1
    }

    return {
        month,
        year,
        prev_dates: prev_dates,
        next_dates: next_dates,
        dates: dates,
    }
}

// Includes the label, the <DaysOfWeek />, and <MonthGrid />
// But not the topbar
const MonthPane = (props) => {
    let margin_transition
    if (props.visible_month === 'middle') {
        // Styles when not animated.
        margin_transition = 'margin-top 0s'
    } else {
        // Styles when animated.
        margin_transition = `margin-top ${props.animation_speed}s ease-in-out`
    }

    let prev_mo
    let curr_mo
    let next_mo

    if (props.visible_month === 'up') {
        prev_mo = monthgrid_data(-2, props.selection)
        curr_mo = monthgrid_data(-1, props.selection)
        next_mo = monthgrid_data(0, props.selection)
        setTimeout(() => {
            props.half_updated()
        }, (props.animation_speed * 1000) / 2)
        setTimeout(() => {
            props.finish_updating()
            props.update_month_label({ month: curr_mo.month, year: curr_mo.year })
        }, (props.animation_speed * 1000))
    } else if (props.visible_month === 'down') {
        prev_mo = monthgrid_data(0, props.selection)
        curr_mo = monthgrid_data(1, props.selection)
        next_mo = monthgrid_data(2, props.selection)
        setTimeout(() => {
            props.half_updated()
        }, (props.animation_speed * 1000) / 2)
        setTimeout(() => {
            props.finish_updating()
            props.update_month_label({ month: curr_mo.month, year: curr_mo.year })
        }, (props.animation_speed * 1000))
    } else {
        prev_mo = monthgrid_data(-1, props.selection)
        curr_mo = monthgrid_data(0, props.selection)
        next_mo = monthgrid_data(1, props.selection)
    }

    let margin = {
        down: '0em',
        middle: '-20em',
        up: '-40em'
    }
    console.log('prev_mo', prev_mo)
    console.log('curr_mo', curr_mo)
    console.log('prev_mo', next_mo)
    return (
        <div className={`calendar__monthpane year_${curr_mo.year}_month_${curr_mo.month}`}>
            <YearLabel
                opacity={props.opacity}
                updating={props.updating}
                animation_speed={props.animation_speed}
                arrow={props.arrow}
                month_label={props.month_label}
                month={curr_mo.month}
                year={curr_mo.year}
                change_view={props.change_view} />
            <DaysOfWeek />
            <div className='calendar__monthswrapper_outer'>
                <div className='calendar__monthswrapper_inner'>
                    <div
                        style={{
                            marginTop: margin[props.visible_month],
                            transition: margin_transition,
                        }}
                        className='calendar__monthswrapper_margin'>
                    </div>
                    <div className='calendar__monthgrid_spacer'>
                        <MonthGrid
                            selection={props.selection}
                            month={prev_mo.month}
                            opacity={props.opacity}
                            half_updated={props.half_updated}
                            prev_dates={prev_mo.prev_dates}
                            next_dates={prev_mo.next_dates}
                            make_selection={props.make_selection}
                            dates={prev_mo.dates} />
                    </div>
                    <div className='calendar__monthgrid_spacer'>
                        <MonthGrid
                            selection={props.selection}
                            month={curr_mo.month}
                            opacity={props.opacity}
                            half_updated={props.half_updated}
                            prev_dates={curr_mo.prev_dates}
                            next_dates={curr_mo.next_dates}
                            make_selection={props.make_selection}
                            dates={curr_mo.dates} />
                    </div>
                    <div className='calendar__monthgrid_spacer'>
                        <MonthGrid
                            selection={props.selection}
                            month={next_mo.month}
                            opacity={props.opacity}
                            half_updated={props.half_updated}
                            prev_dates={next_mo.prev_dates}
                            next_dates={next_mo.next_dates}
                            make_selection={props.make_selection}
                            dates={next_mo.dates} />
                    </div>
                </div>
            </div>
        </div>
    )
}

const MonthView = (props) => {
    function null_fn() {}
    const allow_updates = (
        !props.updating
        && props.visible_month === 'middle'
    )
    console.log('allow_updates',allow_updates)
    return (
        <div className='calendar__monthview_outer'>
            <div className='calendar__monthview_topbar'>
                <TopBar
                    view='month'
                    select_today={allow_updates ? props.select_today : null_fn}
                    change_view={allow_updates ? props.change_view : null_fn} />
            </div>
            <MonthPane
                change_view={props.change_view}
                selection={props.selection}
                arrow={allow_updates ? props.arrow : null_fn}
                updating={props.updating}
                opacity={props.opacity}
                half_updated={props.half_updated}
                month_label={props.month_label}
                update_month_label={props.update_month_label}
                visible_month={props.visible_month}
                animation_speed={props.animation_speed}
                finish_updating={props.finish_updating}
                make_selection={props.make_selection}
                date={{
                    year: props.selection.year,
                    month: props.selection.month
                }}/>

        </div>
    )

}

export default MonthView