import SvgClose from './SvgClose';

import {
  CL_NOT_SELECTED
} from '../styleFn';
import {
  CL_CAPTION,
  S_CAPTION,
  S_SVG_CLOSE
} from './CaptionRow.Style';

const CaptionRow = ({
  style,
  caption='',
  onClose,
  children,
}) => (
  <div
    className={CL_CAPTION}
    style={style}
  >
     <span
        className={CL_NOT_SELECTED}
        style={S_CAPTION}
     >
       {caption}
    </span>
    {children}
    <SvgClose
       style={S_SVG_CLOSE}
       onClose={onClose}
    />
  </div>
);

export default CaptionRow;
