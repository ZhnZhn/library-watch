"use strict";

exports.__esModule = true;
exports.default = void 0;
var _isTypeFn = require("../../utils/isTypeFn");
var _uiApi = require("../uiApi");
const _assign = Object.assign,
  _setInitialValuesTo = obj => {
    _assign(obj, {
      id: null,
      delta: 0,
      step: 1,
      countStep: 0
    });
  };
class ResizeElementImpl {
  constructor(props) {
    _setInitialValuesTo(this);
    const {
      elementRef,
      onResizeAfter,
      initWidth,
      minWidth,
      maxWidth
    } = props;
    this.elementRef = elementRef;
    this.onResizeAfter = onResizeAfter;
    this.initWidth = initWidth;
    this.currentWidth = this.initWidth;
    this.minDelta = minWidth - this.initWidth;
    this.maxDelta = maxWidth - this.initWidth;
    this.onStopRezise = (0, _uiApi.bindTo)(this._hStopResize, true);
    this.onStartResizeLeft = (0, _uiApi.bindTo)(this._hStartResize, this._resizeLeft);
    this.onStartResizeRight = (0, _uiApi.bindTo)(this._hStartResize, this._resizeRight);
  }
  _increaseStepValue = () => {
    this.countStep += 1;
    if (this.countStep > 30) {
      this.step = 3;
    } else if (this.countStep > 15) {
      this.step = 2;
    }
    if (this.maxDelta - this.delta < 20 || this.delta - this.minDelta < 20) {
      this.step = 1;
    }
  };
  _getElementStyle = () => {
    const {
        current
      } = this.elementRef || {},
      {
        style
      } = current || {};
    return style || {};
  };
  _resizeLeft = () => {
    if (this.delta > this.minDelta) {
      this.delta -= this.step;
      this.currentWidth = this.initWidth + this.delta;
      this._getElementStyle().width = this.currentWidth + 'px';
      this._increaseStepValue();
    }
  };
  _resizeRight = () => {
    if (this.delta < this.maxDelta) {
      this.delta += this.step;
      this.currentWidth = this.initWidth + this.delta;
      this._getElementStyle().width = this.currentWidth + 'px';
      this._increaseStepValue();
    }
  };
  _updateDelta = () => {
    const w = parseInt(this._getElementStyle().width, 10);
    if (!isNaN(w)) {
      this.delta = w - this.initWidth;
    }
  };
  _hStartResize = resizeFn => {
    if (this.id !== null) {
      this._hStopResize(false);
    }
    this._updateDelta();
    this.id = setInterval(resizeFn, 5);
  };
  _hStopResize = (isOnResizeAfter, event) => {
    clearInterval(this.id);
    _setInitialValuesTo(this);
    const {
      onResizeAfter
    } = this;
    if (isOnResizeAfter && (0, _isTypeFn.isFn)(onResizeAfter)) {
      onResizeAfter(this.currentWidth);
    }
  };
}
var _default = exports.default = ResizeElementImpl;
//# sourceMappingURL=ResizeElementImpl.js.map