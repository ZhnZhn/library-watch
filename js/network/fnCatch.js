"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _Msg = _interopRequireDefault(require("../constants/Msg"));

var _default = function _default(_ref) {
  var error = _ref.error,
      option = _ref.option,
      onFailed = _ref.onFailed;

  if (error instanceof TypeError) {
    if (error.message.indexOf('code 503') !== -1) {
      option.alertCaption = _Msg["default"].Alert.SERVICE_UNAVAILABLE.caption;
      option.alertDescr = _Msg["default"].Alert.SERVICE_UNAVAILABLE.descr;
    } else if (error.message.indexOf('fetch') !== -1) {
      option.alertCaption = _Msg["default"].Alert.NETWORK_ERROR.caption;
      option.alertDescr = _Msg["default"].Alert.NETWORK_ERROR.descr;
    } else {
      option.alertCaption = error.errCaption ? error.errCaption : _Msg["default"].Alert.RUNTIME_ERROR.caption;
      option.alertDescr = error.message;
    }
  } else {
    option.alertCaption = error.errCaption ? error.errCaption : _Msg["default"].Alert.RUNTIME_ERROR.caption;
    option.alertDescr = error.message;
  }

  onFailed(option);
};

exports["default"] = _default;
//# sourceMappingURL=fnCatch.js.map