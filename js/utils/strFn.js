"use strict";

exports.__esModule = true;
exports.setFirstToUpperCase = exports.isNotEmptyStr = void 0;
var isNotEmptyStr = function isNotEmptyStr(str) {
  return typeof str === 'string' && str !== '';
};
exports.isNotEmptyStr = isNotEmptyStr;
var setFirstToUpperCase = function setFirstToUpperCase(str) {
  return isNotEmptyStr(str) ? str[0].toUpperCase() + str.substring(1) : str;
};
exports.setFirstToUpperCase = setFirstToUpperCase;
//# sourceMappingURL=strFn.js.map