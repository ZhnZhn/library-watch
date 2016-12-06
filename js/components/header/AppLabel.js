'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppLabel = function AppLabel(props) {
  var caption = props.caption,
      title = props.title,
      style = props.style;

  return _react2.default.createElement(
    'span',
    { style: style, title: title },
    caption
  );
};

exports.default = AppLabel;
//# sourceMappingURL=AppLabel.js.map