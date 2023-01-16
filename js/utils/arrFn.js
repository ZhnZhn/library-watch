"use strict";

exports.__esModule = true;
exports.isInArrByPropName = exports.findByPropNameInArrIndex = void 0;
var findByPropNameInArrIndex = function findByPropNameInArrIndex(propName, arr, value) {
  return arr.findIndex(function (item) {
    return item[propName] === value;
  });
};
exports.findByPropNameInArrIndex = findByPropNameInArrIndex;
var _isArr = Array.isArray;
var isInArrByPropName = function isInArrByPropName(propName, arr, value) {
  var _itemIndex = _isArr(arr) ? findByPropNameInArrIndex(propName, arr, value) : -1;
  return _itemIndex !== -1;
};
exports.isInArrByPropName = isInArrByPropName;
//# sourceMappingURL=arrFn.js.map