"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _chart = require("chart.js");
var _configChart = _interopRequireDefault(require("./configChart"));
var _merge = _interopRequireDefault(require("../../utils/merge"));
var _deepEqual = _interopRequireDefault(require("../../utils/deepEqual"));
var _omit = _interopRequireDefault(require("../../utils/omit"));
var _jsxRuntime = require("react/jsx-runtime");
const IGNORED_PROPERTIES = ['id', 'width', 'height', 'onElementsClick'];
_chart.Chart.register(_chart.LineElement, _chart.LineController, _chart.BarElement, _chart.BarController, _chart.CategoryScale, _chart.LinearScale, _chart.PointElement, _chart.Legend, _chart.Tooltip);
(0, _configChart.default)(_chart.Chart);
const DF_OPTIONS = {
  tooltips: {
    callbacks: {
      labelTextColor: function (tooltipItem, chartInst) {
        return chartInst.data.datasets[tooltipItem.datasetIndex].borderColor;
      }
    }
  }
};
const _isNotShouldRerender = (prevProps, nextProps) => (0, _deepEqual.default)((0, _omit.default)(prevProps, IGNORED_PROPERTIES), (0, _omit.default)(nextProps, IGNORED_PROPERTIES), {
    strict: true
  }),
  _renderChart = (refChartInst, refCanvas, type, data, options) => {
    (0, _uiApi.setRefValue)(refChartInst, new _chart.Chart((0, _uiApi.getRefValue)(refCanvas), {
      type,
      data,
      options: (0, _merge.default)({
        ...DF_OPTIONS
      }, options)
    }));
  },
  _updateChart = (chartInst, data, options) => {
    if (options) {
      chartInst.options = (0, _merge.default)(chartInst.options, options);
    }
    chartInst.config.data = {
      ...chartInst.config.data,
      ...data
    };
    chartInst.update();
  };
const ChartComponent = (0, _uiApi.memo)(_ref => {
  let {
    type = 'line',
    height = 150,
    width = 300,
    redraw = false,
    data,
    options,
    onElementsClick
  } = _ref;
  const _refCanvas = (0, _uiApi.useRef)(),
    _refChartInst = (0, _uiApi.useRef)(),
    _hClick = (0, _uiApi.useMemo)(() => (0, _uiApi.isFn)(onElementsClick) ? event => {
      const elems = (0, _uiApi.getRefValue)(_refChartInst).getElementsAtEvent(event);
      if (elems.length) {
        onElementsClick(elems);
      }
    } : null, [onElementsClick]);
  (0, _uiApi.useLayoutEffect)(() => {
    const _chartInst = (0, _uiApi.getRefValue)(_refChartInst);
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
  (0, _uiApi.useLayoutEffect)(() => {
    _renderChart(_refChartInst, _refCanvas, type, data, options);
    return () => {
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
var _default = exports.default = ChartComponent;
//# sourceMappingURL=ChartComponent.js.map