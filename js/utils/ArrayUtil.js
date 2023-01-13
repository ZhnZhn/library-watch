"use strict";

exports.__esModule = true;
exports.findArrIndexByProp = exports.checkInArrSameByProp = void 0;
var findArrIndexByProp = function findArrIndexByProp(propItem, arr, value) {
  return arr.findIndex(function (item, index) {
    return item[propItem] === value;
  });
};
exports.findArrIndexByProp = findArrIndexByProp;
var checkInArrSameByProp = function checkInArrSameByProp(propItem, arr, value) {
  var _itemIndex = arr ? arr.findIndex(function (item, i) {
    return item[propItem] === value;
  }) : -1;
  return _itemIndex !== -1;
};
exports.checkInArrSameByProp = checkInArrSameByProp;
//# sourceMappingURL=ArrayUtil.js.map