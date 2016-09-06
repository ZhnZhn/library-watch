'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fItemTest = require('./factories/fItemTest');

var _fItemTest2 = _interopRequireDefault(_fItemTest);

var _fGitHubRecentRelease = require('./factories/fGitHubRecentRelease');

var _fGitHubRecentRelease2 = _interopRequireDefault(_fGitHubRecentRelease);

var _fGitHubRecentTag = require('./factories/fGitHubRecentTag');

var _fGitHubRecentTag2 = _interopRequireDefault(_fGitHubRecentTag);

var _fGitHubSearchInfo = require('./factories/fGitHubSearchInfo');

var _fGitHubSearchInfo2 = _interopRequireDefault(_fGitHubSearchInfo);

var _fGitHubCommits = require('./factories/fGitHubCommits');

var _fGitHubCommits2 = _interopRequireDefault(_fGitHubCommits);

var _fGitHubIssues = require('./factories/fGitHubIssues');

var _fGitHubIssues2 = _interopRequireDefault(_fGitHubIssues);

var _fNpmRecentMonthDownload = require('./factories/fNpmRecentMonthDownload');

var _fNpmRecentMonthDownload2 = _interopRequireDefault(_fNpmRecentMonthDownload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RouterComponent = {
  DEFAULT: _fItemTest2.default,
  RELEASE_RECENT: _fGitHubRecentRelease2.default,
  TAGS: _fGitHubRecentTag2.default,
  SEARCH_INFO: _fGitHubSearchInfo2.default,
  COMMITS: _fGitHubCommits2.default,
  ISSUES: _fGitHubIssues2.default,
  PULL_REQUESTS: _fGitHubIssues2.default,

  NPM_RECENT_MONTH: _fNpmRecentMonthDownload2.default
};

exports.default = RouterComponent;
//# sourceMappingURL=D:\_Dev\_React\_Template_2\js\flux\logic\RouterComponent.js.map