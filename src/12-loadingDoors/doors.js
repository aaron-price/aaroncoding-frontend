import React from 'react';

export default function Doors(props) {
  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="350px" height="350px" viewBox="0 0 350 350" style={{enableBackground: 'new 0 0 350 350'}} xml:space="preserve" {...props}>
      <g id="horizontal">
        <rect x="15.5" y="20.5" style={{fill: '#455A64', stroke: '#000000', strokeWidth: 3, strokeMiterlimit: 10}} width={159} height={309} />
        <rect x="174.5" y="20.5" style={{fill: '#455A64', stroke: '#000000', strokeWidth: 3, strokeMiterlimit: 10}} width={159} height={309} />
        <rect x={56} y={157} style={{fill: 'none'}} width={78} height={36} />
        <rect x={215} y={157} style={{fill: 'none'}} width={78} height={36} />
      </g>
      <g id="Layer_2" style={{display: 'none'}}>
        <rect x="15.5" y="20.5" style={{display: 'inline', fill: '#616161', stroke: '#000000', strokeWidth: 3, strokeMiterlimit: 10}} width={318} height={155} />
        <rect x="15.5" y="175.5" style={{display: 'inline', fill: '#616161', stroke: '#000000', strokeWidth: 3, strokeMiterlimit: 10}} width={318} height={155} />
        <rect x={108} y={82} style={{display: 'inline', fill: 'none'}} width={117} height={39} />
        <rect x={116} y={234} style={{display: 'inline', fill: 'none'}} width={117} height={39} />
      </g>
    </svg>
  );
}
