"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _GitHubRecentRelease = _interopRequireDefault(require("../items/GitHubRecentRelease"));
var _formatStrDate = _interopRequireDefault(require("../../utils/formatStrDate"));
var _jsxRuntime = require("react/jsx-runtime");
const fGitHubRecentRelease = _ref => {
  let {
    option,
    json,
    parentProps,
    onCloseItem,
    onWatchItem
  } = _ref;
  const _version = json.tag_name || json.name || "empty",
    _published_at = (0, _formatStrDate.default)(json.published_at, "empty");
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_GitHubRecentRelease.default, {
    repo: option.repo,
    requestType: option.requestType,
    html_url: json.html_url,
    caption: `${option.repo} ${_version} ${_published_at}`,
    version: _version,
    published_at: _published_at,
    onCloseItem: onCloseItem,
    onWatchItem: onWatchItem,
    ...parentProps
  }, option.key);
};
var _default = exports.default = fGitHubRecentRelease;
//# sourceMappingURL=fGitHubRecentRelease.js.map