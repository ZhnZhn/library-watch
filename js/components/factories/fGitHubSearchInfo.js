"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _GitHubSearchInfo = _interopRequireDefault(require("../items/GitHubSearchInfo"));

var fGitHubSearchInfo = function fGitHubSearchInfo(_ref) {
  var factory = _ref.factory,
      option = _ref.option,
      json = _ref.json,
      parentProps = _ref.parentProps,
      onCloseItem = _ref.onCloseItem;

  var chartType = option.chartType,
      browserType = option.browserType,
      key = option.key,
      _json$items = json.items,
      items = _json$items === void 0 ? [{}] : _json$items,
      library = items[0],
      _library$full_name = library.full_name,
      full_name = _library$full_name === void 0 ? 'empty' : _library$full_name,
      _library$stargazers_c = library.stargazers_count,
      stargazers_count = _library$stargazers_c === void 0 ? '' : _library$stargazers_c,
      _library$pushed_at = library.pushed_at,
      pushed_at = _library$pushed_at === void 0 ? '' : _library$pushed_at,
      _pushed_at = pushed_at.replace('T', ' ').replace('Z', '');

  return factory.createElement(_GitHubSearchInfo["default"], (0, _extends2["default"])({
    key: key,
    repo: full_name,
    stars_count: stargazers_count,
    pushed_at: _pushed_at,
    caption: full_name + " " + stargazers_count + " " + _pushed_at,
    library: library,
    onCloseItem: onCloseItem.bind(null, chartType, browserType, key)
  }, parentProps));
};

var _default = fGitHubSearchInfo;
exports["default"] = _default;
//# sourceMappingURL=fGitHubSearchInfo.js.map