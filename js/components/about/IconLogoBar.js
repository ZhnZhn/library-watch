"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _IconGitHub = _interopRequireDefault(require("./IconGitHub"));

var _IconReact = _interopRequireDefault(require("./IconReact"));

var STYLE = {
  ROOT: {
    textAlign: 'center',
    paddingTop: '20px'
  }
};

var IconLogoBar = function IconLogoBar(props) {
  return _react["default"].createElement("div", {
    style: STYLE.ROOT
  }, _react["default"].createElement(_IconGitHub["default"], {
    className: "icon__github",
    title: "GitHub Library Watch",
    uri: "https://github.com/ZhnZhn/library-watch.git"
  }), _react["default"].createElement(_IconReact["default"], null));
};

var _default = IconLogoBar;
exports["default"] = _default;
//# sourceMappingURL=IconLogoBar.js.map