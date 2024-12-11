"use strict";

exports.__esModule = true;
exports.default = void 0;
const _hasOwnProperty = Object.prototype.hasOwnProperty;
const omit = (obj, keys) => {
  const target = {};
  for (let propName in obj) {
    if (keys.indexOf(propName) >= 0 || !_hasOwnProperty.call(obj, propName)) {
      continue;
    }
    target[propName] = obj[propName];
  }
  return target;
};
var _default = exports.default = omit;
//# sourceMappingURL=omit.js.map