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

//import PropTypes from 'prop-types'

var S = {
  DIV: {
    backgroundColor: '#4d4d4d'
  }
};

var ModalPane = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(ModalPane, _Component);

  function ModalPane() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ModalPane);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ModalPane.__proto__ || Object.getPrototypeOf(ModalPane)).call.apply(_ref, [this].concat(args))), _this), _this._hClickOutside = function (event) {
      if (_this.rootNode && _this.rootNode.contains && !_this.rootNode.contains(event.target)) {
        event.stopPropagation();
        _this.props.onClose(event);
      }
    }, _this._addOutsideListener = function () {
      document.addEventListener('click', _this._hClickOutside, true);
    }, _this._removeOutsideListener = function () {
      document.removeEventListener('click', _this._hClickOutside, true);
    }, _this._refRootNode = function (n) {
      return _this.rootNode = n;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }
  /*
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    theme: PropTypes.object,
    isShow: PropTypes.bool,
    onClose: PropTypes.func
  }
  */

  (0, _createClass3.default)(ModalPane, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.isShow) {
        this._addOutsideListener();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._removeOutsideListener();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props !== prevProps) {
        if (this.props.isShow) {
          this._addOutsideListener();
        } else {
          this._removeOutsideListener();
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;


      return _react2.default.createElement(
        'div',
        {
          ref: this._refRootNode,
          style: S.DIV
        },
        children
      );
    }
  }]);
  return ModalPane;
}(_react.Component), _class.defaultProps = {
  onClose: function onClose() {}
}, _temp2);
exports.default = ModalPane;
//# sourceMappingURL=ModalPane.js.map