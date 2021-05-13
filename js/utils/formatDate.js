"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _timeago = _interopRequireDefault(require("timeago.js"));

var formatDate = function formatDate(mlsOrStr) {
  return (0, _timeago["default"])(Date.now()).format(mlsOrStr);
};

var _default = formatDate;
exports["default"] = _default;
//# sourceMappingURL=formatDate.js.map