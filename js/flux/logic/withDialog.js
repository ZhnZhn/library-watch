"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _RouterDialog = _interopRequireDefault(require("../../components/dialogs/RouterDialog"));

var _ChartActions = _interopRequireDefault(require("../actions/ChartActions"));

var onLoadChart = _ChartActions["default"].loadStock,
    onShowChart = _ChartActions["default"].showChart;

var _createDialogComp = function _createDialogComp(conf, browserType) {
  var dialogType = conf.type,
      props = conf.dialogProps ? conf.dialogProps : {},
      Comp = conf.dialogType ? _RouterDialog["default"][conf.dialogType] ? _RouterDialog["default"][conf.dialogType] : _RouterDialog["default"].DEFAULT : _RouterDialog["default"].DEFAULT;
  return /*#__PURE__*/_react["default"].createElement(Comp, (0, _extends2["default"])({
    key: dialogType,
    caption: conf.dialogCaption,
    optionURI: conf.optionURI,
    optionsJsonProp: conf.optionsJsonProp,
    onLoad: onLoadChart.bind(null, dialogType, browserType),
    onShow: onShowChart.bind(null, dialogType, browserType)
  }, props));
};

var withDialog = {
  createDialog: function createDialog(dialogType, browserType) {
    return _createDialogComp(this.getDataConf(dialogType), browserType);
  }
};
var _default = withDialog;
exports["default"] = _default;
//# sourceMappingURL=withDialog.js.map