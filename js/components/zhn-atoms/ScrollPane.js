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

//import PropTypes from "prop-types";
var CL = 'with-scroll';

var ScrollPane = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(ScrollPane, _Component);

  function ScrollPane() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ScrollPane);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ScrollPane.__proto__ || Object.getPrototypeOf(ScrollPane)).call.apply(_ref, [this].concat(args))), _this), _this._refNode = function (n) {
      return _this._node = n;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }
  /*
  static propTypes = {
    style : PropTypes.object,
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  }
  */


  (0, _createClass3.default)(ScrollPane, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          className = _props.className,
          children = _props.children;

      return _react2.default.createElement(
        'div',
        {
          ref: this._refNode,
          className: CL + ' ' + className,
          style: style
        },
        children
      );
    }
  }, {
    key: 'scrollTop',
    value: function scrollTop() {
      if (this._node) {
        this._node.scrollTop = 0;
      }
    }
  }]);
  return ScrollPane;
}(_react.Component), _class.defaultProps = {
  className: ''
}, _temp2);
exports.default = ScrollPane;
//# sourceMappingURL=ScrollPane.js.map