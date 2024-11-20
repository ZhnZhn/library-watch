"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _GitHubRecentTag = _interopRequireDefault(require("../items/GitHubRecentTag"));
var _fnFetchJson = _interopRequireDefault(require("../../network/fnFetchJson"));
var _fnCatch = _interopRequireDefault(require("../../network/fnCatch"));
//uri, option, onCheckResponse, onFetch, onCompleted, onFailed, onCatch

const API_URL = 'https://api.github.com';
const fGitHubRecentTag = function (_ref) {
  let {
    createElement,
    option,
    json = [{
      name: 'empty'
    }],
    parentProps,
    onCloseItem,
    onWatchItem
  } = _ref;
  const {
      repo,
      requestType,
      key
    } = option,
    tagItem = json[0],
    _onClickDetail = (0, _uiApi.bindTo)(_fnFetchJson.default, {
      uri: `${API_URL}/repos/${option.repo}/commits/${tagItem.commit.sha}`,
      onCatch: _fnCatch.default
    });
  return createElement(_GitHubRecentTag.default, {
    key,
    repo,
    requestType,
    version: tagItem.name,
    caption: `${repo} ${tagItem.name}`,
    onClickDetail: _onClickDetail,
    onCloseItem,
    onWatchItem,
    ...parentProps
  });
};
var _default = exports.default = fGitHubRecentTag;
//# sourceMappingURL=fGitHubRecentTag.js.map