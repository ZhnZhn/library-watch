"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _memoFn = require("../hoc/memoFn");
var _MenuBrowserDynamic = _interopRequireDefault(require("../zhn-moleculs/MenuBrowserDynamic"));
var _browserStore = require("../../flux/browserStore");
var _jsxRuntime = require("react/jsx-runtime");
const SourceBrowserDynamic = (0, _memoFn.memoEqual)(props => /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuBrowserDynamic.default, {
  useMsBrowserDynamic: _browserStore.useMsBrowserDynamic,
  onLoadMenu: _browserStore.loadBrowserDynamic,
  ...props
}));
var _default = exports.default = SourceBrowserDynamic;
//# sourceMappingURL=SourceBrowserDynamic.js.map