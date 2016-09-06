'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _GitHubIssues = require('../../../components/items/GitHubIssues');

var _GitHubIssues2 = _interopRequireDefault(_GitHubIssues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fGitHubCommits = function fGitHubCommits(_ref) {
    var factory = _ref.factory;
    var option = _ref.option;
    var _ref$json = _ref.json;
    var json = _ref$json === undefined ? [] : _ref$json;
    var parentProps = _ref.parentProps;
    var onCloseItem = _ref.onCloseItem;
    var onWatchItem = _ref.onWatchItem;
    var repo = option.repo;
    var requestType = option.requestType;
    var chartType = option.chartType;
    var browserType = option.browserType;
    var key = repo + '_' + requestType;
    return factory.createElement(_GitHubIssues2.default, _extends({
        key: key,
        repo: repo,
        requestType: requestType,
        caption: '' + repo,
        issues: json,
        onCloseItem: onCloseItem.bind(null, chartType, browserType, key),
        onWatchItem: onWatchItem
    }, parentProps));
};

exports.default = fGitHubCommits;
//# sourceMappingURL=D:\_Dev\_React\_Template_2\js\flux\logic\factories\fGitHubIssues.js.map