"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _RouterItem = _interopRequireDefault(require("../../components/factories/RouterItem"));

var _ChartActions = _interopRequireDefault(require("../actions/ChartActions"));

var _ComponentActions = _interopRequireDefault(require("../actions/ComponentActions"));

var _Type = require("../../constants/Type");

var onWatchItem = _ComponentActions["default"].showModalDialog.bind(null, _Type.ModalDialog.ADD_ITEM);

var withItem = {
  createItem: function createItem(option, json, parentProps) {
    var requestType = option.requestType,
        chartType = option.chartType,
        key = option.key,
        _fnFactory = _RouterItem["default"][requestType] ? _RouterItem["default"][requestType] : _RouterItem["default"].DEFAULT;

    return _fnFactory({
      factory: this.getElementFactory(),
      option: option,
      json: json,
      parentProps: parentProps,
      onMoveToTop: _ChartActions["default"].moveToTop.bind(null, chartType, key),
      onCloseItem: _ChartActions["default"].closeChart,
      onWatchItem: onWatchItem
    });
  }
};
var _default = withItem;
exports["default"] = _default;
//# sourceMappingURL=WithItem.js.map