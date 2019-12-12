"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _GitHubRecentRelease = _interopRequireDefault(require("../items/GitHubRecentRelease"));

var fGitHubRecentRelease = function fGitHubRecentRelease(_ref) {
  var factory = _ref.factory,
      option = _ref.option,
      json = _ref.json,
      parentProps = _ref.parentProps,
      onCloseItem = _ref.onCloseItem,
      onWatchItem = _ref.onWatchItem;

  var repo = option.repo,
      requestType = option.requestType,
      chartType = option.chartType,
      browserType = option.browserType,
      key = option.key,
      tag_name = json.tag_name,
      name = json.name,
      _json$published_at = json.published_at,
      published_at = _json$published_at === void 0 ? 'empty' : _json$published_at,
      html_url = json.html_url,
      _version = tag_name ? tag_name : name ? name : 'empty',
      _published_at = published_at.replace('T', ' ').replace('Z', '');

  return factory.createElement(_GitHubRecentRelease["default"], (0, _extends2["default"])({
    key: key,
    repo: repo,
    requestType: requestType,
    caption: repo + " " + _version + " " + _published_at,
    version: _version,
    published_at: _published_at,
    html_url: html_url,
    onCloseItem: onCloseItem.bind(null, chartType, browserType, key),
    onWatchItem: onWatchItem
  }, parentProps));
};

var _default = fGitHubRecentRelease;
exports["default"] = _default;
//# sourceMappingURL=fGitHubRecentRelease.js.map