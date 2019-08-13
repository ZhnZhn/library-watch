import React from 'react';
//import PropTypes from 'prop-types';

import STYLE from './CaptionRow.Style';
import SvgClose from './SvgClose';

const CaptionRow = ({ caption='', children, styleRoot, onClose }) => (
  <div className={STYLE.CL_CAPTION} style={styleRoot}>
     <span
        className={STYLE.CL_NOT_SELECTED}
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

export default CaptionRow;
