'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RouterDialog = require('../../components/dialogs/RouterDialog');

var _RouterDialog2 = _interopRequireDefault(_RouterDialog);

var _ChartActions = require('../actions/ChartActions');

var _ChartActions2 = _interopRequireDefault(_ChartActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var onLoadChart = _ChartActions2.default.loadStock,
    onShowChart = _ChartActions2.default.showChart;

var _createDialogComp = function _createDialogComp(conf, browserType) {
  var dialogType = conf.type,
      props = conf.dialogProps ? conf.dialogProps : {},
      Comp = conf.dialogType ? _RouterDialog2.default[conf.dialogType] ? _RouterDialog2.default[conf.dialogType] : _RouterDialog2.default.DEFAULT : _RouterDialog2.default.DEFAULT;

  return _react2.default.createElement(Comp, (0, _extends3.default)({
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

exports.default = withDialog;
//# sourceMappingURL=withDialog.js.map