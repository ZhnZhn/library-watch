"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _CL = require("./CL");
var _jsxRuntime = require("react/jsx-runtime");
/*eslint-disable jsx-a11y/click-events-have-key-events*/var OptionStack = function OptionStack(_ref) {
  var options = _ref.options,
    indexActiveOption = _ref.indexActiveOption,
    propCaption = _ref.propCaption,
    ItemOptionComp = _ref.ItemOptionComp,
    _onClick = _ref.onClick;
  return options.map(function (item, index) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      role: "option",
      "aria-selected": indexActiveOption === index,
      tabIndex: "-1",
      className: _CL.CL_OPTIONS_ROW,
      "data-index": index,
      onClick: function onClick(evt) {
        return _onClick(item, evt);
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(ItemOptionComp, {
        item: item,
        propCaption: propCaption
      })
    }, index);
  });
};
/*eslint-enable jsx-a11y/click-events-have-key-events*/
var _default = OptionStack;
exports["default"] = _default;
//# sourceMappingURL=OptionStack.js.map