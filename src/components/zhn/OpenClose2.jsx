//import PropTypes from "prop-types";
import {
  S_BLOCK,
  S_INLINE_BLOCK,
  S_NONE,
  CL_SHOW_POPUP,
  crClNotSelected
} from '../styleFn';

import useKeyEnter from '../hooks/useKeyEnter';
import useToggle from '../hooks/useToggle';

const CL_ROW_CAPTION = crClNotSelected("zhn-oc")
, S_ROOT = {
  backgroundColor: '#4d4d4d',
  lineHeight: 2
},
S_SVG = {
  ...S_INLINE_BLOCK,
  width: 16,
  height: 16
},
S_CAPTION = {
  color: '#1b2836',
  paddingLeft: 4,
  verticalAlign: 'top',
  fontFamily: 'Roboto, Arial Unicode MS, Arial, sans-serif',
  fontWeight: 'bold',
  fontSize: '16px',
  cursor: 'pointer'
}
, FILL_OPEN = 'yellow'
, FILL_CLOSE = '#4d4d4d'
, PATH_OPEN = "M 2,14 L 14,14 14,2 2,14"
, PATH_CLOSE = "M 2,2 L 14,8 2,14 2,2";

const OpenClose2 = ({
  refItem,
  isClose=true,
  style,
  styleNotSelected,
  styleCaptionRow,
  styleCaption,
  caption,
  fillOpen=FILL_OPEN,
  fillClose=FILL_CLOSE,
  dndHandlers,
  children
}) => {
  const [
    isOpen,
    _hToggle
  ] = useToggle(!isClose)
  , _hKeyDown = useKeyEnter(_hToggle)
  , [
    _pathV,
    _fillV,
    _styleCollapse,
    _classShow,
    _styleNotSelected
  ] = isOpen ? [
    PATH_OPEN,
    fillOpen,
    S_BLOCK,
    CL_SHOW_POPUP,
    null
  ] : [
    PATH_CLOSE,
    fillClose,
    S_NONE,
    null,
    styleNotSelected
  ];

  return (
    <div style={{...S_ROOT, ...style}}>
      <div
         ref={refItem}
         tabIndex="0"
         role="menuitem"
         className={CL_ROW_CAPTION}
         style={{...styleCaptionRow, ..._styleNotSelected}}
         onClick={_hToggle}
         onKeyDown={_hKeyDown}
         {...dndHandlers}
       >
        <div style={S_SVG}>
           <svg
              viewBox="0 0 16 16" width="100%" height="100%"
              preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
              style={S_INLINE_BLOCK}
            >
             <path
                d={_pathV}
                fill={_fillV}
                strokeWidth="1"
                stroke={fillOpen}
             />
           </svg>
       </div>
       <span style={{...S_CAPTION, ...styleCaption}} >
          {caption}
       </span>
     </div>
     <div
       className={_classShow}
       style={_styleCollapse}
     >
       {children}
     </div>
   </div>
  );
};

/*
OpenClose2.propTypes = {
  isClose: PropTypes.bool,

  style: PropTypes.object,
  styleNotSelected: PropTypes.object,
  styleCpationRow: PropTypes.object,
  styleCaption: PropTypes.object,

  caption: PropTypes.string,
  fillOpen: PropTypes.string,
  fillClose: PropTypes.string,

  isDraggable: PropTypes.bool,
  option: PropTypes.object,
  onDragStart: PropTypes.func,
  onDragEnter: PropTypes.func,
  onDragOver: PropTypes.func,
  onDragLeave: PropTypes.func,
  onDrop: PropTypes.func,

  onFocus: PropTypes.func,

  children: PropTypes.oneOfType([
     PropTypes.arrayOf(PropTypes.node),
     PropTypes.node
  ])
}
*/

export default OpenClose2
