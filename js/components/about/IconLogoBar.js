"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _IconGitHub = _interopRequireDefault(require("./IconGitHub"));

var _IconReact = _interopRequireDefault(require("./IconReact"));

var _jsxRuntime = require("react/jsx-runtime");

var S_ROOT = {
  paddingTop: 20,
  textAlign: 'center'
};

var IconLogoBar = function IconLogoBar() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: S_ROOT,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_IconGitHub["default"], {
      className: "icon__github",
      title: "GitHub Library Watch",
      uri: "https://github.com/ZhnZhn/library-watch.git"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_IconReact["default"], {})]
  });
};

var _default = IconLogoBar;
exports["default"] = _default;
//# sourceMappingURL=IconLogoBar.js.map