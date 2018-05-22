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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ChartComponent = require('./ChartComponent');

var _ChartComponent2 = _interopRequireDefault(_ChartComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LineChart = function (_Component) {
	(0, _inherits3.default)(LineChart, _Component);

	function LineChart() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, LineChart);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = LineChart.__proto__ || Object.getPrototypeOf(LineChart)).call.apply(_ref, [this].concat(args))), _this), _this._refChart = function (node) {
			return _this.chart_instance = node;
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(LineChart, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_ChartComponent2.default, (0, _extends3.default)({}, this.props, {
				ref: this._refChart,
				type: 'line'
			}));
		}
	}]);
	return LineChart;
}(_react.Component);

exports.default = LineChart;
//# sourceMappingURL=LineChart.js.map