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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STYLE = {
  ARROW_CELL: {
    position: 'absolute',
    top: '10px',
    right: '0px',
    cursor: 'pointer',
    textAlign: 'center',
    verticalAlign: 'middle',
    width: '35px',
    paddingRight: '5px'
  },
  ARROW: {
    borderColor: '#999 transparent transparent',
    borderStyle: 'solid',
    borderWidth: '5px 5px 2.5px',
    display: 'inline-block',
    height: '0px',
    width: '0px'
  }
};

var C = {
  ANIMATION_CIRCLE: "circle infinite 1.25s linear",
  BORDER_COLOR: "rgb(27, 117, 187) transparent transparent"
};

var ArrowCell = function (_Component) {
  (0, _inherits3.default)(ArrowCell, _Component);

  function ArrowCell() {
    (0, _classCallCheck3.default)(this, ArrowCell);
    return (0, _possibleConstructorReturn3.default)(this, (ArrowCell.__proto__ || Object.getPrototypeOf(ArrowCell)).apply(this, arguments));
  }

  (0, _createClass3.default)(ArrowCell, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          styleArrow = _props.styleArrow,
          onClick = _props.onClick;

      return _react2.default.createElement(
        'span',
        {
          ref: function ref(c) {
            return _this2.arrowCell = c;
          },
          style: STYLE.ARROW_CELL,
          onClick: onClick },
        _react2.default.createElement('span', {
          ref: function ref(c) {
            return _this2.arrow = c;
          },
          style: Object.assign({}, STYLE.ARROW, styleArrow)
        })
      );
    }
  }, {
    key: 'startAnimation',
    value: function startAnimation() {
      this.arrowCell.style.animation = C.ANIMATION_CIRCLE;
      this.arrow.style.borderColor = C.BORDER_COLOR;
    }
  }, {
    key: 'stopAnimation',
    value: function stopAnimation() {
      this.arrowCell.style.animation = "";
    }
  }]);
  return ArrowCell;
}(_react.Component);

exports.default = ArrowCell;
//# sourceMappingURL=ArrowCell.js.map