'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ComponentActions = require('../actions/ComponentActions');

var _ComponentActions2 = _interopRequireDefault(_ComponentActions);

var _ChartContainer = require('../../components/zhn-containers/ChartContainer2');

var _ChartContainer2 = _interopRequireDefault(_ChartContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//const _onCloseItem = ChartActions.closeChart;


//import ChartActions from '../actions/ChartActions';
var _fnCloseChartContainer = function _fnCloseChartContainer(chartType, browserType) {
  return _ComponentActions2.default.closeChartContainer.bind(null, chartType, browserType);
};

var _createChartContainerComp = function _createChartContainerComp(conf, browserType) {
  var Comp = conf.chartContainerComp ? conf.chartContainerComp : _ChartContainer2.default;
  return _react2.default.createElement(Comp, {
    key: conf.type,
    caption: conf.chartContainerCaption,
    chartType: conf.type,
    browserType: browserType,
    onCloseContainer: _fnCloseChartContainer(conf.type, browserType)
    //onCloseItem : _onCloseItem
  });
};

var withItemsContainer = {
  createChartContainer: function createChartContainer(dialogType, browserType) {
    return _createChartContainerComp(this.getDataConf(dialogType), browserType);
  }
};

exports.default = withItemsContainer;
//# sourceMappingURL=withItemsContainer.js.map