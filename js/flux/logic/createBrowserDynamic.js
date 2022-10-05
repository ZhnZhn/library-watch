"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../../components/uiApi");

var _SourceBrowserDynamic = _interopRequireDefault(require("../../components/browser-container/SourceBrowserDynamic"));

var createBrowserDynamic = function createBrowserDynamic(_ref) {
  var store = _ref.store,
      _ref$caption = _ref.caption,
      caption = _ref$caption === void 0 ? '' : _ref$caption,
      browserType = _ref.browserType,
      sourceMenuUrl = _ref.sourceMenuUrl,
      rowClass = _ref.rowClass;
  return (0, _uiApi.createElement)(_SourceBrowserDynamic["default"], {
    key: browserType,
    isInitShow: true,
    store: store,
    caption: caption,
    browserType: browserType,
    sourceMenuUrl: sourceMenuUrl,
    rowClass: rowClass
  });
};

var _default = createBrowserDynamic;
exports["default"] = _default;
//# sourceMappingURL=createBrowserDynamic.js.map