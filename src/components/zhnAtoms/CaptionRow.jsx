import React from 'react'

import STYLE from './CaptionRow.Style';
import SvgClose from './SvgClose';

const CLASS_NOT_SELECTED = "not-selected";

const CaptionRow = ({ caption, children, styleRoot, onClose }) => (
  <div style={Object.assign({}, STYLE.captionDiv, styleRoot)}>
     <span
        className={CLASS_NOT_SELECTED}
        style={STYLE.captionSpan}
     >
       {caption}
    </span>
    {children}
    <SvgClose onClose={onClose} />
  </div>
);


export default CaptionRow;
