import React from 'react';

//import PropTypes from "prop-types";

import STYLE from '../styles/ContainerStyles';

const CL_OPEN = "show-popup";

const Browser = ({ isShow, style, children }) => {
    const _className = isShow ? CL_OPEN : null
        , _style = isShow 
             ? STYLE.displayBlock : STYLE.displayNone;
    return (
       <div
          className={_className}
          style={{ ...STYLE.browserRootDiv, ...style, ..._style}}
        >
          {children}
       </div>
    )
}

/*
Browser.propTypes = {
  isShow: PropTypes.bool,
  style: PropTypes.object,
  children: PropTypes.oneOfType([
     PropTypes.arrayOf(PropTypes.node),
     PropTypes.node
  ])
}
*/

export default Browser
