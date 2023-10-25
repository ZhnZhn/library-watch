"use strict";

exports.__esModule = true;
exports.default = void 0;
var _CL = require("../styles/CL");
const _isFn = fn => typeof fn === 'function',
  _crItem = function (name, onClick, cn, isClose) {
    if (cn === void 0) {
      cn = _CL.CL_ROW_MENU_MORE;
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
const crNpmModelMore = _ref => {
  let {
    onMoveToTop,
    onToggleButtons
  } = _ref;
  const p0 = [_crItem('Move to Top', onMoveToTop), _isFn(onToggleButtons) ? _crItem('Toggle Buttons', onToggleButtons) : void 0].filter(Boolean);
  return {
    titleCl: _CL.CL_ROW_MENU_MORE,
    pageWidth: 150,
    maxPages: 1,
    p0
  };
};
var _default = exports.default = crNpmModelMore;
//# sourceMappingURL=crNpmModelMore.js.map