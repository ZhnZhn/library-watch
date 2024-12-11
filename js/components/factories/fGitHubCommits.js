"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _GitHubCommits = _interopRequireDefault(require("../items/GitHubCommits"));
var _jsxRuntime = require("react/jsx-runtime");
const fGitHubCommits = _ref => {
  let {
    option,
    json,
    parentProps,
    onCloseItem,
    onWatchItem
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_GitHubCommits.default, {
    commits: json || [],
    caption: option.repo,
    repo: option.repo,
    requestType: option.requestType,
    onCloseItem: onCloseItem,
    onWatchItem: onWatchItem,
    ...parentProps
  }, option.key);
};
var _default = exports.default = fGitHubCommits;
//# sourceMappingURL=fGitHubCommits.js.map