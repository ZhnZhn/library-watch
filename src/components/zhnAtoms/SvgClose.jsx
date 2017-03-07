import React, { PropTypes } from 'react';

const STYLE = {
  SVG : {
    padding: '3px'
  }
};

const SvgClose = ({ style, onClose }) => (
   <div
      className="svg-close"
      style={style}
      onClick={onClose}
   >
     <svg viewBox="0 0 12 12" width="100%" height="100%"
          style={STYLE.SVG}
          preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0,0 L 12,12" strokeWidth="2" stroke="#ED5813"
                strokeLinecap="round"
          >
          </path>
          <path d="M 12,0 L 0,12" strokeWidth="2" stroke="#ED5813"
                strokeLinecap="round"
          >
          </path>
     </svg>
   </div>
)

SvgClose.propTypes = {
  style: PropTypes.object,
  onClose: PropTypes.func
}
SvgClose.defaultProps = {
  onClose: () => {}
}

export default SvgClose
