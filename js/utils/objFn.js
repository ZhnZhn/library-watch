"use strict";

exports.__esModule = true;
exports.findInPropArrayByPropItem = void 0;
var _arrFn = require("./arrFn");
var _isArr = Array.isArray;
var _isRegularObj = function _isRegularObj(v) {
  return v && typeof v === 'object' && !_isArr(v);
};
var findInPropArrayByPropItem = function findInPropArrayByPropItem(propNameArr, propNameItem, obj, value) {
  return (0, _arrFn.findByPropNameInArrItem)(propNameItem, _isRegularObj(obj) && obj[propNameArr], value);
};
exports.findInPropArrayByPropItem = findInPropArrayByPropItem;
//# sourceMappingURL=objFn.js.map