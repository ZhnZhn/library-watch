"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../../uiApi");
const crDnDHandlers = (onDragStart, onDrop, onDragEnter, onDragOver, onDragLeave, isEditMode, option) => isEditMode ? {
  draggable: true,
  onDragStart: (0, _uiApi.bindTo)(onDragStart, option),
  onDrop: (0, _uiApi.bindTo)(onDrop, option),
  onDragEnter,
  onDragOver,
  onDragLeave
} : void 0;
var _default = exports.default = crDnDHandlers;
//# sourceMappingURL=crDnDHandlers.js.map