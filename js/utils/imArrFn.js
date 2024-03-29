"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.imArrPush = exports.imArrInsertItem = exports.imArrFilterByProp = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _isTypeFn = require("./isTypeFn");
var imArrPush = function imArrPush(arr, obj) {
  return (0, _isTypeFn.isArr)(arr) ? [].concat(arr, [obj]) : [obj];
};
exports.imArrPush = imArrPush;
var imArrFilterByProp = function imArrFilterByProp(propName, arr, value) {
  return arr.filter(function (obj, index) {
    return obj[propName] !== value;
  });
};
exports.imArrFilterByProp = imArrFilterByProp;
var imArrInsertItem = function imArrInsertItem(item, index, arr) {
  if (arr === void 0) {
    arr = [];
  }
  return index === 0 ? [(0, _extends2["default"])({}, item)].concat(arr) : [].concat(arr.slice(0, index), [(0, _extends2["default"])({}, item)], arr.slice(index));
};
exports.imArrInsertItem = imArrInsertItem;
//# sourceMappingURL=imArrFn.js.map