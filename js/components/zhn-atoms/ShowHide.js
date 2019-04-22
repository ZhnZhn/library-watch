'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import PropTypes from "prop-types";

var SHOW_POPUP = "show-popup",
    STYLE = {
  SHOW: {
    display: 'block'
  },
  HIDE: {
    display: 'none'
  }
};

var ShowHide = function ShowHide(_ref) {
  var isShow = _ref.isShow,
      style = _ref.style,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className,
      children = _ref.children;

  var _style = isShow ? STYLE.SHOW : STYLE.HIDE,
      _className = isShow ? className + ' ' + SHOW_POPUP : null;

  return _react2.default.createElement(
    'div',
    {
      className: _className,
      style: (0, _extends3.default)({}, style, _style)
    },
    children
  );
};

/*
ShowHide.propTypes = {
  isShow: PropTypes.bool,
  style: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}
*/

exports.default = ShowHide;
//# sourceMappingURL=ShowHide.js.map