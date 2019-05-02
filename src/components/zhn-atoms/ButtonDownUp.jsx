import React from 'react';

//import PropTypes from "prop-types";

import STYLE from './ButtonDownUp.Style';

const ButtonDownUp = (props) => {
    const {
      style, isUp,
      caption='', title='',
      onClick
    } = props
    , _style = isUp ? STYLE.ROOT_UP : STYLE.ROOT_DOWN
    , _circleStyle = isUp ? STYLE.CIRCLE_UP : STYLE.CIRCLE_DOWN;

    return (
      <button
         title={title}
         style={{...STYLE.ROOT, ...style, ..._style}}
         onClick={onClick}
      >
        <span style={{...STYLE.CIRCLE, ..._circleStyle}} />
        <span style={STYLE.ITEM}>
           {caption}
        </span>
     </button>
   );
}

/*
ButtonDownUp.propTypes = {
  style: PropTypes.object,
  isUp: PropTypes.bool,
  caption: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func
}
*/


export default ButtonDownUp
