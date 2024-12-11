"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _itemStore = require("../itemStore");
var _CompItemList = _interopRequireDefault(require("../../components/zhn-containers/CompItemList"));
var _jsxRuntime = require("react/jsx-runtime");
const createChartContainer = (conf, browserType) => {
  const Comp = conf.chartContainerComp || _CompItemList.default,
    chartType = conf.type;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Comp, {
    caption: conf.chartContainerCaption,
    chartType: chartType,
    browserType: browserType,
    onCloseContainer: _itemStore.closeChartContainer.bind(null, chartType, browserType),
    onRemoveAll: _itemStore.removeItems.bind(null, chartType, browserType)
  }, chartType);
};
var _default = exports.default = createChartContainer;
//# sourceMappingURL=createChartContainer.js.map