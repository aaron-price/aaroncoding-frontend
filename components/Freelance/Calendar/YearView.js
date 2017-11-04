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
        if (
            navigator.userAgent.indexOf('Safari') != -1
            && navigator.userAgent.indexOf('Chrome') == -1) {
            el.scrollIntoView()
        }
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
        return (
            <div
                className='calendar_yearlist_outerscrollbox'>
                <div
                    className='calendar__yearlist_scrollbox'>
                    <div className='calendar_yearlist_innerscrollbox'>
                        {/* Iterate over all the years */}
                        {years.map((year, key) => {
                            // Because safari doesn't play nice.
                            if (this.state.is_safari) {
                                // Give an extra className if this year is selected
                                let className = `calendar__yearlist_item calendar_yearitem_${year}`
                                if (this.props.selection.year === year) {
                                    className += ' calendar__yearlist_item--selected'
                                    // Render the selected year in safari
                                    return (
                                        <div
                                            ref={el => this.autofocus(el)}
                                            className={className}>{year}</div>
                                    )
                                } else {
                                    // Render a non-selected year in safari
                                    return (
                                        <div
                                            className={className}
                                            onClick={() => this.props.make_selection(year, 'year')}
                                            key={key}>{year}</div>
                                    )
                                }

                            } else {
                                // Give an extra className if this year is selected
                                let className = `calendar__yearlist_item calendar_yearitem_${year}`
                                if (this.props.selection.year === year) {
                                    className += ' calendar__yearlist_item--selected'
                                    // We center the years on the selected one by utilizing
                                    // the input autofocus property.
                                    // Unfortunately, that means we have a input we don't want
                                    // This hides it after the component mounts
                                    let input_style = {width: 0, height: 0}
                                    if (this.state.mounted) { input_style.display = 'none' }
                                    // Render selected year in non-safari browser
                                    return (
                                        <div key={key}>
                                            <div className={className}>{year}</div>
                                            <input
                                                style={input_style}
                                                autoFocus={true}
                                                type='text'
                                                onClick={() => this.props.make_selection(year, 'year')}
                                                key={key} />
                                        </div>
                                    )
                                } else {
                                    // Render non-selected year in non-safari browser
                                    return (
                                        <div
                                            className={className}
                                            onClick={() => this.props.make_selection(year, 'year')}
                                            key={key}>{year}</div>
                                    )
                                }
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