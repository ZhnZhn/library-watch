"use strict";

exports.__esModule = true;
exports.setFirstToUpperCase = void 0;
var _isStr = function _isStr(str) {
  return typeof str === 'string';
};
var setFirstToUpperCase = function setFirstToUpperCase(str) {
  return str && _isStr(str) ? str[0].toUpperCase() + str.substring(1) : str;
};
exports.setFirstToUpperCase = setFirstToUpperCase;
//# sourceMappingURL=strFn.js.map