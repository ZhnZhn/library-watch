"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _Rows = _interopRequireDefault(require("./rows/Rows"));

var _Widgets = _interopRequireDefault(require("./widgets/Widgets"));

var _ShowHide = _interopRequireDefault(require("../zhn-atoms/ShowHide"));

var _DraggableDialog = _interopRequireDefault(require("../zhn-moleculs/DraggableDialog"));

var DialogCell = (0, _extends2["default"])({}, _Rows["default"], _Widgets["default"], {
  ShowHide: _ShowHide["default"],
  DraggableDialog: _DraggableDialog["default"]
});
var _default = DialogCell;
exports["default"] = _default;
//# sourceMappingURL=DialogCell.js.map