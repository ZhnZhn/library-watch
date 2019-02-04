import React, { Component } from 'react';

//import PropTypes from "prop-types";
const CL = 'with-scroll';

class ScrollPane extends Component {
  /*
  static propTypes = {
    style : PropTypes.object,
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  }
  */
  static defaultProps = {
    className: ''
  }

  _refNode = n => this._node = n

  render(){
    const { style, className, children } = this.props;
    return (
      <div
        ref={this._refNode}
        className={`${CL} ${className}`}
        style={style}
      >
         {children}
      </div>
    );
  }

  scrollTop(){
    if (this._node) {
      this._node.scrollTop = 0
    }
  }
}

export default ScrollPane
