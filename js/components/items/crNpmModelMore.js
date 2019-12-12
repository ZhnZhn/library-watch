"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _CL = _interopRequireDefault(require("../styles/CL"));

var CL_ROW = _CL["default"].ROW_MENU_MORE;

var _isFn = function _isFn(fn) {
  return typeof fn === 'function';
};

var _crItem = function _crItem(name, onClick, cn, isClose) {
  if (cn === void 0) {
    cn = CL_ROW;
  }

  if (isClose === void 0) {
    isClose = true;
  }

  return {
    name: name,
    onClick: onClick,
    cn: cn,
    isClose: isClose
  };
};

var crNpmModelMore = function crNpmModelMore(_ref) {
  var onMoveToTop = _ref.onMoveToTop,
      onToggleButtons = _ref.onToggleButtons;
  var p0 = [_crItem('Move to Top', onMoveToTop), _isFn(onToggleButtons) ? _crItem('Toggle Buttons', onToggleButtons) : void 0].filter(Boolean);
  return {
    baseTitleCl: CL_ROW,
    pageWidth: 150,
    maxPages: 1,
    p0: p0
  };
};

var _default = crNpmModelMore;
exports["default"] = _default;
//# sourceMappingURL=crNpmModelMore.js.map