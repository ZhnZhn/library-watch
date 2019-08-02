const _isNaN = Number.isNaN || isNaN;

const is = {
  isNumber: n => typeof n === 'number'
   && !_isNaN(n),

  isTouchable: () => document
   && 'ontouchstart' in document.documentElement
};

export default is
