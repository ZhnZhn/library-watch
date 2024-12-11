"use strict";

exports.__esModule = true;
exports.default = void 0;
var _CL = require("./CL");
var _jsxRuntime = require("react/jsx-runtime");
/*eslint-disable jsx-a11y/click-events-have-key-events*/const OptionStack = _ref => {
  let {
    options,
    indexActiveOption,
    propCaption,
    ItemOptionComp,
    onClick
  } = _ref;
  return options.map((item, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    role: "option",
    "aria-selected": indexActiveOption === index,
    tabIndex: "-1",
    className: _CL.CL_OPTIONS_ROW,
    "data-index": index,
    onClick: evt => onClick(item, evt),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(ItemOptionComp, {
      item: item,
      propCaption: propCaption
    })
  }, index));
};
/*eslint-enable jsx-a11y/click-events-have-key-events*/
var _default = exports.default = OptionStack;
//# sourceMappingURL=OptionStack.js.map