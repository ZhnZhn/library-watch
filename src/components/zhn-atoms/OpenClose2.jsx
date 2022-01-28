//import PropTypes from 'prop-types'
import { useCallback } from 'react';

import useToggle from '../hooks/useToggle';
import isKeyEnter from './isKeyEnter';

const CL_ROW_CAPTION = 'zhn-oc not-selected'
, CL_SHOW_POPUP = 'show-popup'
, S_ROOT = {
  backgroundColor: '#4d4d4d',
  lineHeight: 2
},
S_SVG = {
  display: 'inline-block',
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
, S_INLINE = { display: 'inline-block' }
, S_BLOCK = { display: 'block' }
, S_NONE = { display: 'none' };

const FILL_OPEN = 'yellow'
, FILL_CLOSE = '#4d4d4d'
, PATH_OPEN = "M 2,14 L 14,14 14,2 2,14"
, PATH_CLOSE = "M 2,2 L 14,8 2,14 2,2";

const OpenClose2 = ({
  isClose=true,
  style, styleNotSelected,
  styleCaptionRow, styleCaption, caption,
  fillOpen=FILL_OPEN,
  fillClose=FILL_CLOSE,
  isDraggable,
  option, onDragStart, onDragEnter, onDragOver, onDragLeave, onDrop,
  children
}) => {
  const [isOpen, _hToggle] = useToggle(!isClose)
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hKeyDown = useCallback(event => {
      if (isKeyEnter(event)){
        _hToggle()
      }
    }, [])
  // _hToggle
  /*eslint-enable react-hooks/exhaustive-deps */
  , _dragOption = isDraggable
     ? {
         draggable: true,
         onDragStart: onDragStart.bind(null, option),
         onDrop: onDrop.bind(null, option),
         onDragEnter: onDragEnter,
         onDragOver: onDragOver,
         onDragLeave: onDragLeave
     }
   : void 0;

  let _pathV, _fillV, _styleCollapse, _classShow, _styleNotSelected;
  if (isOpen){
    _pathV = PATH_OPEN;
    _fillV = fillOpen;
    _styleCollapse = S_BLOCK;
    _classShow = CL_SHOW_POPUP;
    _styleNotSelected = null;
  } else {
    _pathV = PATH_CLOSE;
    _fillV = fillClose;
    _styleCollapse = S_NONE;
    _classShow = null;
    _styleNotSelected = styleNotSelected;
  }

  return (
    <div style={{...S_ROOT, ...style}}>
      <div
         className={CL_ROW_CAPTION}
         style={{ ...styleCaptionRow, ..._styleNotSelected }}
         onClick={_hToggle}
         tabIndex="0"
         role="menuitem"
         onKeyDown={_hKeyDown}
         {..._dragOption}
       >
        <div style={S_SVG}>
           <svg
              viewBox="0 0 16 16" width="100%" height="100%"
              preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
              style={S_INLINE}
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

  children: PropTypes.oneOfType([
     PropTypes.arrayOf(PropTypes.node),
     PropTypes.node
  ])
}
*/

export default OpenClose2
