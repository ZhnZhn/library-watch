'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SHOW_POPUP = "show-popup",
    STYLES = {
  SHOW: {
    display: 'block'
  },
  HIDE: {
    display: 'none'
  }
};

var ShowHide = function ShowHide(props) {
  var isShow = props.isShow,
      style = props.style,
      children = props.children,
      _styleShow = isShow ? STYLES.SHOW : STYLES.HIDE,
      _classShow = isShow ? SHOW_POPUP : null;

  return _react2.default.createElement(
    'div',
    { className: _classShow, style: Object.assign({}, style, _styleShow) },
    children
  );
};

exports.default = ShowHide;
//# sourceMappingURL=ShowHide.js.map