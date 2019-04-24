'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _RouterItem = require('../../components/factories/RouterItem');

var _RouterItem2 = _interopRequireDefault(_RouterItem);

var _ChartActions = require('../actions/ChartActions');

var _ChartActions2 = _interopRequireDefault(_ChartActions);

var _ComponentActions = require('../actions/ComponentActions');

var _ComponentActions2 = _interopRequireDefault(_ComponentActions);

var _Type = require('../../constants/Type');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var onWatchItem = _ComponentActions2.default.showModalDialog.bind(null, _Type.ModalDialog.ADD_ITEM);

var withItem = {
  createItem: function createItem(option, json, parentProps) {
    var requestType = option.requestType,
        chartType = option.chartType,
        key = option.key,
        _fnFactory = _RouterItem2.default[requestType] ? _RouterItem2.default[requestType] : _RouterItem2.default.DEFAULT;

    return _fnFactory({
      factory: this.getElementFactory(),
      option: option, json: json, parentProps: parentProps,
      onMoveToTop: _ChartActions2.default.moveToTop.bind(null, chartType, key),
      onCloseItem: _ChartActions2.default.closeChart,
      onWatchItem: onWatchItem
    });
  }
};

exports.default = withItem;
//# sourceMappingURL=withItem.js.map