"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _GitHubRecentRelease = _interopRequireDefault(require("../items/GitHubRecentRelease"));
var _formatStrDate = _interopRequireDefault(require("../../utils/formatStrDate"));
const fGitHubRecentRelease = function (_ref) {
  let {
    createElement,
    option,
    json,
    parentProps,
    onCloseItem,
    onWatchItem
  } = _ref;
  const {
      repo,
      requestType,
      key
    } = option,
    {
      tag_name,
      name,
      published_at,
      html_url
    } = json,
    _version = tag_name || name || 'empty',
    _published_at = (0, _formatStrDate.default)(published_at, 'empty');
  return createElement(_GitHubRecentRelease.default, {
    key,
    repo,
    requestType,
    html_url,
    caption: `${repo} ${_version} ${_published_at}`,
    version: _version,
    published_at: _published_at,
    onCloseItem,
    onWatchItem,
    ...parentProps
  });
};
var _default = exports.default = fGitHubRecentRelease;
//# sourceMappingURL=fGitHubRecentRelease.js.map