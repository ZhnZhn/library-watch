import React from 'react';
//import PropTypes from 'prop-types';

import STYLE from './CaptionRow.Style';
import SvgMore from './SvgMore';
import SvgClose from './SvgClose';

const CL = "not-selected";

const S = {
  ROOT: {
    paddingLeft: 4
  }
};

const _isFn = fn => typeof fn === 'function';

const ContainerCaption = ({
  style,
  caption,
  children,
  onMore,
  onClose
}) => (
  <div style={{ ...STYLE.ROOT, ...S.ROOT, ...style }}>
    {
       _isFn(onMore) &&
       <SvgMore
         onClick={onMore}
       />
     }
     <span
        className={CL}
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
