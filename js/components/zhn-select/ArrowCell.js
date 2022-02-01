"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = require("react");

var _jsxRuntime = require("react/jsx-runtime");

var S_ARROW_CELL = {
  position: 'absolute',
  top: 10,
  right: 0,
  width: 35,
  paddingRight: 5,
  textAlign: 'center',
  verticalAlign: 'middle',
  cursor: 'pointer'
},
    S_ARROW = {
  display: 'inline-block',
  position: 'relative',
  top: 2,
  height: 0,
  width: 0,
  borderColor: '#999 transparent transparent',
  borderStyle: 'solid',
  borderWidth: '10px 8px 4px'
},
    ANIMATION_CIRCLE = "circle infinite 1.25s linear",
    BORDER_COLOR = "#1b75bb transparent transparent";

var _getRefValue = function _getRefValue(ref) {
  return ref.current;
};

var ArrowCell = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var arrowStyle = _ref.arrowStyle,
      onClick = _ref.onClick;

  var _refArrowCell = (0, _react.useRef)(),
      _refArrow = (0, _react.useRef)();

  (0, _react.useImperativeHandle)(ref, function () {
    return {
      startAnimation: function startAnimation() {
        var _arrowCell = _getRefValue(_refArrowCell),
            _arrow = _getRefValue(_refArrow);

        if (_arrowCell && _arrow) {
          _arrowCell.style.animation = ANIMATION_CIRCLE;
          _arrow.style.borderColor = BORDER_COLOR;
        }
      },
      stopAnimation: function stopAnimation() {
        var _arrowCell = _getRefValue(_refArrowCell);

        if (_arrowCell) {
          _arrowCell.style.animation = "";
        }
      }
    };
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    ref: _refArrowCell,
    style: S_ARROW_CELL,
    tabIndex: "-1",
    onClick: onClick,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      ref: _refArrow,
      style: (0, _extends2["default"])({}, S_ARROW, arrowStyle)
    })
  });
});
var _default = ArrowCell;
exports["default"] = _default;
//# sourceMappingURL=ArrowCell.js.map