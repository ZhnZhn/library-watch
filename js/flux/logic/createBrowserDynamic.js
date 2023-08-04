"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _SourceBrowserDynamic = _interopRequireDefault(require("../../components/browser-container/SourceBrowserDynamic"));
var _jsxRuntime = require("react/jsx-runtime");
const createBrowserDynamic = _ref => {
  let {
    browserType,
    caption,
    sourceMenuUrl,
    rowClass
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_SourceBrowserDynamic.default, {
    isInitShow: true,
    browserType: browserType,
    caption: caption,
    sourceMenuUrl: sourceMenuUrl,
    rowClass: rowClass
  }, browserType);
};
var _default = createBrowserDynamic;
exports.default = _default;
//# sourceMappingURL=createBrowserDynamic.js.map