import React from 'react';

export default function graph(props) {
  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="252px" height="144px" viewBox="0 0 252 144" style={{enableBackground: 'new 0 0 252 144'}} xml:space="preserve" {...props}>
      <g id="layer">
        <rect x={36} y={83} width={20} height={50} />
        <rect x={66} y={83} width={20} height={50} />
        <rect x={96} y={83} width={20} height={50} />
        <rect x={126} y={83} width={20} height={50} />
        <rect x={156} y={83} width={20} height={50} />
        <rect x={186} y={83} width={20} height={50} />
      </g>
      <g id="axis">
        <polyline style={{fill: 'none', stroke: '#000000', strokeWidth: 2}} points="25,32 25,133 25,133 225,133 	" />
      </g>
    </svg>
  );
}
