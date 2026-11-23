//import PropTypes from "prop-types";
import { S_INLINE_BLOCK } from '../styleFn';

import { Svg100 } from '../zhn/svg/Svg';
import useResizeElement from './useResizeElement';

const CL_SVG_RESIZE = "svg-resize"
, S_BT_LEFT = {
  marginLeft: 10
}
, S_BT_RIGHT = {
  ...S_BT_LEFT,
  transform: 'rotate(180deg)'
}
, _crResizeTitle = (
  leftOrRight
) => `Resize container horizontal ${leftOrRight}`
, TITLE_RESIZE_LEFT = _crResizeTitle("left")
, TITLE_RESIZE_RIGHT = _crResizeTitle("right");

const SvgLongArrowLeft = () => (
  <Svg100>
    <path d="M 1,6 L 11,6" />
    <path d="M 6,2 L 1,6 6,10" fill="none" />
  </Svg100>
);

const SvgHrzResize = props => {
  const [
    leftBtHandlers,
    rightBtHandlers
  ] = useResizeElement(props);
  return (
    <div style={S_INLINE_BLOCK}>
      <button
        aria-label={TITLE_RESIZE_LEFT}
        title={TITLE_RESIZE_LEFT}
        type="button"
        className={CL_SVG_RESIZE}
        style={S_BT_LEFT}
        {...leftBtHandlers}
      >
        <SvgLongArrowLeft />
      </button>
      <button
        aria-label={TITLE_RESIZE_RIGHT}
        title={TITLE_RESIZE_RIGHT}
        type="button"
        className={CL_SVG_RESIZE}
        style={S_BT_RIGHT}
        {...rightBtHandlers}
      >
       <SvgLongArrowLeft />
      </button>
    </div>
  );
};

/*
SvgHrzResize.propTypes = {
  elementRef: PropTypes.ref,
  initWidth: PropTypes.number,
  minWidth: PropTypes.number,
  maxWidth: PropTypes.number,
  onResizeAfter: PropTypes.func
}
*/

export default SvgHrzResize
