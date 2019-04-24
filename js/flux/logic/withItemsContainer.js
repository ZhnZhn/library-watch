'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ChartActions = require('../actions/ChartActions');

var _ChartActions2 = _interopRequireDefault(_ChartActions);

var _ComponentActions = require('../actions/ComponentActions');

var _ComponentActions2 = _interopRequireDefault(_ComponentActions);

var _ChartContainer = require('../../components/zhn-containers/ChartContainer2');

var _ChartContainer2 = _interopRequireDefault(_ChartContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _createChartContainerComp = function _createChartContainerComp(conf, browserType) {
  var Comp = conf.chartContainerComp ? conf.chartContainerComp : _ChartContainer2.default,
      _chartType = conf.type;
  return _react2.default.createElement(Comp, {
    key: _chartType,
    caption: conf.chartContainerCaption,
    chartType: _chartType,
    browserType: browserType,
    onCloseContainer: _ComponentActions2.default.closeChartContainer.bind(null, _chartType, browserType),
    onRemoveAll: _ChartActions2.default.removeAll.bind(null, _chartType, browserType)
  });
};

var withItemsContainer = {
  createChartContainer: function createChartContainer(dialogType, browserType) {
    return _createChartContainerComp(this.getDataConf(dialogType), browserType);
  }
};

exports.default = withItemsContainer;
//# sourceMappingURL=withItemsContainer.js.map