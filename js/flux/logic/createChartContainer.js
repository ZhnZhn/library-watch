"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _ChartActions = require("../actions/ChartActions");

var _ComponentActions = require("../actions/ComponentActions");

var _CompItemList = _interopRequireDefault(require("../../components/zhn-containers/CompItemList"));

var _jsxRuntime = require("react/jsx-runtime");

var createChartContainer = function createChartContainer(conf, browserType) {
  var Comp = conf.chartContainerComp || _CompItemList["default"],
      chartType = conf.type;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Comp, {
    caption: conf.chartContainerCaption,
    chartType: chartType,
    browserType: browserType,
    onCloseContainer: _ComponentActions.ComponentActions.closeChartContainer.bind(null, chartType, browserType),
    onRemoveAll: _ChartActions.ChartActions.removeAll.bind(null, chartType, browserType)
  }, chartType);
};

var _default = createChartContainer;
exports["default"] = _default;
//# sourceMappingURL=createChartContainer.js.map