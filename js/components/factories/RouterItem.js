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

var _fNpmRecentDownloads = require('./fNpmRecentDownloads');

var _fNpmRecentDownloads2 = _interopRequireDefault(_fNpmRecentDownloads);

var _fNpmDownloads = require('./fNpmDownloads');

var _fNpmDownloads2 = _interopRequireDefault(_fNpmDownloads);

var _fStackTaggedQuestions = require('./fStackTaggedQuestions');

var _fStackTaggedQuestions2 = _interopRequireDefault(_fStackTaggedQuestions);

var _fStatCounter = require('./fStatCounter');

var _fStatCounter2 = _interopRequireDefault(_fStatCounter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RouterItem = {
  DEFAULT: _fItemTest2.default,
  GH_RELEASE_RECENT: _fGitHubRecentRelease2.default,
  GH_TAGS: _fGitHubRecentTag2.default,
  GH_SEARCH_INFO: _fGitHubSearchInfo2.default,
  GH_COMMITS: _fGitHubCommits2.default,
  GH_ISSUES: _fGitHubIssues2.default,
  GH_PULL_REQUESTS: _fGitHubIssues2.default,

  NPM_DOWNLOADS_RECENT_MONTH: _fNpmRecentDownloads2.default,
  NPM_DOWNLOADS: _fNpmDownloads2.default,

  SE_QUESTIONS: _fStackTaggedQuestions2.default,
  SE_SEARCH_QUESTIONS: _fStackTaggedQuestions2.default,

  ST_OSVERSION: _fStatCounter2.default
};

exports.default = RouterItem;
//# sourceMappingURL=RouterItem.js.map