"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiTheme = require("../styles/uiTheme");
var _RowInputSelect = _interopRequireDefault(require("../dialogs/rows/RowInputSelect"));
var _jsxRuntime = require("react/jsx-runtime");
const CardUiTheme = props => /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
  style: props.style,
  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_RowInputSelect.default, {
    width: "210",
    isShowLabel: true,
    caption: "UI Theme",
    placeholder: `Default: ${_uiTheme.DF_UI_THEME}`,
    options: _uiTheme.UI_THEME_OPTIONS
    //onSelect={setUiTheme}
  })
});
var _default = exports.default = CardUiTheme;
//# sourceMappingURL=CardUiTheme.js.map