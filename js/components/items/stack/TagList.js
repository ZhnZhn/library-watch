"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../../uiApi");
var _jsxRuntime = require("react/jsx-runtime");
const S_SPAN_TAG = {
  display: "inline-block",
  color: "black",
  padding: "4px 8px",
  margin: "6px 8px 2px 8px",
  borderRadius: 16,
  backgroundColor: "gray"
};
const TagList = _ref => {
  let {
    tags
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    children: (0, _uiApi.safeMap)(tags, (tag, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      style: S_SPAN_TAG,
      children: tag
    }, index))
  });
};
var _default = exports.default = TagList;
//# sourceMappingURL=TagList.js.map