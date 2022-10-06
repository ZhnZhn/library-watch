"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _RouterDialog = _interopRequireDefault(require("../../components/dialogs/RouterDialog"));

var _ChartActions = require("../actions/ChartActions");

var _jsxRuntime = require("react/jsx-runtime");

var onLoadChart = _ChartActions.ChartActions.loadStock,
    onShowChart = _ChartActions.ChartActions.showChart;

var createDialog = function createDialog(conf, browserType) {
  var dialogType = conf.type,
      Comp = conf.dialogType ? _RouterDialog["default"][conf.dialogType] || _RouterDialog["default"].DEFAULT : _RouterDialog["default"].DEFAULT;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Comp, (0, _extends2["default"])({
    caption: conf.dialogCaption,
    optionURI: conf.optionURI,
    optionsJsonProp: conf.optionsJsonProp,
    onLoad: onLoadChart.bind(null, dialogType, browserType),
    onShow: onShowChart.bind(null, dialogType, browserType)
  }, conf.dialogProps), dialogType);
};

var _default = createDialog;
exports["default"] = _default;
//# sourceMappingURL=createDialog.js.map