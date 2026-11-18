import CaptionToken from './CaptionToken';
import BtSvgX from './BtSvgX';

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
    <BtSvgX
      ariaLabel="Close"
      style={S_SVG_CLOSE}
      onClose={props.onClose}
    />
  </div>
);

export default CaptionRow;
