import React from 'react';

const ScrollPane = (props) => {
    const { style, children } = props;
    return (
      <div className="with-scroll" style={style}>
         {children}
      </div>
    )
};

export default ScrollPane
