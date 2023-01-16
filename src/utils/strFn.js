
const _isStr = str => typeof str === 'string';

export const setFirstToUpperCase = (
  str
) => str && _isStr(str)
  ? str[0].toUpperCase() + str.substring(1)
  : str;
