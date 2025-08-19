"use strict";

exports.__esModule = true;
exports.default = void 0;
var _isTypeFn = require("../../utils/isTypeFn");
const _crItem = function (name, onClick, isClose) {
  if (isClose === void 0) {
    isClose = !0;
  }
  return {
    name,
    onClick,
    isClose
  };
};
const crItemModelMore = _ref => {
  let {
    onMoveToTop,
    onToggleButtons
  } = _ref;
  const p0 = [_crItem('Move to Top', onMoveToTop), (0, _isTypeFn.isFn)(onToggleButtons) ? {
    ..._crItem('Buttom Buttons', onToggleButtons),
    isInitial: !0
  } : void 0].filter(Boolean);
  return {
    pageWidth: 195,
    maxPages: 1,
    p0
  };
};
var _default = exports.default = crItemModelMore;
//# sourceMappingURL=crItemModelMore.js.map