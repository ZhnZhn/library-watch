"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _fnFetch = _interopRequireDefault(require("../../network/fnFetch"));
var _fnCatch = _interopRequireDefault(require("../../network/fnCatch"));
var _RestApi = _interopRequireDefault(require("../../api/RestApi"));
const _fnFetchToChartComp = _ref => {
  let {
    json,
    option,
    onCompleted
  } = _ref;
  onCompleted(option, json);
};
const loadItem = (option, onCompleted, onFailed) => {
  (0, _fnFetch.default)({
    uri: _RestApi.default.getRequestUrl(option),
    option: option,
    onCheckResponse: _RestApi.default.getOnCheckResponse(option),
    onFetch: _fnFetchToChartComp,
    onCompleted: onCompleted,
    onCatch: _fnCatch.default,
    onFailed: onFailed
  });
};
const loadImpl = {
  loadItem,
  crKey: _RestApi.default.crKey
};
var _default = exports.default = loadImpl;
//# sourceMappingURL=loadImpl.js.map