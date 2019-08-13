'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ContainerStyles = require('../styles/ContainerStyles');

var _ContainerStyles2 = _interopRequireDefault(_ContainerStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL_OPEN = "show-popup";

//import PropTypes from "prop-types";

var Browser = function Browser(_ref) {
   var isShow = _ref.isShow,
       style = _ref.style,
       children = _ref.children;

   var _className = isShow ? CL_OPEN : null,
       _style = isShow ? _ContainerStyles2.default.displayBlock : _ContainerStyles2.default.displayNone;
   return _react2.default.createElement(
      'div',
      {
         className: _className,
         style: (0, _extends3.default)({}, _ContainerStyles2.default.browserRootDiv, style, _style)
      },
      children
   );
};

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

exports.default = Browser;
//# sourceMappingURL=Browser.js.map