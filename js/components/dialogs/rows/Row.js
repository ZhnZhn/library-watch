'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DialogStyles = require('../../styles/DialogStyles');

var _DialogStyles2 = _interopRequireDefault(_DialogStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Plain = function Plain(_ref) {
  var style = _ref.style,
      children = _ref.children;
  return _react2.default.createElement(
    'div',
    { style: (0, _extends3.default)({}, _DialogStyles2.default.rowDiv, style) },
    children
  );
};

var Row = {
  Plain: Plain
};

exports.default = Row;
//# sourceMappingURL=Row.js.map