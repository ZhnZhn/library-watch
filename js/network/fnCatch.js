"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _Msg = require("../constants/Msg");

var _hasToken = function _hasToken(str, token) {
  return (str || '').indexOf(token) !== -1;
};

var _default = function _default(_ref) {
  var error = _ref.error,
      option = _ref.option,
      onFailed = _ref.onFailed;

  var _ref2 = error || {},
      errCaption = _ref2.errCaption,
      message = _ref2.message;

  if (error instanceof TypeError) {
    if (_hasToken(message, 'code 503')) {
      (0, _Msg.setAlertMsgTo)(option, _Msg.ALERT_SERVICE_UNAVAILABLE);
    } else if (_hasToken(message, 'fetch')) {
      (0, _Msg.setAlertMsgTo)(option, _Msg.ALERT_NETWORK_ERROR);
    } else {
      option.alertCaption = errCaption || _Msg.ALERT_RUNTIME_ERROR.caption;
      option.alertDescr = message;
    }
  } else {
    option.alertCaption = errCaption || _Msg.ALERT_RUNTIME_ERROR.caption;
    option.alertDescr = message;
  }

  onFailed(option);
};

exports["default"] = _default;
//# sourceMappingURL=fnCatch.js.map