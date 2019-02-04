'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _GitHubRecentRelease = require('../items/GitHubRecentRelease');

var _GitHubRecentRelease2 = _interopRequireDefault(_GitHubRecentRelease);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
        published_at = _json$published_at === undefined ? 'empty' : _json$published_at,
        html_url = json.html_url,
        _version = tag_name ? tag_name : name ? name : 'empty',
        _published_at = published_at.replace('T', ' ').replace('Z', '');

    return factory.createElement(_GitHubRecentRelease2.default, (0, _extends3.default)({
        key: key,
        repo: repo,
        requestType: requestType,
        caption: repo + ' ' + _version + ' ' + _published_at,
        version: _version,
        published_at: _published_at,
        html_url: html_url,
        onCloseItem: onCloseItem.bind(null, chartType, browserType, key),
        onWatchItem: onWatchItem
    }, parentProps));
};

exports.default = fGitHubRecentRelease;
//# sourceMappingURL=fGitHubRecentRelease.js.map