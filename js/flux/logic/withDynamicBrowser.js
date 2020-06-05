"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SourceBrowserDynamic = _interopRequireDefault(require("../../components/browser-container/SourceBrowserDynamic"));

var withDynamicBrowser = {
  createBrowserDynamic: function createBrowserDynamic(_ref) {
    var browserType = _ref.browserType,
        _ref$caption = _ref.caption,
        caption = _ref$caption === void 0 ? '' : _ref$caption,
        sourceMenuUrl = _ref.sourceMenuUrl,
        rowClass = _ref.rowClass;
    return /*#__PURE__*/_react["default"].createElement(_SourceBrowserDynamic["default"], {
      key: browserType,
      browserType: browserType,
      store: this.getStore(),
      isInitShow: true,
      caption: caption,
      sourceMenuUrl: sourceMenuUrl,
      rowClass: rowClass
    });
  }
};
var _default = withDynamicBrowser;
exports["default"] = _default;
//# sourceMappingURL=withDynamicBrowser.js.map