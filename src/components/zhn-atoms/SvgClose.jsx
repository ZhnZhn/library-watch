import React from 'react';
//import PropTypes from 'prop-types'

const CL = "svg-close";

const STYLE = {
  COLOR: "#ed5813",
  SVG : {
    padding: 3
  }
};

const SvgClose = ({
  className='',
  style,
  onClose
}) => (
  <button
      tabIndex="-1"
      className={`${CL} ${className}`}
      style={style}
      onClick={onClose}
   >
     <svg
       preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 12 12" width="100%" height="100%"
       style={STYLE.SVG}
       stroke={STYLE.COLOR}
       strokeWidth="2"
       strokeLinecap="round"
      >
        <path d="M 0,0 L 12,12" />
        <path d="M 12,0 L 0,12" />
     </svg>
   </button>
);
/*
SvgClose.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClose: PropTypes.func
}
*/

export default SvgClose
