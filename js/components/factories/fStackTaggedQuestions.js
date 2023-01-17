"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _domFn = require("../../utils/domFn");
var _formatDate = _interopRequireDefault(require("../../utils/formatDate"));
var _TaggedQuestions = _interopRequireDefault(require("../items/stack/TaggedQuestions"));
var THREE_ZERO = '000';
var _fnTransform = function _fnTransform(items) {
  return (items || []).map(function (item) {
    var title = item.title,
      last_activity_date = item.last_activity_date,
      _item$owner = item.owner,
      owner = _item$owner === void 0 ? {} : _item$owner,
      display_name = owner.display_name,
      _millisUTC = last_activity_date + '' + THREE_ZERO;
    item.dateAgo = (0, _formatDate["default"])(_millisUTC);
    item.title = (0, _domFn.htmlDecode)(title);
    item.owner.display_name = (0, _domFn.htmlDecode)(display_name);
    return item;
  });
};
var fStackTaggedQuestions = function fStackTaggedQuestions(_ref) {
  var createElement = _ref.createElement,
    option = _ref.option,
    _ref$json = _ref.json,
    json = _ref$json === void 0 ? {} : _ref$json,
    parentProps = _ref.parentProps,
    onCloseItem = _ref.onCloseItem,
    onWatchItem = _ref.onWatchItem;
  var repo = option.repo,
    requestType = option.requestType,
    chartType = option.chartType,
    browserType = option.browserType,
    key = option.key,
    _items = _fnTransform(json.items);
  return createElement(_TaggedQuestions["default"], (0, _extends2["default"])({
    key: key,
    repo: repo,
    requestType: requestType,
    caption: repo,
    items: _items,
    onCloseItem: onCloseItem.bind(null, chartType, browserType, key),
    onWatchItem: onWatchItem
  }, parentProps));
};
var _default = fStackTaggedQuestions;
exports["default"] = _default;
//# sourceMappingURL=fStackTaggedQuestions.js.map