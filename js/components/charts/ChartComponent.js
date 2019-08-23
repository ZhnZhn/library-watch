'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;
//import ReactDOM from 'react-dom';


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chart = require('chart.js');

var _chart2 = _interopRequireDefault(_chart);

var _deepEqual = require('./deepEqual');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IGNORED_PROPERTIES = ['id', 'width', 'height', 'onElementsClick'];

var _configMerge = _chart2.default.helpers.configMerge;

var _isFn = function _isFn(fn) {
	return typeof fn === 'function';
};
var _assign = Object.assign;

_assign(_chart2.default.defaults.global, {
	defaultFontColor: 'black',
	defaultFontSize: 14,
	defaultFontStyle: 'bold'
});

_assign(_chart2.default.defaults.global.tooltips, {
	titleFontColor: '#a487d4',
	titleFontSize: 16,
	bodyFontColor: '#80c040',
	bodyFontSize: 16
});

_assign(_chart2.default.defaults.global.legend, {
	display: true,
	position: 'bottom'
});

var DF_OPTIONS = {
	tooltips: {
		callbacks: {
			labelTextColor: function labelTextColor(tooltipItem, chartInst) {
				return chartInst.data.datasets[tooltipItem.datasetIndex].borderColor;
			}
		}
	}
};

var _crObjWithoutProperties = function _crObjWithoutProperties(obj, keys) {
	var target = {};
	for (var propName in obj) {
		if (keys.indexOf(propName) >= 0) continue;
		if (!Object.prototype.hasOwnProperty.call(obj, propName)) continue;
		target[propName] = obj[propName];
	}
	return target;
};

var ChartComponent = (_temp2 = _class = function (_Component) {
	(0, _inherits3.default)(ChartComponent, _Component);

	function ChartComponent() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, ChartComponent);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ChartComponent.__proto__ || Object.getPrototypeOf(ChartComponent)).call.apply(_ref, [this].concat(args))), _this), _this.updateChart = function () {
			var _this$props = _this.props,
			    data = _this$props.data,
			    options = _this$props.options;


			if (!_this.chart_instance) return;

			if (options) {
				_this.chart_instance.options = _configMerge(_this.chart_instance.options, options);
			}

			_this.chart_instance.config.data = (0, _extends3.default)({}, _this.chart_instance.config.data, data);

			_this.chart_instance.update();
		}, _this.renderChart = function () {
			var _this$props2 = _this.props,
			    data = _this$props2.data,
			    options = _this$props2.options,
			    type = _this$props2.type,
			    _options = _configMerge(DF_OPTIONS, options);

			_this.chart_instance = new _chart2.default(_this.rootNode, {
				type: type,
				data: data,
				options: _options
			});
		}, _this.handleOnClick = function (evt) {
			var elems = _this.chart_instance.getElementsAtEvent(evt);
			if (elems.length) {
				var onElementsClick = _this.props.onElementsClick;

				onElementsClick(elems);
			}
		}, _this._refRoot = function (n) {
			return _this.rootNode = n;
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	//displayName: 'ChartComponent',

	/*
 static propTypes = {
 data: PropTypes.object.isRequired,
 height: PropTypes.number,
 legend: PropTypes.object,
 onElementsClick: PropTypes.func,
 options: PropTypes.object,
 redraw: PropTypes.bool,
 type: PropTypes.oneOf(['doughnut', 'pie', 'line', 'bar', 'horizontalBar', 'radar', 'polarArea']),
 width: PropTypes.number
 legendOptions: PropTypes.object
 },
 */

	(0, _createClass3.default)(ChartComponent, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.chart_instance = void 0;
			this.renderChart();
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			if (this.props.redraw) {
				this.chart_instance.destroy();
				this.renderChart();
			} else {
				this.updateChart();
			}
		}
	}, {
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate(nextProps, nextState) {
			var compareNext = _crObjWithoutProperties(nextProps, IGNORED_PROPERTIES),
			    compareNow = _crObjWithoutProperties(this.props, IGNORED_PROPERTIES);
			return !(0, _deepEqual2.default)(compareNext, compareNow, { strict: true });
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.chart_instance.destroy();
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    height = _props.height,
			    width = _props.width,
			    onElementsClick = _props.onElementsClick,
			    _onClick = _isFn(onElementsClick) ? this.handleOnClick : null;

			return _react2.default.createElement('canvas', {
				ref: this._refRoot,
				height: height,
				width: width,
				onClick: _onClick
			});
		}
	}]);
	return ChartComponent;
}(_react.Component), _class.defaultProps = {
	type: 'doughnut',
	height: 150,
	width: 300,
	redraw: false
}, _temp2);
exports.default = ChartComponent;
//# sourceMappingURL=ChartComponent.js.map