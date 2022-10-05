"use strict";

exports.__esModule = true;
exports.dropWithDnDStyle = exports.dragStartWithDnDStyle = exports.dragLeaveWithDnDStyle = exports.dragEnterWithDnDStyle = void 0;
var BORDER = 'border' // dragStart
,
    BORDER_BOTTOM = 'border-bottom' // backup
,
    BORDER_LEFT = 'border-left' // dragEnter
,
    DF_COLOR_PERMITTED = 'green',
    COLOR_NOT_PERMITTED = 'red';
var sourcePermissions, nodeDragTarget, borderBottomStyle, borderLeftPreEnterStyle;

var _getStyle = function _getStyle(ev) {
  return ev.currentTarget.style;
};

var _crBorderStyle = function _crBorderStyle(borderColor) {
  return "4px solid " + borderColor;
};

var _hasPermissionToAdd = function _hasPermissionToAdd(sourceType) {
  return sourcePermissions.indexOf(sourceType) !== -1;
};

var _crBorderLeftEnterStyle = function _crBorderLeftEnterStyle(sourceType, borderColor) {
  return _crBorderStyle(_hasPermissionToAdd(sourceType) ? borderColor || DF_COLOR_PERMITTED : COLOR_NOT_PERMITTED);
};

var dragStartWithDnDStyle = function dragStartWithDnDStyle(event, permissions) {
  nodeDragTarget = event.currentTarget;
  sourcePermissions = permissions;
  borderBottomStyle = _getStyle(event).getPropertyValue(BORDER_BOTTOM);
};

exports.dragStartWithDnDStyle = dragStartWithDnDStyle;

var dropWithDnDStyle = function dropWithDnDStyle(event) {
  var styleTarget = nodeDragTarget.style,
      styleSource = _getStyle(event);

  styleSource.removeProperty(BORDER_LEFT);
  styleTarget.removeProperty(BORDER);
  styleTarget.setProperty(BORDER_BOTTOM, borderBottomStyle);
};

exports.dropWithDnDStyle = dropWithDnDStyle;

var dragEnterWithDnDStyle = function dragEnterWithDnDStyle(event, sourceType, borderColor) {
  var style = _getStyle(event);

  borderLeftPreEnterStyle = style.getPropertyValue(BORDER_LEFT);
  style.setProperty(BORDER_LEFT, _crBorderLeftEnterStyle(sourceType, borderColor));
};

exports.dragEnterWithDnDStyle = dragEnterWithDnDStyle;

var dragLeaveWithDnDStyle = function dragLeaveWithDnDStyle(event) {
  var style = _getStyle(event);

  style.removeProperty(BORDER_LEFT);
  style.setProperty(BORDER_LEFT, borderLeftPreEnterStyle);
};

exports.dragLeaveWithDnDStyle = dragLeaveWithDnDStyle;
//# sourceMappingURL=DnDStyleHandlers.js.map