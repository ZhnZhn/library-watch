const _isNaN = Number.isNaN || isNaN;

const is = {
  isNumber: n => typeof n === 'number'
   && !_isNaN(n)
};

export default is
