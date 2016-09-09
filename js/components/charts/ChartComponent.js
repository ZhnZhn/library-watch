'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _chart = require('chart.js');

var _chart2 = _interopRequireDefault(_chart);

var _deepEqual = require('./deepEqual');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chart2.default.defaults.global.defaultFontColor = 'black';
_chart2.default.defaults.global.defaultFontSize = 14;
_chart2.default.defaults.global.defaultFontStyle = 'bold';

_chart2.default.defaults.global.tooltips.titleFontColor = '#a487d4';
_chart2.default.defaults.global.tooltips.titleFontSize = 16;
_chart2.default.defaults.global.tooltips.bodyFontColor = '#80c040';
_chart2.default.defaults.global.tooltips.bodyFontSize = 16;

var ChartComponent = _react2.default.createClass({

	displayName: 'ChartComponent',

	propTypes: {
		data: _react.PropTypes.object.isRequired,
		height: _react.PropTypes.number,
		legend: _react.PropTypes.object,
		onElementsClick: _react.PropTypes.func,
		options: _react.PropTypes.object,
		redraw: _react.PropTypes.bool,
		type: _react.PropTypes.oneOf(['doughnut', 'pie', 'line', 'bar', 'horizontalBar', 'radar', 'polarArea']),
		width: _react.PropTypes.number
	},

	getDefaultProps: function getDefaultProps() {
		return {
			legend: {
				display: true,
				position: 'bottom'
			},
			type: 'doughnut',
			height: 150,
			width: 300,
			redraw: false
		};
	},
	componentWillMount: function componentWillMount() {
		this.chart_instance = undefined;
	},
	componentDidMount: function componentDidMount() {
		this.renderChart();
	},
	componentDidUpdate: function componentDidUpdate() {
		if (this.props.redraw) {
			this.chart_instance.destroy();
			this.renderChart();
		} else {
			this.updateChart();
		}
	},
	_objectWithoutProperties: function _objectWithoutProperties(obj, keys) {
		var target = {};
		for (var i in obj) {
			if (keys.indexOf(i) >= 0) continue;
			if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
			target[i] = obj[i];
		}
		return target;
	},
	shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
		var ignoredProperties = ['id', 'width', 'height', 'onElementsClick'];
		var compareNext = this._objectWithoutProperties(nextProps, ignoredProperties);
		var compareNow = this._objectWithoutProperties(this.props, ignoredProperties);
		return !(0, _deepEqual2.default)(compareNext, compareNow, { strict: true });
	},
	componentWillUnmount: function componentWillUnmount() {
		this.chart_instance.destroy();
	},
	updateChart: function updateChart() {
		var _props = this.props;
		var data = _props.data;
		var options = _props.options;


		if (!this.chart_instance) return;

		if (options) {
			this.chart_instance.options = _chart2.default.helpers.configMerge(this.chart_instance.options, options);
		}

		this.chart_instance.config.data = _extends({}, this.chart_instance.config.data, data);

		this.chart_instance.update();
	},
	renderChart: function renderChart() {
		//legend
		var _props2 = this.props;
		var data = _props2.data;
		var options = _props2.options;
		var type = _props2.type;

		var node = _reactDom2.default.findDOMNode(this);

		this.chart_instance = new _chart2.default(node, {
			type: type,
			data: data,
			options: options
		});
	},
	handleOnClick: function handleOnClick(evt) {
		var elems = this.chart_instance.getElementsAtEvent(evt);
		if (elems.length) {
			var onElementsClick = this.props.onElementsClick;

			onElementsClick(elems);
		}
	},
	render: function render() {
		var _props3 = this.props;
		var height = _props3.height;
		var width = _props3.width;
		var onElementsClick = _props3.onElementsClick;


		return _react2.default.createElement('canvas', {
			height: height,
			width: width,
			onClick: typeof onElementsClick === 'function' ? this.handleOnClick : null
		});
	}
});

exports.default = ChartComponent;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\charts\ChartComponent.js.map