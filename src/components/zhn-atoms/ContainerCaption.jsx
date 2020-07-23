import React from 'react';
//import PropTypes from 'prop-types';

import SvgMore from './SvgMore';
import SvgClose from './SvgClose';
import STYLE from './CaptionRow.Style';


const _isFn = fn => typeof fn === 'function';

const ContainerCaption = ({
  style, moreStyle,
  caption,
  children,
  onMore,
  onClose
}) => (
  <div className={STYLE.CL_CAPTION} style={style}>
    {
       _isFn(onMore) &&
       <SvgMore
         style={moreStyle}
         onClick={onMore}
       />
     }
     <span
        className={STYLE.CL_NOT_SELECTED}
        style={STYLE.SPAN}
     >
       {caption}
    </span>
    {children}
    <SvgClose
       style={STYLE.SVG_CLOSE}
       onClose={onClose}
    />
  </div>
);

/*
ContainerCaption.propTypes = {
  caption: PropTypes.string,
  styleRoot: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  onMore: PropTypes.func,
  onClose: PropTypes.func
}
*/
ContainerCaption.defaultProps = {
  caption: ''
}


export default ContainerCaption;
