"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _GitHubRecentTag = _interopRequireDefault(require("../items/GitHubRecentTag"));
var _fnFetchJson = _interopRequireDefault(require("../../network/fnFetchJson"));
var _fnCatch = _interopRequireDefault(require("../../network/fnCatch"));
var _jsxRuntime = require("react/jsx-runtime");
//uri, option, onCheckResponse, onFetch, onCompleted, onFailed, onCatch
const API_URL = "https://api.github.com";
const fGitHubRecentTag = _ref => {
  let {
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
    tagItem = json[0] || [{
      name: "empty"
    }],
    _onClickDetail = (0, _uiApi.bindTo)(_fnFetchJson.default, {
      uri: `${API_URL}/repos/${repo}/commits/${tagItem.commit.sha}`,
      onCatch: _fnCatch.default
    });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_GitHubRecentTag.default, {
    repo: repo,
    requestType: requestType,
    version: tagItem.name,
    caption: `${repo} ${tagItem.name}`,
    onClickDetail: _onClickDetail,
    onCloseItem: onCloseItem,
    onWatchItem: onWatchItem,
    ...parentProps
  }, key);
};
var _default = exports.default = fGitHubRecentTag;
//# sourceMappingURL=fGitHubRecentTag.js.map