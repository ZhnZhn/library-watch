import SvgClose from '../zhn/SvgClose';
import {
  CL_NOT_SELECTED,
  crCnElBg
} from '../styleFn';

const CL_EL_BG = crCnElBg()
, S_ROOT = {
  position: 'relative',
  color: 'silver',
  stroke: 'silver',
  padding: 5,
  textAlign: 'center',
  fontSize: 18
}
, S_SVG = {
  position: 'absolute',
  top: 6,
  right: 0
};

const DialogCaption = ({
  caption,
  onClose
}) => (
  <div className={CL_EL_BG} style={S_ROOT}>
     <span className={CL_NOT_SELECTED}>
       {caption}
     </span>
     <SvgClose
        style={S_SVG}
        onClose={onClose}
      />
  </div>
);

export default DialogCaption
