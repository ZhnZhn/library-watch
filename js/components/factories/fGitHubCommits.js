'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _GitHubCommits = require('../items/GitHubCommits');

var _GitHubCommits2 = _interopRequireDefault(_GitHubCommits);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fGitHubCommits = function fGitHubCommits(_ref) {
  var factory = _ref.factory,
      option = _ref.option,
      _ref$json = _ref.json,
      json = _ref$json === undefined ? [] : _ref$json,
      parentProps = _ref.parentProps,
      onCloseItem = _ref.onCloseItem,
      onWatchItem = _ref.onWatchItem;
  var repo = option.repo,
      requestType = option.requestType,
      chartType = option.chartType,
      browserType = option.browserType,
      key = option.key;

  return factory.createElement(_GitHubCommits2.default, (0, _extends3.default)({
    key: key,
    repo: repo,
    requestType: requestType,
    caption: '' + repo,
    commits: json,
    onCloseItem: onCloseItem.bind(null, chartType, browserType, key),
    onWatchItem: onWatchItem
  }, parentProps));
};

exports.default = fGitHubCommits;
//# sourceMappingURL=fGitHubCommits.js.map