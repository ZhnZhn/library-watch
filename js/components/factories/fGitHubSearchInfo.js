"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _GitHubSearchInfo = _interopRequireDefault(require("../items/GitHubSearchInfo"));
var _formatStrDate = _interopRequireDefault(require("../../utils/formatStrDate"));
const fGitHubSearchInfo = function (_ref) {
  let {
    createElement,
    option,
    json,
    parentProps,
    onCloseItem
  } = _ref;
  const {
      key
    } = option,
    {
      items = [{}]
    } = json,
    library = items[0],
    {
      full_name = 'empty',
      stargazers_count = '',
      pushed_at
    } = library,
    _pushed_at = (0, _formatStrDate.default)(pushed_at);
  return createElement(_GitHubSearchInfo.default, {
    key,
    library,
    repo: full_name,
    stars_count: stargazers_count,
    pushed_at: _pushed_at,
    caption: `${full_name} ${stargazers_count} ${_pushed_at}`,
    onCloseItem,
    ...parentProps
  });
};
var _default = exports.default = fGitHubSearchInfo;
//# sourceMappingURL=fGitHubSearchInfo.js.map