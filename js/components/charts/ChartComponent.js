"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _chart = _interopRequireDefault(require("chart.js"));

var _deepEqual = _interopRequireDefault(require("./deepEqual"));

//import ReactDOM from 'react-dom';
var IGNORED_PROPERTIES = ['id', 'width', 'height', 'onElementsClick'];
var _configMerge = _chart["default"].helpers.configMerge;

var _isFn = function _isFn(fn) {
  return typeof fn === 'function';
};

var _assign = Object.assign;

_assign(_chart["default"].defaults.global, {
  defaultFontColor: 'black',
  defaultFontSize: 14,
  defaultFontStyle: 'bold'
});

_assign(_chart["default"].defaults.global.tooltips, {
  titleFontColor: '#a487d4',
  titleFontSize: 16,
  bodyFontColor: '#80c040',
  bodyFontSize: 16
});

_assign(_chart["default"].defaults.global.legend, {
  display: true,
  position: 'bottom'
});

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

var _crObjWithoutProperties = function _crObjWithoutProperties(obj, keys) {
  var target = {};

  for (var propName in obj) {
    if (keys.indexOf(propName) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, propName)) continue;
    target[propName] = obj[propName];
  }

  return target;
};

var ChartComponent = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(ChartComponent, _Component);

  function ChartComponent() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this.updateChart = function () {
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

    _this.renderChart = function () {
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

    _this.handleOnClick = function (evt) {
      var elems = _this.chart_instance.getElementsAtEvent(evt);

      if (elems.length) {
        var onElementsClick = _this.props.onElementsClick;
        onElementsClick(elems);
      }
    };

    _this._refRoot = function (n) {
      return _this.rootNode = n;
    };

    return _this;
  }

  var _proto = ChartComponent.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.chart_instance = void 0;
    this.renderChart();
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    if (this.props.redraw) {
      this.chart_instance.destroy();
      this.renderChart();
    } else {
      this.updateChart();
    }
  };

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    var compareNext = _crObjWithoutProperties(nextProps, IGNORED_PROPERTIES),
        compareNow = _crObjWithoutProperties(this.props, IGNORED_PROPERTIES);

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
        _onClick = _isFn(onElementsClick) ? this.handleOnClick : null;

    return /*#__PURE__*/_react["default"].createElement("canvas", {
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