import { crCn } from '../styleFn';
import Svg100 from './svg/Svg100';

const CL_SVG_CLOSE = "svg-close"
, S_SVG = {
  padding: 3,
  stroke: 'inherit'
};

const BtSvgX = (
  props
) => (
  <button
    aria-label={props.ariaLabel}
    type="button"
    tabIndex="-1"
    className={crCn(CL_SVG_CLOSE, props.className)}
    style={props.style}
    onClick={props.onClose}
  >
    <Svg100
      style={S_SVG}
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M 0,0 L 12,12" />
      <path d="M 12,0 L 0,12" />
    </Svg100>
  </button>
);

export default BtSvgX
