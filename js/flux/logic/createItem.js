"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../../components/uiApi");

var _RouterItem = _interopRequireDefault(require("../../components/factories/RouterItem"));

var _ChartActions = require("../actions/ChartActions");

var _ComponentActions = require("../actions/ComponentActions");

var _Type = require("../../constants/Type");

var onWatchItem = _ComponentActions.ComponentActions.showModalDialog.bind(null, _Type.ModalDialog.ADD_ITEM);

var createItem = function createItem(option, json, parentProps) {
  var requestType = option.requestType,
      chartType = option.chartType,
      key = option.key,
      _fnFactory = _RouterItem["default"][requestType] || _RouterItem["default"].DEFAULT;

  return _fnFactory({
    createElement: _uiApi.createElement,
    option: option,
    json: json,
    parentProps: parentProps,
    onMoveToTop: _ChartActions.ChartActions.moveToTop.bind(null, chartType, key),
    onCloseItem: _ChartActions.ChartActions.closeChart,
    onWatchItem: onWatchItem
  });
};

var _default = createItem;
exports["default"] = _default;
//# sourceMappingURL=createItem.js.map