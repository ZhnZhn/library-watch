"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

//import PropTypes from "prop-types";
var CL = 'with-scroll';

var ScrollPane =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(ScrollPane, _Component);

  function ScrollPane() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this._refNode = function (n) {
      return _this._node = n;
    };

    return _this;
  }

  var _proto = ScrollPane.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        style = _this$props.style,
        className = _this$props.className,
        children = _this$props.children;
    return _react["default"].createElement("div", {
      ref: this._refNode,
      className: CL + " " + className,
      style: style
    }, children);
  };

  _proto.scrollTop = function scrollTop() {
    if (this._node) {
      this._node.scrollTop = 0;
    }
  };

  return ScrollPane;
}(_react.Component);

ScrollPane.defaultProps = {
  className: ''
};
var _default = ScrollPane;
exports["default"] = _default;
//# sourceMappingURL=ScrollPane.js.map