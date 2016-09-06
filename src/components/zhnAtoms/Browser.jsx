import React from 'react';

import ContainerStyles from '../styles/ContainerStyles';

const styles = ContainerStyles;

const Browser = (props) => {
    const {isShow, style, children} = props
        , _styleOpen = isShow ? {display: 'block'} : {display: 'none'}
        , _classOpen = isShow ? "show-popup" : null;
    return (
       <div
          className={_classOpen}
          style={Object.assign({}, styles.browserRootDiv, style, _styleOpen)}
        >
          {children}
       </div>
    )
};

export default Browser
