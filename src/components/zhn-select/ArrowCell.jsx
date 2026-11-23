import { crColorStyle } from '../styleFn';
import { SvgArrowDown } from '../zhn/svg/Svg';

import {
  CL_BT_ARROW,
  COLOR_OPTIONS_OPEN,
  COLOR_OPTIONS_CLOSE
} from './CL';

const S_SVG_OPEN = crColorStyle(COLOR_OPTIONS_OPEN)
, S_SVG_CLOSE = crColorStyle(COLOR_OPTIONS_CLOSE);

const ArrowCell = ({
  isShowOption,
  onClick
}) => (
  <button
     aria-label="Toggle suggestions"
     type="button"
     className={CL_BT_ARROW}
     tabIndex="-1"
     onClick={onClick}
  >
    <SvgArrowDown
      style={isShowOption ? S_SVG_OPEN : S_SVG_CLOSE}
    />
  </button>
);

export default ArrowCell
