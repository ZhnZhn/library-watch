import React, { PropTypes } from 'react'

import STYLE from './CaptionRow.Style';
import SvgClose from './SvgClose';

const CLASS_NOT_SELECTED = "not-selected";

const CaptionRow = ({ caption, children, styleRoot, onClose }) => (
  <div style={{ ...STYLE.ROOT, ...styleRoot }}>
     <span
        className={CLASS_NOT_SELECTED}
        style={STYLE.SPAN}
     >
       {caption}
    </span>
    {children}
    <SvgClose onClose={onClose} />
  </div>
);

CaptionRow.propTypes = {
  caption: PropTypes.string,
  styleRoot: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  onClose: PropTypes.func
}
CaptionRow.defaultProps = {
  caption: '',
  onClose: () => {}
}


export default CaptionRow;
