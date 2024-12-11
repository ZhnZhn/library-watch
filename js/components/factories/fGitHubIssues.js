"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _GitHubIssues = _interopRequireDefault(require("../items/GitHubIssues"));
var _jsxRuntime = require("react/jsx-runtime");
const fGitHubCommits = _ref => {
  let {
    option,
    json,
    parentProps,
    onCloseItem,
    onWatchItem
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_GitHubIssues.default, {
    caption: option.repo,
    repo: option.repo,
    requestType: option.requestType,
    issues: json || [],
    onCloseItem: onCloseItem,
    onWatchItem: onWatchItem,
    ...parentProps
  }, option.key);
};
var _default = exports.default = fGitHubCommits;
//# sourceMappingURL=fGitHubIssues.js.map