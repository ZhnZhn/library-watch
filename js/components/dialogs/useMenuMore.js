"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _has = require("../has");
var _useRefInit = _interopRequireDefault(require("../hooks/useRefInit"));
const _crMenuItem = function (name, onClick, isInitial) {
  if (isInitial === void 0) {
    isInitial = !1;
  }
  return onClick ? {
    name,
    onClick,
    isInitial,
    isClose: !0
  } : null;
};
const useMenuMore = (toggleIsLabels, toggleIsDates) => (0, _useRefInit.default)(() => ({
  pageWidth: 175,
  maxPages: 1,
  p0: [_crMenuItem('Input Labels', toggleIsLabels, (0, _has.isWideWidth)()), _crMenuItem('Input Dates', toggleIsDates)].filter(Boolean)
}))[0];
var _default = exports.default = useMenuMore;
//# sourceMappingURL=useMenuMore.js.map