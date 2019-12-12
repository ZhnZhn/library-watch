"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var BORDER_LEFT = 'border-left';
var DRAG_START_BORDER_LEFT = '4px solid #d64336';

var _node;

var _dragStart = function _dragStart(ev) {
  if (_node) {
    _node.style.removeProperty(BORDER_LEFT);
  }

  _node = ev.currentTarget;

  _node.style.setProperty(BORDER_LEFT, DRAG_START_BORDER_LEFT);
};

var _dragEnd = function _dragEnd(ev) {
  if (_node) {
    _node.style.removeProperty(BORDER_LEFT);

    _node = void 0;
  }
};

var withDnDStyle = function withDnDStyle(target) {
  var _proto = target.prototype;
  _proto.dragStartWithDnDStyle = _dragStart;
  _proto.dragEndWithDnDStyle = _dragEnd;
};

var _default = withDnDStyle;
exports["default"] = _default;
//# sourceMappingURL=withDnDStyle.js.map