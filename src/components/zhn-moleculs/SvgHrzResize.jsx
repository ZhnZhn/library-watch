//import PropTypes from "prop-types";
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
         <svg viewBox="0 0 12 12" width="100%" height="100%"
             preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <path
                 d="M 1,6 L 11,6"
                 strokeWidth="2"
                 strokeLinecap="round"
              />
             <path
                 d="M 6,2 L 1,6 6,10"
                 strokeWidth="2"
                 strokeLinecap="round"
                 fill="none"
             />
        </svg>
    </div>
    <div
       className={CL_SVG_RESIZE}
       style={S_BT_DIV}
       title="Resize container horizontal right"
       {...rightBtHandlers}
    >
      <svg viewBox="0 0 12 12" width="100%" height="100%"
           preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
           <path
              d="M 1,6 L 11,6"
              strokeWidth="2"
              strokeLinecap="round"
          />
          <path
              d="M 6,2 L 11,6 6,10"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
         />
      </svg>
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
