"use strict";

exports.__esModule = true;
exports.default = void 0;
var _Item = require("./Item.Style");
var _jsxRuntime = require("react/jsx-runtime");
const _isNumber = n => typeof n == "number" && n - n === 0;
const COMMENT = "Comment";
const DivComments = _ref => {
  let {
    n
  } = _ref;
  return _isNumber(n) && n ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: _Item.S_COLOR_GREY,
    children: `${n === 1 ? COMMENT : COMMENT + "s"} ${n}`
  }) : null;
};
var _default = exports.default = DivComments;
//# sourceMappingURL=DivComments.js.map