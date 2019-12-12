"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _ChartComponent = _interopRequireDefault(require("./ChartComponent"));

var LineChart =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(LineChart, _Component);

  function LineChart() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this._refChart = function (node) {
      return _this.chart_instance = node;
    };

    return _this;
  }

  var _proto = LineChart.prototype;

  _proto.render = function render() {
    return _react["default"].createElement(_ChartComponent["default"], (0, _extends2["default"])({}, this.props, {
      ref: this._refChart,
      type: "line"
    }));
  };

  return LineChart;
}(_react.Component);

var _default = LineChart;
exports["default"] = _default;
//# sourceMappingURL=LineChart.js.map