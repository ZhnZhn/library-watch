"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _domFn = require("../../utils/domFn");
var _formatDate = require("../../utils/formatDate");
var _uiApi = require("../uiApi");
var _TaggedQuestions = _interopRequireDefault(require("../items/stack/TaggedQuestions"));
var _jsxRuntime = require("react/jsx-runtime");
const _crItems = items => {
  const _nowMls = Date.now();
  return (0, _uiApi.safeMap)(items, item => {
    const {
        title,
        last_activity_date,
        owner
      } = item,
      {
        display_name
      } = owner || {};
    item.dateAgo = (0, _formatDate.safeFormatSec)(last_activity_date, _nowMls);
    item.title = (0, _domFn.htmlDecode)(title);
    item.owner.display_name = (0, _domFn.htmlDecode)(display_name);
    return item;
  });
};
const fStackTaggedQuestions = _ref => {
  let {
    option,
    json,
    parentProps,
    onCloseItem,
    onWatchItem
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_TaggedQuestions.default, {
    caption: option.repo,
    repo: option.repo,
    requestType: option.requestType,
    items: _crItems((json || {}).items),
    onCloseItem: onCloseItem,
    onWatchItem: onWatchItem,
    ...parentProps
  }, option.key);
};
var _default = exports.default = fStackTaggedQuestions;
//# sourceMappingURL=fStackTaggedQuestions.js.map