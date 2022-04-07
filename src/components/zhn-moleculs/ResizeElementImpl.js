const _isFn = fn => typeof fn === 'function'
, _assign = Object.assign
, _setInitialValuesTo = obj => {
   _assign(obj, {
     id: null,
     delta: 0,
     step: 1,
     countStep: 0
   })
};

class ResizeElementImpl {
  constructor(props){
    _setInitialValuesTo(this)

    const {
      elementRef,
      onResizeAfter,
      initWidth,
      minWidth,
      maxWidth
    } = props;
    this.elementRef = elementRef
    this.onResizeAfter = onResizeAfter
    this.initWidth = initWidth;
    this.currentWidth = this.initWidth;
    this.minDelta = minWidth - this.initWidth;
    this.maxDelta = maxWidth - this.initWidth;

    this.onStopRezise = this._hStopResize.bind(null, true);
    this.onStartResizeLeft = this._hStartResize.bind(null, this._resizeLeft)
    this.onStartResizeRight = this._hStartResize.bind(null, this._resizeRight)
  }

  _increaseStepValue = () => {
    this.countStep +=1;
    if (this.countStep > 30){
      this.step = 3;
    } else if (this.countStep > 15){
      this.step = 2;
    }
    if ( (this.maxDelta - this.delta) < 20 ||
         (this.delta - this.minDelta) < 20    ){
      this.step = 1;
    }
  }

  _getElementStyle = () => {
    const { current } = this.elementRef || {}
    , { style } = current || {};
    return style || {};
  }

  _resizeLeft = () => {
    if (this.delta > this.minDelta){
      this.delta -= this.step;
      this.currentWidth = this.initWidth + this.delta;
      this._getElementStyle().width = this.currentWidth + 'px';
      this._increaseStepValue();
    }
  }

  _resizeRight = () => {
    if (this.delta < this.maxDelta){
      this.delta += this.step;
      this.currentWidth = this.initWidth + this.delta;
      this._getElementStyle().width = this.currentWidth + 'px';
      this._increaseStepValue();
    }
  }

  _updateDelta = () => {
    const w = parseInt(this._getElementStyle().width, 10);
    if (!isNaN(w)) {
      this.delta = w - this.initWidth
    }
  }

  _hStartResize = (resizeFn) => {
    if (this.id !== null){
      this._hStopResize(false);
    }
    this._updateDelta()
    this.id = setInterval(resizeFn, 5);
  }

  _hStopResize = (isOnResizeAfter, event) => {
    clearInterval(this.id);
    _setInitialValuesTo(this)

    const { onResizeAfter } = this;
    if (isOnResizeAfter && _isFn(onResizeAfter)){
      onResizeAfter(this.currentWidth);
    }
  }
}

export default ResizeElementImpl
