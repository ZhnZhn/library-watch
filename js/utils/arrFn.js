"use strict";

exports.__esModule = true;
exports.isInArrByPropName = exports.findByPropNameInArrItem = exports.findByPropNameInArrIndex = exports.calcSum = void 0;
var _isTypeFn = require("./isTypeFn");
const _fFindInArray = propNameArrFn => (propName, arr, value) => (0, _isTypeFn.isArr)(arr) ? arr[propNameArrFn](item => item[propName] === value) : void 0;
const findByPropNameInArrIndex = exports.findByPropNameInArrIndex = _fFindInArray('findIndex');
const findByPropNameInArrItem = exports.findByPropNameInArrItem = _fFindInArray('find');
const isInArrByPropName = (propName, arr, value) => {
  const _itemIndex = (0, _isTypeFn.isArr)(arr) ? findByPropNameInArrIndex(propName, arr, value) : -1;
  return _itemIndex !== -1;
};
exports.isInArrByPropName = isInArrByPropName;
const calcSum = arr => arr.reduce((sum, value) => sum + value, 0);
exports.calcSum = calcSum;
//# sourceMappingURL=arrFn.js.map