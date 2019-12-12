"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _GitHubRecentTag = _interopRequireDefault(require("../items/GitHubRecentTag"));

var _fnFetchJson = _interopRequireDefault(require("../../network/fnFetchJson"));

var _fnCatch = _interopRequireDefault(require("../../network/fnCatch"));

//uri, option, onCheckResponse, onFetch, onCompleted, onFailed, onCatch
var _base = 'https://api.github.com';

var fGitHubRecentTag = function fGitHubRecentTag(_ref) {
  var factory = _ref.factory,
      option = _ref.option,
      _ref$json = _ref.json,
      json = _ref$json === void 0 ? [{
    name: 'empty'
  }] : _ref$json,
      parentProps = _ref.parentProps,
      onCloseItem = _ref.onCloseItem,
      onWatchItem = _ref.onWatchItem;

  var repo = option.repo,
      requestType = option.requestType,
      chartType = option.chartType,
      browserType = option.browserType,
      key = option.key,
      tagItem = json[0],
      _onClickDetail = _fnFetchJson["default"].bind(null, {
    uri: _base + "/repos/" + option.repo + "/commits/" + tagItem.commit.sha,
    onCatch: _fnCatch["default"]
  });

  return factory.createElement(_GitHubRecentTag["default"], (0, _extends2["default"])({
    key: key,
    repo: repo,
    requestType: requestType,
    version: tagItem.name,
    caption: repo + " " + tagItem.name,
    onCloseItem: onCloseItem.bind(null, chartType, browserType, key),
    onClickDetail: _onClickDetail,
    onWatchItem: onWatchItem
  }, parentProps));
};

var _default = fGitHubRecentTag;
exports["default"] = _default;
//# sourceMappingURL=fGitHubRecentTag.js.map