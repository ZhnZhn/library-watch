'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _GitHubRecentRelease = require('../../../components/items/GitHubRecentRelease');

var _GitHubRecentRelease2 = _interopRequireDefault(_GitHubRecentRelease);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fGitHubRecentRelease = function fGitHubRecentRelease(_ref) {
    var factory = _ref.factory;
    var option = _ref.option;
    var json = _ref.json;
    var parentProps = _ref.parentProps;
    var onCloseItem = _ref.onCloseItem;
    var onWatchItem = _ref.onWatchItem;
    var repo = option.repo;
    var requestType = option.requestType;
    var chartType = option.chartType;
    var browserType = option.browserType;
    var tag_name = json.tag_name;
    var name = json.name;
    var _json$published_at = json.published_at;
    var published_at = _json$published_at === undefined ? 'empty' : _json$published_at;
    var html_url = json.html_url;
    var _version = tag_name ? tag_name : name ? name : 'empty';
    var _published_at = published_at.replace('T', ' ').replace('Z', '');
    var key = repo + '_' + requestType;
    return factory.createElement(_GitHubRecentRelease2.default, _extends({
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
//# sourceMappingURL=D:\_Dev\_React\_Template_2\js\flux\logic\factories\fGitHubRecentRelease.js.map