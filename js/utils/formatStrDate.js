"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _strFn = require("./strFn");
var formatStrDate = function formatStrDate(strDate, dfValue) {
  return (0, _strFn.isNotEmptyStr)(strDate) ? strDate.replace('T', ' ').replace('Z', '') : dfValue || '';
};
var _default = formatStrDate;
exports["default"] = _default;
//# sourceMappingURL=formatStrDate.js.map