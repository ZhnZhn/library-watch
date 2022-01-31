"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var _crCn = _interopRequireDefault(require("../zhn-utils/crCn"));

var _jsxRuntime = require("react/jsx-runtime");

var CL_SCROLL = 'with-scroll';
var ScrollPane = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var style = _ref.style,
      className = _ref.className,
      children = _ref.children;

  var _refNode = (0, _react.useRef)(),
      _className = (0, _crCn["default"])(CL_SCROLL, className);

  (0, _react.useImperativeHandle)(ref, function () {
    return {
      scrollTop: function scrollTop() {
        var current = _refNode.current;

        if (current) {
          current.scrollTop = 0;
        }
      }
    };
  }, []);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    ref: _refNode,
    className: _className,
    style: style,
    children: children
  });
});
var _default = ScrollPane;
exports["default"] = _default;
//# sourceMappingURL=ScrollPane.js.map