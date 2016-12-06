'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ContainerStyles = require('../styles/ContainerStyles');

var _ContainerStyles2 = _interopRequireDefault(_ContainerStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = _ContainerStyles2.default;

var Browser = function Browser(props) {
   var isShow = props.isShow,
       style = props.style,
       children = props.children,
       _styleOpen = isShow ? { display: 'block' } : { display: 'none' },
       _classOpen = isShow ? "show-popup" : null;

   return _react2.default.createElement(
      'div',
      {
         className: _classOpen,
         style: Object.assign({}, styles.browserRootDiv, style, _styleOpen)
      },
      children
   );
};

exports.default = Browser;
//# sourceMappingURL=Browser.js.map