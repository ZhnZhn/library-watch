import React from 'react';

const ScrollPane = (props) => {
    const { style, className='', children } = props;
    return (
      <div className={`with-scroll ${className}`} style={style}>
         {children}
      </div>
    )
};

export default ScrollPane
