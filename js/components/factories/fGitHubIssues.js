"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _GitHubIssues = _interopRequireDefault(require("../items/GitHubIssues"));
const fGitHubCommits = function (_ref) {
  let {
    createElement,
    option,
    json = [],
    parentProps,
    onCloseItem,
    onWatchItem
  } = _ref;
  const {
    repo,
    requestType,
    key
  } = option;
  return createElement(_GitHubIssues.default, {
    key,
    repo,
    requestType,
    caption: repo,
    issues: json,
    onCloseItem,
    onWatchItem,
    ...parentProps
  });
};
var _default = exports.default = fGitHubCommits;
//# sourceMappingURL=fGitHubIssues.js.map