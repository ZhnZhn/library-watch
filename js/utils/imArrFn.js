"use strict";

exports.__esModule = true;
exports.imArrPush = exports.imArrInsertItem = exports.imArrFilterByProp = void 0;
var _isTypeFn = require("./isTypeFn");
const imArrPush = (arr, obj) => (0, _isTypeFn.isArr)(arr) ? [...arr, obj] : [obj];
exports.imArrPush = imArrPush;
const imArrFilterByProp = (propName, arr, value) => arr.filter((obj, index) => obj[propName] !== value);
exports.imArrFilterByProp = imArrFilterByProp;
const imArrInsertItem = function (item, index, arr) {
  if (arr === void 0) {
    arr = [];
  }
  return index === 0 ? [{
    ...item
  }, ...arr] : [...arr.slice(0, index), {
    ...item
  }, ...arr.slice(index)];
};
exports.imArrInsertItem = imArrInsertItem;
//# sourceMappingURL=imArrFn.js.map