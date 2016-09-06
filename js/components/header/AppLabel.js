'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppLabel = function AppLabel(props) {
  var caption = props.caption;
  var title = props.title;
  var style = props.style;

  return _react2.default.createElement(
    'span',
    { style: style, title: title },
    caption
  );
};

exports.default = AppLabel;
//# sourceMappingURL=D:\_Dev\_React\_Template_2\js\components\header\AppLabel.js.map