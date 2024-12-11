"use strict";

exports.__esModule = true;
exports.setFirstToUpperCase = void 0;
var _isTypeFn = require("./isTypeFn");
const setFirstToUpperCase = str => (0, _isTypeFn.isNotEmptyStr)(str) ? str[0].toUpperCase() + str.substring(1) : str;
exports.setFirstToUpperCase = setFirstToUpperCase;
//# sourceMappingURL=strFn.js.map