"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _ErrMsg = _interopRequireDefault(require("./ErrMsg"));

var _jsxRuntime = require("react/jsx-runtime");

var _isObj = function _isObj(obj) {
  return typeof obj === 'object' && obj !== null;
};

var checkResponseJson = function checkResponseJson(json) {
  if (!_isObj(json)) {
    return null;
  }

  var errMsg = json.errMsg;

  if (errMsg) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ErrMsg["default"], {
      errMsg: errMsg
    });
  }

  return true;
};

var _default = checkResponseJson;
exports["default"] = _default;
//# sourceMappingURL=checkResponseJson.js.map