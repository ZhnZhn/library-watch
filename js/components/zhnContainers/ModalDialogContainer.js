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

var CLASS = {
  INIT: 'modal-root',
  SHOWING: 'modal-root show-modal',
  HIDING: 'modal-root hide-modal'
};

var STYLE = {
  SHOW: {
    display: 'block'
  },
  HIDE: {
    display: 'none'
  },
  HIDE_BACKGROUND: {
    backgroundColor: 'rgba(0,0,0, 0)'
  }
};

var ModalDialogContainer = function (_Component) {
  (0, _inherits3.default)(ModalDialogContainer, _Component);

  function ModalDialogContainer(props) {
    (0, _classCallCheck3.default)(this, ModalDialogContainer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ModalDialogContainer.__proto__ || Object.getPrototypeOf(ModalDialogContainer)).call(this));

    _this.wasClosing = true;
    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(ModalDialogContainer, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      if (this.wasClosing) {
        setTimeout(function () {
          _this2.setState({});
        }, this.props.timeout);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          isShow = _props.isShow,
          children = _props.children,
          onClose = _props.onClose;

      var _className = void 0,
          _style = void 0;
      if (this.wasClosing) {
        _className = CLASS.INIT;
        _style = STYLE.HIDE;
        this.wasClosing = false;
      } else {
        _className = isShow ? CLASS.SHOWING : CLASS.HIDING;
        _style = isShow ? STYLE.SHOW : STYLE.HIDE_BACKGROUND;
        if (!isShow) {
          this.wasClosing = true;
        }
      }

      return _react2.default.createElement(
        'div',
        {
          className: _className,
          style: _style,
          onClick: onClose
        },
        children
      );
    }
  }]);
  return ModalDialogContainer;
}(_react.Component);

ModalDialogContainer.defaultProps = {
  timeout: 450,
  onClose: function onClose() {}
};
process.env.NODE_ENV !== "production" ? ModalDialogContainer.propTypes = {
  isShow: _react.PropTypes.bool,
  timeout: _react.PropTypes.number,
  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node]),
  onClose: _react.PropTypes.func
} : void 0;
exports.default = ModalDialogContainer;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\zhnContainers\ModalDialogContainer.js.map