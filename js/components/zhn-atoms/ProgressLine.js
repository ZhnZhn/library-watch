'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL = "progress-line";

var T = {
  WIDTH: 'width 500ms ease-out',
  OPACITY: 'opacity 400ms linear'
};

var _crStyle = function _crStyle(backgroundColor, opacity, width, transition) {
  return {
    backgroundColor: backgroundColor, width: width, opacity: opacity, transition: transition
  };
};

var ProgressLine = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(ProgressLine, _Component);

  function ProgressLine() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ProgressLine);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ProgressLine.__proto__ || Object.getPrototypeOf(ProgressLine)).call.apply(_ref, [this].concat(args))), _this), _this.wasCompleted = false, _this.idCompleted = null, _this.wasOpacied = false, _this.idOpacied = null, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ProgressLine, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.idCompleted) {
        clearTimeout(this.idCompleted);
      }
      if (this.idOpacied) {
        clearTimeout(this.idOpacied);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var _this2 = this;

      if (this.wasCompleted) {
        this.idCompleted = setTimeout(function () {
          _this2.idCompleted = null;
          _this2.forceUpdate();
        }, 800);
      } else if (this.wasOpacied) {
        this.idOpacied = setTimeout(function () {
          _this2.idOpacied = null;
          _this2.forceUpdate();
        }, 800);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var color = this.props.color;

      var _style = void 0;

      if (this.wasOpacied) {
        _style = _crStyle(color, 1, 0);
        this.wasOpacied = false;
      } else if (this.wasCompleted) {
        _style = _crStyle(color, 0, '100%', T.OPACITY);
        this.wasCompleted = false;
        this.wasOpacied = true;
      } else {
        var completed = this.props.completed;

        if (completed < 0) {
          completed = 0;
        } else if (completed >= 100) {
          completed = 100;
          this.wasCompleted = true;
        }
        _style = _crStyle(color, 1, completed + '%', T.WIDTH);
      }

      return _react2.default.createElement('div', { className: CL, style: _style });
    }
  }]);
  return ProgressLine;
}(_react.Component), _class.defaultProps = {
  color: '#2f7ed8'
}, _temp2);
exports.default = ProgressLine;
//# sourceMappingURL=ProgressLine.js.map