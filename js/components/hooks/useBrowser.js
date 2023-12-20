"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _useBool = _interopRequireDefault(require("./useBool"));
var _useKeyEscape = _interopRequireDefault(require("./useKeyEscape"));
const useBrowser = isShowInitial => {
  const [isShowBrowser, showBrowser, hideBrowser] = (0, _useBool.default)(isShowInitial);
  return [isShowBrowser, showBrowser, hideBrowser, (0, _useKeyEscape.default)(hideBrowser)];
};
var _default = exports.default = useBrowser;
//# sourceMappingURL=useBrowser.js.map