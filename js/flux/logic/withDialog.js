'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

  return _react2.default.createElement(Comp, _extends({
    key: dialogType,
    caption: conf.dialogCaption,
    optionURI: conf.optionURI,
    optionsJsonProp: conf.optionsJsonProp,

    onLoad: onLoadChart.bind(null, dialogType, browserType),
    onShow: onShowChart.bind(null, dialogType, browserType)
  }, props));
};

var WithDialog = {
  createDialog: function createDialog(dialogType, browserType) {
    return _createDialogComp(this.getDataConf(dialogType), browserType);
  }
};

exports.default = WithDialog;
//# sourceMappingURL=WithDialog.js.map