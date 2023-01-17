"use strict";

exports.__esModule = true;
exports.isRegularObj = exports.isNumber = exports.isNotEmptyStr = exports.isArr = void 0;
var isNumber = function isNumber(n) {
  return typeof n === 'number' && n - n === 0;
};
exports.isNumber = isNumber;
var isArr = Array.isArray;
exports.isArr = isArr;
var isRegularObj = function isRegularObj(v) {
  return !!v && typeof v === 'object' && !isArr(v);
};
exports.isRegularObj = isRegularObj;
var isNotEmptyStr = function isNotEmptyStr(str) {
  return typeof str === 'string' && str !== '';
};
exports.isNotEmptyStr = isNotEmptyStr;
//# sourceMappingURL=is.js.map