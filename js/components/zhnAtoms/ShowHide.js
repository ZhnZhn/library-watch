'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      children = _ref.children;

  var _style = isShow ? STYLE.SHOW : STYLE.HIDE,
      _class = isShow ? SHOW_POPUP : null;

  return _react2.default.createElement(
    'div',
    { className: _class, style: (0, _extends3.default)({}, style, _style) },
    children
  );
};

process.env.NODE_ENV !== "production" ? ShowHide.propTypes = {
  isShow: _react.PropTypes.bool,
  style: _react.PropTypes.object,
  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node])
} : void 0;

exports.default = ShowHide;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\zhnAtoms\ShowHide.js.map