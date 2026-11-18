import { BtSvgX } from '../zhn/BtSvgX';
import {
  CL_NOT_SELECTED,
  crCnElBg
} from '../styleFn';

import {
  S_CAPTION_DIV,
  S_SVG_CLOSE
} from './Dialog.Style';

const CL_EL_BG = crCnElBg();

const DialogCaption = (
 props
) => (
  <div className={CL_EL_BG} style={{...S_CAPTION_DIV, ...props.style}}>
     {props.children}
     <span className={CL_NOT_SELECTED}>
       {props.caption}
     </span>
     <BtSvgX
        ariaLabel="Close dialog"
        style={S_SVG_CLOSE}
        onClose={props.onClose}
      />
  </div>
);

export default DialogCaption
