"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _domFn = require("../../utils/domFn");
var _formatDate = require("../../utils/formatDate");
var _uiApi = require("../uiApi");
var _TaggedQuestions = _interopRequireDefault(require("../items/stack/TaggedQuestions"));
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
      chartType,
      browserType,
      key
    } = option,
    {
      items
    } = json || {},
    _items = _crItems(items);
  return createElement(_TaggedQuestions.default, {
    key,
    repo,
    requestType,
    caption: repo,
    items: _items,
    onCloseItem: (0, _uiApi.bindTo)(onCloseItem, chartType, browserType, key),
    onWatchItem: onWatchItem,
    ...parentProps
  });
};
var _default = exports.default = fStackTaggedQuestions;
//# sourceMappingURL=fStackTaggedQuestions.js.map