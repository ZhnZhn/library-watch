"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _timeago2 = _interopRequireDefault(require("timeago.js"));

var _DomUtil = _interopRequireDefault(require("../../utils/DomUtil"));

var _TaggedQuestions = _interopRequireDefault(require("../items/stack/TaggedQuestions"));

var THREE_ZERO = '000';

var _fnTransform = function _fnTransform(items) {
  if (items === void 0) {
    items = [];
  }

  var _timeago = (0, _timeago2["default"])(Date.now());

  return items.map(function (item) {
    var title = item.title,
        last_activity_date = item.last_activity_date,
        _item$owner = item.owner,
        owner = _item$owner === void 0 ? {} : _item$owner,
        display_name = owner.display_name,
        _millisUTC = last_activity_date + '' + THREE_ZERO;

    item.dateAgo = _timeago.format(_millisUTC);
    item.title = _DomUtil["default"].htmlDecode(title);
    item.owner.display_name = _DomUtil["default"].htmlDecode(display_name);
    return item;
  });
};

var fStackTaggedQuestions = function fStackTaggedQuestions(_ref) {
  var factory = _ref.factory,
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

  return factory.createElement(_TaggedQuestions["default"], (0, _extends2["default"])({
    key: key,
    repo: repo,
    requestType: requestType,
    caption: "" + repo,
    items: _items,
    onCloseItem: onCloseItem.bind(null, chartType, browserType, key),
    onWatchItem: onWatchItem
  }, parentProps));
};

var _default = fStackTaggedQuestions;
exports["default"] = _default;
//# sourceMappingURL=fStackTaggedQuestions.js.map