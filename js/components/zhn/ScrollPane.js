"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _crCn = _interopRequireDefault(require("../zhn-utils/crCn"));
var _jsxRuntime = require("react/jsx-runtime");
const CL_SCROLL = 'with-scroll';
const ScrollPane = _ref => {
  let {
    refEl,
    style,
    className,
    onFocusIn,
    children
  } = _ref;
  const _refDivElement = (0, _uiApi.useRef)(),
    _className = (0, _crCn.default)(CL_SCROLL, className);
  (0, _uiApi.useImperativeHandle)(refEl, () => ({
    scrollTop: () => {
      const _divElement = (0, _uiApi.getRefValue)(_refDivElement);
      if (_divElement) {
        _divElement.scrollTop = 0;
      }
    }
  }), []);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    ref: _refDivElement,
    className: _className,
    style: style,
    onFocus: onFocusIn,
    children: children
  });
};
var _default = exports.default = ScrollPane;
//# sourceMappingURL=ScrollPane.js.map