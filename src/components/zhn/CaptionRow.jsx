import CaptionToken from './CaptionToken';
import SvgClose from './SvgClose';

import {
  CL_CAPTION,
  S_SVG_CLOSE
} from './CaptionRow.Style';

const CaptionRow = (props) => (
  <div
    className={CL_CAPTION}
    style={props.style}
  >
    <CaptionToken
      caption={props.caption}
    />
    {props.children}
    <SvgClose
      style={S_SVG_CLOSE}
      onClose={props.onClose}
    />
  </div>
);

export default CaptionRow;
