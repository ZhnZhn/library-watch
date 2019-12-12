"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var S = {
  DIV: {
    backgroundColor: '#4d4d4d'
  }
};

var ModalPane =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(ModalPane, _Component);

  function ModalPane() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this._hClickOutside = function (event) {
      if (_this.rootNode && _this.rootNode.contains && !_this.rootNode.contains(event.target)) {
        event.stopPropagation();

        _this.props.onClose(event);
      }
    };

    _this._addOutsideListener = function () {
      document.addEventListener('click', _this._hClickOutside, true);
    };

    _this._removeOutsideListener = function () {
      document.removeEventListener('click', _this._hClickOutside, true);
    };

    _this._refRootNode = function (n) {
      return _this.rootNode = n;
    };

    return _this;
  }

  var _proto = ModalPane.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.isShow) {
      this._addOutsideListener();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this._removeOutsideListener();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      if (this.props.isShow) {
        this._addOutsideListener();
      } else {
        this._removeOutsideListener();
      }
    }
  };

  _proto.render = function render() {
    var children = this.props.children;
    return _react["default"].createElement("div", {
      ref: this._refRootNode,
      style: S.DIV
    }, children);
  };

  return ModalPane;
}(_react.Component);

ModalPane.defaultProps = {
  onClose: function onClose() {}
};
var _default = ModalPane;
exports["default"] = _default;
//# sourceMappingURL=ModalPane.js.map