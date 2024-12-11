"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _has = require("../has");
var _useToggle = _interopRequireDefault(require("../hooks/useToggle"));
var _useMenuMore = _interopRequireDefault(require("./useMenuMore"));
var _useToolbarButtons = _interopRequireDefault(require("./useToolbarButtons"));
const useDialog = toggleIsShowDates => {
  const [isToolbar, _toggleIsToolbar] = (0, _useToggle.default)(true),
    [isShowLabels, _toggleIsShowLabels] = (0, _useToggle.default)(_has.isWideWidth),
    _MENU_MORE = (0, _useMenuMore.default)(_toggleIsToolbar, _toggleIsShowLabels, toggleIsShowDates),
    _TOOLBAR_BUTTONS = (0, _useToolbarButtons.default)(_toggleIsShowLabels, toggleIsShowDates);
  return [_MENU_MORE, _TOOLBAR_BUTTONS, isToolbar, isShowLabels];
};
var _default = exports.default = useDialog;
//# sourceMappingURL=useDialog.js.map