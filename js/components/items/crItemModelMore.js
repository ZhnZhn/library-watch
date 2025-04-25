"use strict";

exports.__esModule = true;
exports.default = void 0;
var _isTypeFn = require("../../utils/isTypeFn");
var _styleFn = require("../styleFn");
const _crItem = function (name, onClick, cn, isClose) {
  if (cn === void 0) {
    cn = _styleFn.CL_ROW_MENU_MORE;
  }
  if (isClose === void 0) {
    isClose = true;
  }
  return {
    name,
    onClick,
    cn,
    isClose
  };
};
const crItemModelMore = _ref => {
  let {
    onMoveToTop,
    onToggleButtons
  } = _ref;
  const p0 = [_crItem('Move to Top', onMoveToTop), (0, _isTypeFn.isFn)(onToggleButtons) ? _crItem('Toggle Buttons', onToggleButtons) : void 0].filter(Boolean);
  return {
    titleCl: _styleFn.CL_ROW_MENU_MORE,
    pageWidth: 150,
    maxPages: 1,
    p0
  };
};
var _default = exports.default = crItemModelMore;
//# sourceMappingURL=crItemModelMore.js.map