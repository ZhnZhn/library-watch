'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _GitHubRecentTag = require('../items/GitHubRecentTag');

var _GitHubRecentTag2 = _interopRequireDefault(_GitHubRecentTag);

var _fnFetchJson = require('../../network/fnFetchJson');

var _fnFetchJson2 = _interopRequireDefault(_fnFetchJson);

var _fnCatch = require('../../network/fnCatch');

var _fnCatch2 = _interopRequireDefault(_fnCatch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//uri, option, onCheckResponse, onFetch, onCompleted, onFailed, onCatch

var _base = 'https://api.github.com';

var fGitHubRecentTag = function fGitHubRecentTag(_ref) {
  var factory = _ref.factory,
      option = _ref.option,
      _ref$json = _ref.json,
      json = _ref$json === undefined ? [{ name: 'empty' }] : _ref$json,
      parentProps = _ref.parentProps,
      onCloseItem = _ref.onCloseItem,
      onWatchItem = _ref.onWatchItem;

  var repo = option.repo,
      requestType = option.requestType,
      chartType = option.chartType,
      browserType = option.browserType,
      key = option.key,
      tagItem = json[0],
      _onClickDetail = _fnFetchJson2.default.bind(null, {
    uri: _base + '/repos/' + option.repo + '/commits/' + tagItem.commit.sha,
    onCatch: _fnCatch2.default
  });

  return factory.createElement(_GitHubRecentTag2.default, (0, _extends3.default)({
    key: key,
    repo: repo,
    requestType: requestType,
    version: tagItem.name,
    caption: repo + ' ' + tagItem.name,
    onCloseItem: onCloseItem.bind(null, chartType, browserType, key),
    onClickDetail: _onClickDetail,
    onWatchItem: onWatchItem
  }, parentProps));
};

exports.default = fGitHubRecentTag;
//# sourceMappingURL=fGitHubRecentTag.js.map