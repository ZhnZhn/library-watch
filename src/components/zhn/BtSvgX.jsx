import { crCn } from '../styleFn';
import { Svg100 } from './svg/Svg';

const CL_SVG_CLOSE = "svg-close"
, S_SVG = { padding: 2 };

export const SvgX = () => (
  <Svg100 style={S_SVG}>
    <path d="M 0,0 L 12,12" />
    <path d="M 12,0 L 0,12" />
  </Svg100>
)

export const BtSvgX = (
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
    <SvgX />
  </button>
)
