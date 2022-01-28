"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var CL_TAB = "tab",
    SELECTED_COLOR = '#a487d4',
    S_SELECTED = {
  borderColor: SELECTED_COLOR,
  color: SELECTED_COLOR
};

var Tab = function Tab(_ref) {
  var isSelected = _ref.isSelected,
      title = _ref.title,
      onClick = _ref.onClick;

  var _style = isSelected ? S_SELECTED : void 0;

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    role: "tab",
    "aria-selected": isSelected,
    tabIndex: "0",
    className: CL_TAB,
    style: _style,
    onClick: onClick,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      children: title
    })
  });
};

var _default = Tab;
exports["default"] = _default;
//# sourceMappingURL=Tab.js.map