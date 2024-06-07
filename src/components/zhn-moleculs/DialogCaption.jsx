import SvgClose from '../zhn-atoms/SvgClose';
import { CL_NOT_SELECTED } from '../styles/CL';

const S_ROOT = {
  color: 'silver',
  stroke: 'silver',
  backgroundColor: '#232f3b',
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
  <div style={S_ROOT}>
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
