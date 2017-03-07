'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var REPLACER_PATTERN = /(.)(?=(\d{3})+$)/g;

var FormattedInteger = function FormattedInteger(_ref) {
  var value = _ref.value,
      style = _ref.style;

  if (value >= 1000) {
    value = ('' + value).replace(REPLACER_PATTERN, '$1,');
  }

  return _react2.default.createElement(
    'span',
    { style: style },
    value
  );
};

process.env.NODE_ENV !== "production" ? FormattedInteger.propTypes = {
  value: _react.PropTypes.number,
  style: _react.PropTypes.object
} : void 0;
FormattedInteger.defaultProps = {
  value: 0
};

exports.default = FormattedInteger;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\zhnAtoms\FormattedInteger.js.map