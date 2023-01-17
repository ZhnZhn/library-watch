"use strict";

exports.__esModule = true;
exports.findInPropArrayByPropItem = void 0;
var _isTypeFn = require("./isTypeFn");
var _arrFn = require("./arrFn");
var findInPropArrayByPropItem = function findInPropArrayByPropItem(propNameArr, propNameItem, obj, value) {
  return (0, _arrFn.findByPropNameInArrItem)(propNameItem, (0, _isTypeFn.isRegularObj)(obj) && obj[propNameArr], value);
};
exports.findInPropArrayByPropItem = findInPropArrayByPropItem;
//# sourceMappingURL=objFn.js.map