import React from 'react';
//import PropTypes from 'prop-types'

const CL = "svg-close";

const STYLE = {
  COLOR: "#ed5813",
  SVG : {
    padding: '3px'
  }
};

const SvgClose = ({
  className,
  style,
  onClose
}) => (
   <div
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
   </div>
);
/*
SvgClose.propTypes = {
  style: PropTypes.object,
  onClose: PropTypes.func
}
*/
SvgClose.defaultProps = {
  className: ''
};


export default SvgClose
