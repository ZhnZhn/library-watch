"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _fnFetch = _interopRequireDefault(require("../../network/fnFetch"));

var _fnCatch = _interopRequireDefault(require("../../network/fnCatch"));

var _RestApi = _interopRequireDefault(require("../../api/RestApi"));

var _fnFetchToChartComp = function _fnFetchToChartComp(_ref) {
  var json = _ref.json,
      option = _ref.option,
      onCompleted = _ref.onCompleted;
  onCompleted(option, json);
};

var loadItem = function loadItem(option, onCompleted, onFailed) {
  (0, _fnFetch["default"])({
    uri: _RestApi["default"].getRequestUrl(option),
    option: option,
    onCheckResponse: _RestApi["default"].getOnCheckResponse(option),
    onFetch: _fnFetchToChartComp,
    onCompleted: onCompleted,
    onCatch: _fnCatch["default"],
    onFailed: onFailed
  });
};

var loadImpl = {
  loadItem: loadItem,
  crKey: _RestApi["default"].crKey
};
var _default = loadImpl;
exports["default"] = _default;
//# sourceMappingURL=loadImpl.js.map