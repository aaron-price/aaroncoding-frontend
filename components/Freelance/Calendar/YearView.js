import TopBar from './TopBar.js'
import ReactDOM from 'react-dom'
const months_array = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
    'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
]

export default (props) => {
    return (
        <div className='calendar__yearview_outer'>
            <TopBar
                view='year'
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

class YearList extends React.Component {
    constructor(props) {
        super(props)
        this.state = { mounted: false }
        this.autofocus = this.autofocus.bind(this)
    }
    componentDidMount() {
        const is_safari = (
            navigator.userAgent.indexOf('Safari') != -1
            && navigator.userAgent.indexOf('Chrome') == -1
        )
        this.setState({ mounted: true, is_safari })
    }
    autofocus(el) {
        if (el) {
            el.scrollIntoView(true)
        }
    }
    updating() {
        this.setState({ mounted: false })
        this.props.finish_updating()
    }

    render() {
        // Creates array of years from 2017 to 2100
        // Adjust the const's below to change that
        const min_year = 1900
        const max_year = 2100
        const years_length = max_year - min_year
        let years = []
        for (let i = 0; i <= years_length; i++) {
            years.push(min_year + i)
        }
        if (this.props.updating) {
            this.updating()
        }
        return (
            <div className='calendar_yearlist_outerscrollbox'>
                <div
                    className='calendar__yearlist_scrollbox'>
                    <div className='calendar_yearlist_innerscrollbox'>
                        {/* Iterate over all the years */}
                        {years.map((year, key) => {
                            // Give an extra className if this year is selected
                            let className = `calendar__yearlist_item calendar_yearitem_${year}`
                            if (this.props.selection.year === year) {
                                className += ' calendar__yearlist_item--selected'
                                // Render the selected year
                                return (
                                    <div
                                        ref={el => this.autofocus(el)}
                                        key={key}
                                        className={className}>{year}</div>
                                )
                            } else {
                                // Render a non-selected year
                                return (
                                    <div
                                        className={className}
                                        onClick={() => this.props.make_selection(year, 'year')}
                                        key={key}>{year}</div>
                                )
                            }
                        })}
                    </div>
                </div>
            </div>
        )
    }
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