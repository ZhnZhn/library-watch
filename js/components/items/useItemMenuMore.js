"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _styleFn = require("../styleFn");
var _useMenuMore = _interopRequireDefault(require("../hooks/useMenuMore"));
var _SvgMore = _interopRequireDefault(require("../zhn/SvgMore"));
var _ModalSlider = _interopRequireDefault(require("../zhn-modal-slider/ModalSlider"));
var _crItemModelMore = _interopRequireDefault(require("./crItemModelMore"));
var _Item = require("./Item.Style");
var _jsxRuntime = require("react/jsx-runtime");
const useItemMenuMore = (onMoveToTop, onToggleButtons) => {
  const [_MENU_MODEL, isMenuMore, toggleIsMenuMore, _showMenuMore] = (0, _useMenuMore.default)(_crItemModelMore.default, {
    onMoveToTop,
    onToggleButtons
  });
  return [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ModalSlider.default, {
    isShow: isMenuMore,
    className: _styleFn.CL_MENU_MORE,
    model: _MENU_MODEL,
    onClose: toggleIsMenuMore
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgMore.default, {
    style: _Item.S_BT_MORE,
    onClick: _showMenuMore
  })];
};
var _default = exports.default = useItemMenuMore;
//# sourceMappingURL=useItemMenuMore.js.map