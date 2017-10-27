const Point = (props) => (
    <circle cx={props.x} cy={props.y} r={props.r} />
)
const Line = (props) => (
    <line
        x1={props.x1} y1={props.y1}
        x2={props.x2} y2={props.y2} />
)

export default (props) => {
    console.log('props.data', props.data)
    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 350 350'>
            <rect x='35.04' y='34.68' width='280.13' height='139.74' fill='#fff' id='base'
            />
            <g id='lines' fill='none' stroke='#00bcd4' strokeMiterlimit='10'>
                {props.data.values.map((point, key) => {
                    let point2 = props.data.values[key + 1]
                    if (key + 1 < props.data.values.length) {
                        let point2 = props.data.values[key + 1]
                        console.log('rendering line')
                        return <Line key={'line_' + key}
                            x1={point.x * 10} y1={point.y}
                            x2={point2.x * 10} y2={point2.y} />
                    } else {
                        return null
                    }
                })}
            </g>

            <g id='points' fill='#e91e63'>
                {props.data.values.map((point, key) => {
                    return <Point key={key} x={point.x * 10} y={point.y} r={2}/>
                })}
            </g>

            <g id='legend'>
                <Line key={'line_' + key}
                    x1={point.x * 10} y1={point.y}
                    x2={point2.x * 10} y2={point2.y} />
            </g>
        </svg>
    )
}