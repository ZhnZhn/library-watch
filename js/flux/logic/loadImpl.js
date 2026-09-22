"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _isTypeFn = require("../../utils/isTypeFn");
var _delayFn = require("../../utils/delayFn");
var _fnFetch = _interopRequireDefault(require("../../network/fnFetch"));
var _fnCatch = _interopRequireDefault(require("../../network/fnCatch"));
var _RestApi = _interopRequireDefault(require("../../api/RestApi"));
const _fetchToChartComp = ({
  json,
  option,
  onCompleted
}) => {
  onCompleted(option, json);
};
const _fFetchUrl = (mlsDelay, uri, onCheckResponse, onFailed) => ({
  json,
  option,
  onCompleted
}) => {
  option.json1 = json;
  (0, _delayFn.delayFn)(mlsDelay, () => (0, _fnFetch.default)({
    uri,
    option,
    onCheckResponse,
    onFetch: _fetchToChartComp,
    onCompleted,
    onCatch: _fnCatch.default,
    onFailed
  }));
};
const loadItem = (option, onCompleted, onFailed) => {
  const api = _RestApi.default.getApi(option),
    _uri = api.getRequestUrl(option),
    onCheckResponse = api.checkResponse,
    crOptionFetch = api.crOptionFetch,
    [uri, onFetch] = (0, _isTypeFn.isStr)(_uri) ? [_uri, _fetchToChartComp] : (0, _isTypeFn.isArr)(_uri) ? [_uri[0], _fFetchUrl(3200, _uri[1], onCheckResponse, onFailed)] : [];
  (0, _fnFetch.default)({
    uri,
    //GitHubApi
    optionFetch: (0, _isTypeFn.isFn)(crOptionFetch) ? crOptionFetch() : void 0,
    onFetch,
    onCheckResponse,
    option,
    onCompleted,
    onCatch: _fnCatch.default,
    onFailed
  });
};
const loadImpl = {
  loadItem,
  crKey: _RestApi.default.crKey
};
var _default = exports.default = loadImpl;
//# sourceMappingURL=loadImpl.js.map