
export const isNumber = n => typeof n === 'number'
   && n-n===0

export const isArr = Array.isArray

export const isRegularObj = (v) => !!v
  && typeof v === 'object'
  && !isArr(v);

export const isStr = v => typeof v === 'string'

export const isNotEmptyStr = (
  str
) => isStr(str)
  && str !== '';
