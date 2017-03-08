'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DialogStyles = require('../styles/DialogStyles');

var _DialogStyles2 = _interopRequireDefault(_DialogStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = _DialogStyles2.default;
var Styles = {
  MSG_SPAN: {
    whiteSpace: 'pre',
    fontWeight: 'bold'
  }
};

var ValidationMessagesFragment = function (_Component) {
  (0, _inherits3.default)(ValidationMessagesFragment, _Component);

  function ValidationMessagesFragment() {
    (0, _classCallCheck3.default)(this, ValidationMessagesFragment);
    return (0, _possibleConstructorReturn3.default)(this, (ValidationMessagesFragment.__proto__ || Object.getPrototypeOf(ValidationMessagesFragment)).apply(this, arguments));
  }

  (0, _createClass3.default)(ValidationMessagesFragment, [{
    key: '_renderValidationMessages',
    value: function _renderValidationMessages(validationMessages) {
      return validationMessages.map(function (msg, index) {
        return _react2.default.createElement(
          'div',
          { key: index },
          _react2.default.createElement(
            'div',
            { style: styles.validationMessageNumber },
            index + 1
          ),
          _react2.default.createElement(
            'span',
            { style: Styles.MSG_SPAN },
            msg
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var validationMessages = this.props.validationMessages;

      return _react2.default.createElement(
        'div',
        { style: styles.validationContainer },
        this._renderValidationMessages(validationMessages)
      );
    }
  }]);
  return ValidationMessagesFragment;
}(_react.Component);

ValidationMessagesFragment.defaultProps = {
  validationMessages: []
};
process.env.NODE_ENV !== "production" ? ValidationMessagesFragment.propTypes = {
  validationMessages: _react.PropTypes.array
} : void 0;
exports.default = ValidationMessagesFragment;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\zhnMoleculs\ValidationMessagesFragment.js.map