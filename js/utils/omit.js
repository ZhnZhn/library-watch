"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _hasOwnProperty = Object.prototype.hasOwnProperty;
var omit = function omit(obj, keys) {
  var target = {};
  for (var propName in obj) {
    if (keys.indexOf(propName) >= 0 || !_hasOwnProperty.call(obj, propName)) {
      continue;
    }
    target[propName] = obj[propName];
  }
  return target;
};
var _default = omit;
exports["default"] = _default;
//# sourceMappingURL=omit.js.map