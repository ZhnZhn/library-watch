"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../../components/uiApi");

var _ChartActions = require("../actions/ChartActions");

var _ComponentActions = require("../actions/ComponentActions");

var _CompItemList = _interopRequireDefault(require("../../components/zhn-containers/CompItemList"));

var createChartContainer = function createChartContainer(conf, browserType) {
  var Comp = conf.chartContainerComp || _CompItemList["default"],
      _chartType = conf.type;
  return (0, _uiApi.createElement)(Comp, {
    key: _chartType,
    caption: conf.chartContainerCaption,
    chartType: _chartType,
    browserType: browserType,
    onCloseContainer: _ComponentActions.ComponentActions.closeChartContainer.bind(null, _chartType, browserType),
    onRemoveAll: _ChartActions.ChartActions.removeAll.bind(null, _chartType, browserType)
  });
};

var _default = createChartContainer;
exports["default"] = _default;
//# sourceMappingURL=createChartContainer.js.map