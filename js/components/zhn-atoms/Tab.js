"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from "prop-types";
var CL = "tab";
var S = {
  SELECTED: {
    borderColor: '#a487d4',
    color: '#a487d4'
  }
};

var Tab = function Tab(_ref) {
  var title = _ref.title,
      isSelected = _ref.isSelected,
      onClick = _ref.onClick;

  var _style = isSelected ? S.SELECTED : void 0;

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    role: "tab",
    "aria-selected": isSelected,
    tabIndex: "0",
    className: CL,
    style: _style,
    onClick: onClick,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      children: title
    })
  });
};
/*
Tab.propTypes = {
  title: PropTypes.string,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func
}
*/


var _default = Tab;
exports["default"] = _default;
//# sourceMappingURL=Tab.js.map