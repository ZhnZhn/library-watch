//import PropTypes from "prop-types";
import { Svg100 } from '../zhn/svg/Svg';
import useResizeElement from './useResizeElement';

const CL_SVG_RESIZE = "svg-resize"
, S_ROOT_DIV = { display: 'inline-block' }
, S_BT_DIV = { marginLeft: 10 };

const SvgHrzResize = props => {
  const [
    leftBtHandlers,
    rightBtHandlers
  ] = useResizeElement(props);
  return (
    <div style={S_ROOT_DIV}>
      <div
         className={CL_SVG_RESIZE}
         style={S_BT_DIV}
         title="Resize container horizontal left"
         {...leftBtHandlers}
      >
         <Svg100>
           <path d="M 1,6 L 11,6" />
           <path d="M 6,2 L 1,6 6,10" fill="none" />
        </Svg100>
    </div>
    <div
       className={CL_SVG_RESIZE}
       style={S_BT_DIV}
       title="Resize container horizontal right"
       {...rightBtHandlers}
    >
      <Svg100>
        <path d="M 1,6 L 11,6" />
        <path d="M 6,2 L 11,6 6,10" fill="none" />
      </Svg100>
    </div>
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
