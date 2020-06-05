"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ChartActions = _interopRequireDefault(require("../actions/ChartActions"));

var _ComponentActions = _interopRequireDefault(require("../actions/ComponentActions"));

var _ChartContainer = _interopRequireDefault(require("../../components/zhn-containers/ChartContainer2"));

var _createChartContainerComp = function _createChartContainerComp(conf, browserType) {
  var Comp = conf.chartContainerComp ? conf.chartContainerComp : _ChartContainer["default"],
      _chartType = conf.type;
  return /*#__PURE__*/_react["default"].createElement(Comp, {
    key: _chartType,
    caption: conf.chartContainerCaption,
    chartType: _chartType,
    browserType: browserType,
    onCloseContainer: _ComponentActions["default"].closeChartContainer.bind(null, _chartType, browserType),
    onRemoveAll: _ChartActions["default"].removeAll.bind(null, _chartType, browserType)
  });
};

var withItemsContainer = {
  createChartContainer: function createChartContainer(dialogType, browserType) {
    return _createChartContainerComp(this.getDataConf(dialogType), browserType);
  }
};
var _default = withItemsContainer;
exports["default"] = _default;
//# sourceMappingURL=withItemsContainer.js.map