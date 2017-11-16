export default (props) => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 777 386' style={{width: '10vw'}}>
            <defs>
                <lineargradient id='linear-gradient' x1='8.91' y1='196.45' x2='767.09'
                    y2='196.45' gradientunits='userSpaceOnUse'>
                    <stop offset='0' stopColor='#90a4ae' />
                    <stop offset='.58' stopColor='#78909c' />
                    <stop offset='1' stopColor='#607d8b' />
                </lineargradient>
                <lineargradient id='linear-gradient-2' x1='159.94' y1='242' x2='612.06'
                    y2='242' gradientunits='userSpaceOnUse'>
                    <stop offset='0' stopColor='#4caf50' />
                    <stop offset='.58' stopColor='#76944a' />
                    <stop offset='1' stopColor='#f44336' />
                </lineargradient>
            </defs>
            <path d='M8.91,386A377.66,377.66,0,0,1,42.09,231.12c85.54-191,309.75-276.57,500.79-191C683.55,103.08,767,241.25,767.09,386Z'
                stroke='#000' strokeMiterlimit='10' opacity='.48' fill='url(#linear-gradient)'
                id='Layer_2' />
            <g id='Layer_3'>
                <path d='M160,357h21s15-170,173-170S523,357,523,357h89s10-230-226-230S160,357,160,357Z'
                    fill='url(#linear-gradient-2)' />
                <rect x='69' y='343' width='65' height='23' rx='11.5' ry='11.5' fill='#093'
                />
                <rect x='153' y='141.84' width='65' height='23' rx='11.5' ry='11.5' transform='rotate(45 185.505 153.339)'
                    fill='#0c3' />
                <rect x='353.5' y='57' width='65' height='23' rx='11.5' ry='11.5' transform='rotate(90 386 68.5)'
                    fill='#6c0' />
                <rect x='556' y='140.84' width='65' height='23' rx='11.5' ry='11.5' transform='rotate(-45 588.5 152.336)'
                    fill='#f60' />
                <rect x='639' y='343' width='65' height='23' rx='11.5' ry='11.5' fill='red'
                />
                <rect x='652.78' y='266.18' width='44' height='23' rx='11.5' ry='11.5'
                    transform='rotate(164.29 674.789 277.652)' />
                <rect x='623.73' y='192.36' width='44' height='23' rx='11.5' ry='11.5'
                    transform='rotate(150 645.731 203.859)' />
                <rect x='513.73' y='83.36' width='44' height='23' rx='11.5' ry='11.5'
                    transform='rotate(120 535.725 94.861)' />
                <rect x='441.73' y='52.36' width='44' height='23' rx='11.5' ry='11.5'
                    transform='rotate(107.96 463.735 63.873)' />
                <rect x='287.73' y='56' width='44' height='23' rx='11.5' ry='11.5' transform='rotate(77.41 309.734 67.513)'
                />
                <rect x='215.73' y='85.36' width='44' height='23' rx='11.5' ry='11.5'
                    transform='rotate(53.29 237.728 96.857)' />
                <rect x='105.73' y='192.36' width='44' height='23' rx='11.5' ry='11.5'
                    transform='rotate(30 127.723 203.857)' />
                <rect x='79.5' y='266.18' width='44' height='23' rx='11.5' ry='11.5' transform='rotate(15.01 101.48 277.61)'
                />
            </g>
            <rect x='369' y='36' width='34' height='318.5' rx='12' ry='12' fill='#0e232b'
                stroke='#592a0b' strokeMiterlimit='10' id='dial'
                transformOrigin='bottom'
                transform='rotate(100 deg)'/>
            <path d='M309.73,386h154s8.7-93-75-93S309.73,386,309.73,386Z' id='Layer_4'/>
        </svg>
    )
}