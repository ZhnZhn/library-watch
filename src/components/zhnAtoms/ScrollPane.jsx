import React, { PropTypes } from 'react';

const ScrollPane = ({ style, className, children }) => (
  <div className={`with-scroll ${className}`} style={style}>
     {children}
  </div>
)

ScrollPane.propTypes = {
  style : PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}
ScrollPane.defaultProps = {
  className: ''
}

export default ScrollPane
