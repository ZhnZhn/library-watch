export const isNotEmptyStr = (
  str
) => typeof str === 'string'
  && str !== '';

export const setFirstToUpperCase = (
  str
) => isNotEmptyStr(str)
  ? str[0].toUpperCase() + str.substring(1)
  : str;
