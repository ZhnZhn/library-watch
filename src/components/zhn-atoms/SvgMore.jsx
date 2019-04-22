import React from 'react'

const CL = 'focusable';

const S = {
  BT: {
    verticalAlign: 'middle',
    paddingLeft: 6,
    paddingRight: 6,
    fill: 'silver',
    stroke: 'silver',
    cursor: 'pointer'
  }
};

const SvgMore = ({
  style, svgStyle,
  btRef,
  onClick
}) => (
  <button
    ref={btRef}
    className={CL}
    style={{...S.BT, ...style }}
    onClick={onClick}
  >
    <svg
      style={svgStyle}
      width="6px" height="22px"
      viewBox="0 0 6 22"
      preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="3" cy="4" r="2" />
      <circle cx="3" cy="11" r="2" />
      <circle cx="3" cy="18" r="2" />
    </svg>
  </button>
);


export default SvgMore
