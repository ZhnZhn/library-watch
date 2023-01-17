"use strict";

exports.__esModule = true;
exports.findInPropArrayByPropItem = void 0;
var _is = require("./is");
var _arrFn = require("./arrFn");
var findInPropArrayByPropItem = function findInPropArrayByPropItem(propNameArr, propNameItem, obj, value) {
  return (0, _arrFn.findByPropNameInArrItem)(propNameItem, (0, _is.isRegularObj)(obj) && obj[propNameArr], value);
};
exports.findInPropArrayByPropItem = findInPropArrayByPropItem;
//# sourceMappingURL=objFn.js.map