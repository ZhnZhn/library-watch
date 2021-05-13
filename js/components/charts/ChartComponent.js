"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _chart = _interopRequireDefault(require("chart.js"));

var _configChart = _interopRequireDefault(require("./configChart"));

var _deepEqual = _interopRequireDefault(require("../../utils/deepEqual"));

var _omit = _interopRequireDefault(require("../../utils/omit"));

var _jsxRuntime = require("react/jsx-runtime");

var IGNORED_PROPERTIES = ['id', 'width', 'height', 'onElementsClick'];

var _isFn = function _isFn(fn) {
  return typeof fn === 'function';
},
    _configMerge = _chart["default"].helpers.configMerge;

(0, _configChart["default"])(_chart["default"]);
var DF_OPTIONS = {
  tooltips: {
    callbacks: {
      labelTextColor: function labelTextColor(tooltipItem, chartInst) {
        //console.log(chartInst.data.datasets[tooltipItem.datasetIndex].borderColor);
        return chartInst.data.datasets[tooltipItem.datasetIndex].borderColor;
      }
    }
  }
};

var ChartComponent = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(ChartComponent, _Component);

  function ChartComponent() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this._updateChart = function () {
      var _this$props = _this.props,
          data = _this$props.data,
          options = _this$props.options;
      if (!_this.chart_instance) return;

      if (options) {
        _this.chart_instance.options = _configMerge(_this.chart_instance.options, options);
      }

      _this.chart_instance.config.data = (0, _extends2["default"])({}, _this.chart_instance.config.data, data);

      _this.chart_instance.update();
    };

    _this._renderChart = function () {
      var _this$props2 = _this.props,
          data = _this$props2.data,
          options = _this$props2.options,
          type = _this$props2.type,
          _options = _configMerge(DF_OPTIONS, options);

      _this.chart_instance = new _chart["default"](_this.rootNode, {
        type: type,
        data: data,
        options: _options
      });
    };

    _this._hClick = function (evt) {
      var elems = _this.chart_instance.getElementsAtEvent(evt);

      if (elems.length) {
        _this.props.onElementsClick(elems);
      }
    };

    _this._refRoot = function (n) {
      return _this.rootNode = n;
    };

    return _this;
  }

  var _proto = ChartComponent.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this._renderChart();
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    if (this.props.redraw) {
      this.chart_instance.destroy();

      this._renderChart();
    } else {
      this._updateChart();
    }
  };

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    var compareNext = (0, _omit["default"])(nextProps, IGNORED_PROPERTIES),
        compareNow = (0, _omit["default"])(this.props, IGNORED_PROPERTIES);
    return !(0, _deepEqual["default"])(compareNext, compareNow, {
      strict: true
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.chart_instance.destroy();
  };

  _proto.render = function render() {
    var _this$props3 = this.props,
        height = _this$props3.height,
        width = _this$props3.width,
        onElementsClick = _this$props3.onElementsClick,
        _onClick = _isFn(onElementsClick) ? this._hClick : null;

    return /*#__PURE__*/(0, _jsxRuntime.jsx)("canvas", {
      ref: this._refRoot,
      height: height,
      width: width,
      onClick: _onClick
    });
  };

  return ChartComponent;
}(_react.Component);

ChartComponent.defaultProps = {
  type: 'doughnut',
  height: 150,
  width: 300,
  redraw: false
};
var _default = ChartComponent;
exports["default"] = _default;
//# sourceMappingURL=ChartComponent.js.map