export const isNaN = Number.isNaN
export const isArr = Array.isArray

const _fIsType = strType => v => typeof v === strType
, _isTypeNumber = _fIsType('number');

export const isNumber = n => _isTypeNumber(n) && n-n===0

export const isRegularObj = (v) => !!v
  && typeof v === 'object'
  && !isArr(v);

export const isStr = _fIsType('string')
export const isFn = _fIsType('function')

export const isNotEmptyStr = str => isStr(str) && str !== '';
