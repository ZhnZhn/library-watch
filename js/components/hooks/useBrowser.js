"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useBool = _interopRequireDefault(require("./useBool"));
var _useKeyEscape = _interopRequireDefault(require("./useKeyEscape"));
var _useBrowserMenu = _interopRequireDefault(require("./useBrowserMenu"));
const crInitialMenuItemsDf = () => [];
const useBrowser = function (isShowInitial, crInitialMenuItems) {
  if (crInitialMenuItems === void 0) {
    crInitialMenuItems = crInitialMenuItemsDf;
  }
  const [menuItems, setMenuItems] = (0, _uiApi.useState)(crInitialMenuItems),
    [isShowBrowser, showBrowser, hideBrowser] = (0, _useBool.default)(isShowInitial);
  return [menuItems, setMenuItems, isShowBrowser, showBrowser, hideBrowser, (0, _useKeyEscape.default)(hideBrowser), (0, _useBrowserMenu.default)(isShowBrowser, menuItems)];
};
var _default = exports.default = useBrowser;
//# sourceMappingURL=useBrowser.js.map