function add_val(offset, max) {
    return offset + (max * 100)
}

export default (props) => {
    let max = props.value
    let empty = '#E91E63'
    let full = '#26C6DA'
    return (
        <svg viewBox='0 0 900 250' xmlns='http://www.w3.org/2000/svg' style={{
            width: props.width || '10vw'
        }}>
            <rect width='1000' height='250' fill={empty} />
            <g id='green'>
                <polygon
                    points={`
                        ${add_val(-100, max)} 250
                        ${add_val(-100, max)} 0
                        ${add_val(-50, max)} 0
                        ${add_val(-30, max)} 125
                        ${add_val(-50, max)} 250
                    `}
                    fill={full} />
                <rect
                    width={(max * 100) + 50}
                    x={`${-145}`}
                    height='250'
                    fill={full} />
            </g>
        </svg>
    )
}