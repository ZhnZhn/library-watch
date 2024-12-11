"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _ErrMsg = _interopRequireDefault(require("../ErrMsg"));
var _jsxRuntime = require("react/jsx-runtime");
const _isObj = obj => typeof obj === 'object' && obj !== null;
const checkResponseJson = json => {
  if (!_isObj(json)) {
    return null;
  }
  const {
    errMsg
  } = json;
  if (errMsg) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ErrMsg.default, {
      errMsg: errMsg
    });
  }
  return true;
};
var _default = exports.default = checkResponseJson;
//# sourceMappingURL=checkResponseJson.js.map