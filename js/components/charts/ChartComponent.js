"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _uiApi = require("../uiApi");
var _chart = require("chart.js");
var _configChart = _interopRequireDefault(require("./configChart"));
var _merge = _interopRequireDefault(require("../../utils/merge"));
var _deepEqual = _interopRequireDefault(require("../../utils/deepEqual"));
var _omit = _interopRequireDefault(require("../../utils/omit"));
var _jsxRuntime = require("react/jsx-runtime");
var IGNORED_PROPERTIES = ['id', 'width', 'height', 'onElementsClick'];
_chart.Chart.register(_chart.LineElement, _chart.LineController, _chart.CategoryScale, _chart.LinearScale, _chart.PointElement, _chart.Legend, _chart.Tooltip);
(0, _configChart["default"])(_chart.Chart);
var _isFn = function _isFn(fn) {
    return typeof fn === 'function';
  },
  DF_OPTIONS = {
    tooltips: {
      callbacks: {
        labelTextColor: function labelTextColor(tooltipItem, chartInst) {
          return chartInst.data.datasets[tooltipItem.datasetIndex].borderColor;
        }
      }
    }
  };
var _isNotShouldRerender = function _isNotShouldRerender(prevProps, nextProps) {
    return (0, _deepEqual["default"])((0, _omit["default"])(prevProps, IGNORED_PROPERTIES), (0, _omit["default"])(nextProps, IGNORED_PROPERTIES), {
      strict: true
    });
  },
  _renderChart = function _renderChart(refChartInst, refCanvas, type, data, options) {
    (0, _uiApi.setRefValue)(refChartInst, new _chart.Chart((0, _uiApi.getRefValue)(refCanvas), {
      type: type,
      data: data,
      options: (0, _merge["default"])(DF_OPTIONS, options)
    }));
  },
  _updateChart = function _updateChart(chartInst, data, options) {
    if (options) {
      chartInst.options = (0, _merge["default"])(chartInst.options, options);
    }
    chartInst.config.data = (0, _extends2["default"])({}, chartInst.config.data, data);
    chartInst.update();
  };
var ChartComponent = (0, _uiApi.memo)(function (_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'line' : _ref$type,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 150 : _ref$height,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? 300 : _ref$width,
    _ref$redraw = _ref.redraw,
    redraw = _ref$redraw === void 0 ? false : _ref$redraw,
    data = _ref.data,
    options = _ref.options,
    onElementsClick = _ref.onElementsClick;
  var _refCanvas = (0, _uiApi.useRef)(),
    _refChartInst = (0, _uiApi.useRef)(),
    _hClick = (0, _uiApi.useMemo)(function () {
      return _isFn(onElementsClick) ? function (event) {
        var elems = (0, _uiApi.getRefValue)(_refChartInst).getElementsAtEvent(event);
        if (elems.length) {
          onElementsClick(elems);
        }
      } : null;
    }, [onElementsClick]);
  (0, _uiApi.useLayoutEffect)(function () {
    var _chartInst = (0, _uiApi.getRefValue)(_refChartInst);
    if (_chartInst) {
      if (redraw) {
        _chartInst.destroy();
        _renderChart(_refChartInst, _refCanvas, type, data, options);
      } else {
        _updateChart(_chartInst, data, options);
      }
    }
  });

  /*eslint-disable react-hooks/exhaustive-deps */
  (0, _uiApi.useLayoutEffect)(function () {
    _renderChart(_refChartInst, _refCanvas, type, data, options);
    return function () {
      (0, _uiApi.getRefValue)(_refChartInst).destroy();
      (0, _uiApi.setRefValue)(_refChartInst, null);
    };
  }, []);
  // type, data, options
  /*eslint-enable react-hooks/exhaustive-deps */

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("canvas", {
    ref: _refCanvas,
    height: height,
    width: width,
    onClick: _hClick
  });
}, _isNotShouldRerender);

/*
ChartComp.propTypes = {
  type: PropTypes.oneOf([
	  'line',
		'bar'
		'horizontalBar',
	  'doughnut',
		'pie',
		'scatter',
		'bubble'
		'radar',
		'polarArea'
	]),
	width: PropTypes.number,
	height: PropTypes.number,
	redraw: PropTypes.bool,
	data: PropTypes.object.isRequired,
	options: PropTypes.object,
	legend: PropTypes.object,
	legendOptions: PropTypes.object
	onElementsClick: PropTypes.func
},
*/
var _default = ChartComponent;
exports["default"] = _default;
//# sourceMappingURL=ChartComponent.js.map