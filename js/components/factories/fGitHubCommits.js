"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _GitHubCommits = _interopRequireDefault(require("../items/GitHubCommits"));

var fGitHubCommits = function fGitHubCommits(_ref) {
  var factory = _ref.factory,
      option = _ref.option,
      _ref$json = _ref.json,
      json = _ref$json === void 0 ? [] : _ref$json,
      parentProps = _ref.parentProps,
      onCloseItem = _ref.onCloseItem,
      onWatchItem = _ref.onWatchItem;
  var repo = option.repo,
      requestType = option.requestType,
      chartType = option.chartType,
      browserType = option.browserType,
      key = option.key;
  return factory.createElement(_GitHubCommits["default"], (0, _extends2["default"])({
    key: key,
    repo: repo,
    requestType: requestType,
    caption: "" + repo,
    commits: json,
    onCloseItem: onCloseItem.bind(null, chartType, browserType, key),
    onWatchItem: onWatchItem
  }, parentProps));
};

var _default = fGitHubCommits;
exports["default"] = _default;
//# sourceMappingURL=fGitHubCommits.js.map