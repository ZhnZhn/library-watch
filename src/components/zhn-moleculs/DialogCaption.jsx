import SvgClose from '../zhn/SvgClose';
import {
  CL_NOT_SELECTED,
  crCnElBg
} from '../styleFn';

import {
  S_CAPTION_DIV,
  S_SVG_CLOSE
} from './Dialog.Style';

const CL_EL_BG = crCnElBg();

const DialogCaption = ({
  caption,
  style,
  onClose,
  children
}) => (
  <div className={CL_EL_BG} style={{...S_CAPTION_DIV, ...style}}>
     {children}
     <span className={CL_NOT_SELECTED}>
       {caption}
     </span>
     <SvgClose
        style={S_SVG_CLOSE}
        onClose={onClose}
      />
  </div>
);

export default DialogCaption
