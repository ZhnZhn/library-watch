import React from 'react';

import STYLE from '../styles/ContainerStyles';

const CLASS_FOR_OPEN = "show-popup";

const Browser = (props) => {
    const { isShow, style, children } = props
        , _classRoot = isShow ? CLASS_FOR_OPEN : null
        , _styleRoot = isShow ? STYLE.displayBlock : STYLE.displayNone;
    return (
       <div
          className={_classRoot}
          style={Object.assign({}, STYLE.browserRootDiv, style, _styleRoot)}
        >
          {children}
       </div>
    )
};

export default Browser
