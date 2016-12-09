import React from 'react';

import STYLE from './ButtonDownUp.Style';

const ButtonDownUp = (props) => {
    const { caption='', title='', isUp, styleRoot, onClick } = props
        , _styleRoot = (isUp) ? STYLE.ROOT_UP : STYLE.ROOT_DOWN
        , _styleCircle = (isUp) ? STYLE.CIRCLE_UP : STYLE.CIRCLE_DOWN;

    return (
      <span
         title={title}
         style={Object.assign({}, STYLE.ROOT, styleRoot, _styleRoot)}
         onClick={onClick}
      >
        <span style={Object.assign({}, STYLE.CIRCLE, _styleCircle)}>
        </span>
        <span style={STYLE.ITEM}>
           {caption}
        </span>
     </span>
   );
};

export default ButtonDownUp
