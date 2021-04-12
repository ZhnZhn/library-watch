"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _DialogStyles = _interopRequireDefault(require("../styles/DialogStyles"));

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from "prop-types";
var styles = _DialogStyles["default"];
var Styles = {
  MSG_SPAN: {
    whiteSpace: 'pre',
    fontWeight: 'bold'
  }
};

var ValidationMessagesFragment = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(ValidationMessagesFragment, _Component);

  function ValidationMessagesFragment() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = ValidationMessagesFragment.prototype;

  /*
   static propTypes = {
     validationMessages: PropTypes.array
   }
   */
  _proto._renderValidationMessages = function _renderValidationMessages(validationMessages) {
    return validationMessages.map(function (msg, index) {
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          style: styles.validationMessageNumber,
          children: index + 1
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          style: Styles.MSG_SPAN,
          children: msg
        })]
      }, index);
    });
  };

  _proto.render = function render() {
    var validationMessages = this.props.validationMessages;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: styles.validationContainer,
      children: this._renderValidationMessages(validationMessages)
    });
  };

  return ValidationMessagesFragment;
}(_react.Component);

ValidationMessagesFragment.defaultProps = {
  validationMessages: []
};
var _default = ValidationMessagesFragment;
exports["default"] = _default;
//# sourceMappingURL=ValidationMessagesFragment.js.map