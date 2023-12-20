"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _styleFn = require("../styleFn");
var _useRefInit = _interopRequireDefault(require("../hooks/useRefInit"));
const CL_ROW = (0, _styleFn.crClNotSelected)("row__pane-topic");
const _crMenuItem = (name, onClick) => onClick ? {
  name,
  onClick,
  isClose: true
} : null;
const useMenuMore = (toggleIsToolbar, toggleIsLabels, toggleIsDates) => (0, _useRefInit.default)(() => ({
  titleCl: CL_ROW,
  pageWidth: 160,
  maxPages: 1,
  p0: [_crMenuItem('Toggle Dates', toggleIsDates), _crMenuItem('Toggle Labels', toggleIsLabels), _crMenuItem('Toggle ToolBar', toggleIsToolbar)].filter(Boolean)
}))[0];
var _default = exports.default = useMenuMore;
//# sourceMappingURL=useMenuMore.js.map