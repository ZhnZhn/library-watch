'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _timeago2 = require('timeago.js');

var _timeago3 = _interopRequireDefault(_timeago2);

var _DomUtil = require('../../utils/DomUtil');

var _DomUtil2 = _interopRequireDefault(_DomUtil);

var _StackTaggedQuestions = require('../items/StackTaggedQuestions');

var _StackTaggedQuestions2 = _interopRequireDefault(_StackTaggedQuestions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var THREE_ZERO = '000';

var _fnTransform = function _fnTransform() {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var _timeago = (0, _timeago3.default)(Date.now());
  return items.map(function (item) {
    var title = item.title,
        last_activity_date = item.last_activity_date,
        _item$owner = item.owner,
        owner = _item$owner === undefined ? {} : _item$owner,
        display_name = owner.display_name,
        _millisUTC = last_activity_date + '' + THREE_ZERO;

    item.dateAgo = _timeago.format(_millisUTC);
    item.title = _DomUtil2.default.htmlDecode(title);
    item.owner.display_name = _DomUtil2.default.htmlDecode(display_name);

    return item;
  });
};

var fStackTaggedQuestions = function fStackTaggedQuestions(_ref) {
  var factory = _ref.factory,
      option = _ref.option,
      _ref$json = _ref.json,
      json = _ref$json === undefined ? {} : _ref$json,
      parentProps = _ref.parentProps,
      onCloseItem = _ref.onCloseItem,
      onWatchItem = _ref.onWatchItem;

  var repo = option.repo,
      requestType = option.requestType,
      chartType = option.chartType,
      browserType = option.browserType,
      key = option.key,
      _items = _fnTransform(json.items);

  return factory.createElement(_StackTaggedQuestions2.default, (0, _extends3.default)({
    key: key,
    repo: repo,
    requestType: requestType,
    caption: '' + repo,
    items: _items,
    onCloseItem: onCloseItem.bind(null, chartType, browserType, key),
    onWatchItem: onWatchItem
  }, parentProps));
};

exports.default = fStackTaggedQuestions;
//# sourceMappingURL=fStackTaggedQuestions.js.map