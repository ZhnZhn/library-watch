"use strict";

exports.__esModule = true;
exports.styleDragStart = exports.styleDragEnd = exports.preventDefault = void 0;
const BORDER_LEFT = 'border-left',
  DRAG_START_BORDER_LEFT = '4px solid #d64336';
let _element,
  _getElementStyle = () => _element.style;
const styleDragStart = event => {
  if (_element) {
    _getElementStyle().removeProperty(BORDER_LEFT);
  }
  _element = event.currentTarget;
  _getElementStyle().setProperty(BORDER_LEFT, DRAG_START_BORDER_LEFT);
};
exports.styleDragStart = styleDragStart;
const styleDragEnd = () => {
  if (_element) {
    _getElementStyle().removeProperty(BORDER_LEFT);
    _element = null;
  }
};
exports.styleDragEnd = styleDragEnd;
const preventDefault = event => {
  event.preventDefault();
};
exports.preventDefault = preventDefault;
//# sourceMappingURL=dnd-handlers.js.map