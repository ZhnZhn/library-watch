"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.getItemFactoryRoute = void 0;
var _crRouter = require("../../utils/crRouter");
var _fItemTest = _interopRequireDefault(require("./fItemTest"));
var _fCrateDownload = _interopRequireDefault(require("./fCrateDownload"));
var _fGitHubRecentRelease = _interopRequireDefault(require("./fGitHubRecentRelease"));
var _fGitHubRecentTag = _interopRequireDefault(require("./fGitHubRecentTag"));
var _fGitHubSearchInfo = _interopRequireDefault(require("./fGitHubSearchInfo"));
var _fGitHubCommits = _interopRequireDefault(require("./fGitHubCommits"));
var _fGitHubIssues = _interopRequireDefault(require("./fGitHubIssues"));
var _fNpmRecentDownloads = _interopRequireDefault(require("./fNpmRecentDownloads"));
var _fNpmDownloads = _interopRequireDefault(require("./fNpmDownloads"));
var _fNpmTopVersions = _interopRequireDefault(require("./fNpmTopVersions"));
var _fStackTaggedQuestions = _interopRequireDefault(require("./fStackTaggedQuestions"));
var _fStatcounter = _interopRequireDefault(require("./fStatcounter"));
const getItemFactoryRoute = exports.getItemFactoryRoute = (0, _crRouter.crGetRoute)({
  CR_DOWNLOADS: _fCrateDownload.default,
  GH_RELEASE_RECENT: _fGitHubRecentRelease.default,
  GH_TAGS: _fGitHubRecentTag.default,
  GH_SEARCH_INFO: _fGitHubSearchInfo.default,
  GH_COMMITS: _fGitHubCommits.default,
  GH_ISSUES: _fGitHubIssues.default,
  GH_PULL_REQUESTS: _fGitHubIssues.default,
  NPM_DOWNLOADS_RECENT_MONTH: _fNpmRecentDownloads.default,
  NPM_DOWNLOADS: _fNpmDownloads.default,
  NPM_TOP_VERSIONS: _fNpmTopVersions.default,
  SE_QUESTIONS: _fStackTaggedQuestions.default,
  SE_SEARCH_QUESTIONS: _fStackTaggedQuestions.default,
  ST_OSVERSION: _fStatcounter.default
}, _fItemTest.default);
//# sourceMappingURL=RouterItem.js.map