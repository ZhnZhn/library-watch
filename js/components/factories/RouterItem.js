'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fItemTest = require('./fItemTest');

var _fItemTest2 = _interopRequireDefault(_fItemTest);

var _fGitHubRecentRelease = require('./fGitHubRecentRelease');

var _fGitHubRecentRelease2 = _interopRequireDefault(_fGitHubRecentRelease);

var _fGitHubRecentTag = require('./fGitHubRecentTag');

var _fGitHubRecentTag2 = _interopRequireDefault(_fGitHubRecentTag);

var _fGitHubSearchInfo = require('./fGitHubSearchInfo');

var _fGitHubSearchInfo2 = _interopRequireDefault(_fGitHubSearchInfo);

var _fGitHubCommits = require('./fGitHubCommits');

var _fGitHubCommits2 = _interopRequireDefault(_fGitHubCommits);

var _fGitHubIssues = require('./fGitHubIssues');

var _fGitHubIssues2 = _interopRequireDefault(_fGitHubIssues);

var _fNpmRecentMonthDownload = require('./fNpmRecentMonthDownload');

var _fNpmRecentMonthDownload2 = _interopRequireDefault(_fNpmRecentMonthDownload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RouterItem = {
  DEFAULT: _fItemTest2.default,
  GH_RELEASE_RECENT: _fGitHubRecentRelease2.default,
  GH_TAGS: _fGitHubRecentTag2.default,
  GH_SEARCH_INFO: _fGitHubSearchInfo2.default,
  GH_COMMITS: _fGitHubCommits2.default,
  GH_ISSUES: _fGitHubIssues2.default,
  GH_PULL_REQUESTS: _fGitHubIssues2.default,

  NPM_RECENT_MONTH: _fNpmRecentMonthDownload2.default
};

exports.default = RouterItem;
//# sourceMappingURL=D:\_Dev\_React\_Template_2\js\components\factories\RouterItem.js.map