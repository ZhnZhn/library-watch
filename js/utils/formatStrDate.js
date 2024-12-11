"use strict";

exports.__esModule = true;
exports.default = void 0;
var _isTypeFn = require("./isTypeFn");
const formatStrDate = (strDate, dfValue) => (0, _isTypeFn.isNotEmptyStr)(strDate) ? strDate.replace('T', ' ').replace('Z', '') : dfValue || '';
var _default = exports.default = formatStrDate;
//# sourceMappingURL=formatStrDate.js.map