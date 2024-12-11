"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _GitHubSearchInfo = _interopRequireDefault(require("../items/GitHubSearchInfo"));
var _formatStrDate = _interopRequireDefault(require("../../utils/formatStrDate"));
var _jsxRuntime = require("react/jsx-runtime");
const fGitHubSearchInfo = _ref => {
  let {
    option,
    json,
    parentProps,
    onCloseItem
  } = _ref;
  const {
      items = [{}]
    } = json,
    library = items[0],
    {
      full_name = "empty",
      stargazers_count = "",
      pushed_at
    } = library,
    _pushed_at = (0, _formatStrDate.default)(pushed_at);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_GitHubSearchInfo.default, {
    library: library,
    repo: full_name,
    stars_count: stargazers_count,
    pushed_at: _pushed_at,
    caption: `${full_name} ${stargazers_count} ${_pushed_at}`,
    onCloseItem: onCloseItem,
    ...parentProps
  }, option.key);
};
var _default = exports.default = fGitHubSearchInfo;
//# sourceMappingURL=fGitHubSearchInfo.js.map