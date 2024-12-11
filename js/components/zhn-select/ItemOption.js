"use strict";

exports.__esModule = true;
exports.default = void 0;
var _jsxRuntime = require("react/jsx-runtime");
const S_CAPTION = {
    width: '100%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  DF_ITEM = {};
const ItemOption = _ref => {
  let {
    item = DF_ITEM,
    propCaption
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: S_CAPTION,
    children: item[propCaption]
  });
};
var _default = exports.default = ItemOption;
//# sourceMappingURL=ItemOption.js.map