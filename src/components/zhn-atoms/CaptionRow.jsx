import React from 'react';
//import PropTypes from 'prop-types';

import STYLE from './CaptionRow.Style';
import SvgClose from './SvgClose';

const CL = "not-selected";

const CaptionRow = ({ caption, children, styleRoot, onClose }) => (
  <div style={{ ...STYLE.ROOT, ...styleRoot }}>
     <span
        className={CL}
        style={STYLE.SPAN}
     >
       {caption}
    </span>
    {children}
    <SvgClose
       style={STYLE.SVG_CLOSE}
       onClose={onClose}
    />
  </div>
);
/*
CaptionRow.propTypes = {
  caption: PropTypes.string,
  styleRoot: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  onClose: PropTypes.func
}
*/
CaptionRow.defaultProps = {
  caption: ''
}


export default CaptionRow;
