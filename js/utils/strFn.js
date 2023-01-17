"use strict";

exports.__esModule = true;
exports.setFirstToUpperCase = void 0;
var _is = require("./is");
var setFirstToUpperCase = function setFirstToUpperCase(str) {
  return (0, _is.isNotEmptyStr)(str) ? str[0].toUpperCase() + str.substring(1) : str;
};
exports.setFirstToUpperCase = setFirstToUpperCase;
//# sourceMappingURL=strFn.js.map