'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ChartComponent = require('./ChartComponent');

var _ChartComponent2 = _interopRequireDefault(_ChartComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LineChart = _react2.default.createClass({
	displayName: 'LineChart',
	render: function render() {
		var _this = this;

		return _react2.default.createElement(_ChartComponent2.default, _extends({}, this.props, {
			ref: function ref(_ref) {
				return _this.chart_instance = _ref && _ref.chart_instance;
			},
			type: 'line'
		}));
	}
});

exports.default = LineChart;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\charts\LineChart.js.map