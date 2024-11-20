"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _GitHubCommits = _interopRequireDefault(require("../items/GitHubCommits"));
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
  return createElement(_GitHubCommits.default, {
    key,
    repo,
    requestType,
    caption: repo,
    commits: json,
    onCloseItem,
    onWatchItem,
    ...parentProps
  });
};
var _default = exports.default = fGitHubCommits;
//# sourceMappingURL=fGitHubCommits.js.map