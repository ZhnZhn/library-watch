"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _has = require("../has");
var _useToggle3 = _interopRequireDefault(require("../hooks/useToggle"));
var _useMenuMore = _interopRequireDefault(require("./useMenuMore"));
var _useToolbarButtons = _interopRequireDefault(require("./useToolbarButtons"));
var useDialog = function useDialog(toggleIsShowDates) {
  var _useToggle = (0, _useToggle3["default"])(true),
    isToolbar = _useToggle[0],
    _toggleIsToolbar = _useToggle[1],
    _useToggle2 = (0, _useToggle3["default"])(_has.isWideWidth),
    isShowLabels = _useToggle2[0],
    _toggleIsShowLabels = _useToggle2[1],
    _MENU_MORE = (0, _useMenuMore["default"])(_toggleIsToolbar, _toggleIsShowLabels, toggleIsShowDates),
    _TOOLBAR_BUTTONS = (0, _useToolbarButtons["default"])(_toggleIsShowLabels, toggleIsShowDates);
  return [_MENU_MORE, _TOOLBAR_BUTTONS, isToolbar, isShowLabels];
};
var _default = useDialog;
exports["default"] = _default;
//# sourceMappingURL=useDialog.js.map