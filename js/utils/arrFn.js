"use strict";

exports.__esModule = true;
exports.isInArrByPropName = exports.findByPropNameInArrItem = exports.findByPropNameInArrIndex = void 0;
var _isTypeFn = require("./isTypeFn");
var _fFindInArray = function _fFindInArray(propNameArrFn) {
  return function (propName, arr, value) {
    return (0, _isTypeFn.isArr)(arr) ? arr[propNameArrFn](function (item) {
      return item[propName] === value;
    }) : void 0;
  };
};
var findByPropNameInArrIndex = _fFindInArray('findIndex');
exports.findByPropNameInArrIndex = findByPropNameInArrIndex;
var findByPropNameInArrItem = _fFindInArray('find');
exports.findByPropNameInArrItem = findByPropNameInArrItem;
var isInArrByPropName = function isInArrByPropName(propName, arr, value) {
  var _itemIndex = (0, _isTypeFn.isArr)(arr) ? findByPropNameInArrIndex(propName, arr, value) : -1;
  return _itemIndex !== -1;
};
exports.isInArrByPropName = isInArrByPropName;
//# sourceMappingURL=arrFn.js.map