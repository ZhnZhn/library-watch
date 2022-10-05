"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _uiApi = require("../../components/uiApi");

var _RouterDialog = _interopRequireDefault(require("../../components/dialogs/RouterDialog"));

var _ChartActions = require("../actions/ChartActions");

var onLoadChart = _ChartActions.ChartActions.loadStock,
    onShowChart = _ChartActions.ChartActions.showChart;

var createDialog = function createDialog(conf, browserType) {
  var dialogType = conf.type,
      props = conf.dialogProps || {},
      Comp = conf.dialogType ? _RouterDialog["default"][conf.dialogType] || _RouterDialog["default"].DEFAULT : _RouterDialog["default"].DEFAULT;
  return (0, _uiApi.createElement)(Comp, (0, _extends2["default"])({
    key: dialogType,
    caption: conf.dialogCaption,
    optionURI: conf.optionURI,
    optionsJsonProp: conf.optionsJsonProp,
    onLoad: onLoadChart.bind(null, dialogType, browserType),
    onShow: onShowChart.bind(null, dialogType, browserType)
  }, props));
};

var _default = createDialog;
exports["default"] = _default;
//# sourceMappingURL=createDialog.js.map