import { isNotEmptyStr } from './isTypeFn';

export const setFirstToUpperCase = (
  str
) => isNotEmptyStr(str)
  ? str[0].toUpperCase() + str.substring(1)
  : str;
