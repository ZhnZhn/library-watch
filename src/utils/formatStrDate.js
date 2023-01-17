import { isNotEmptyStr } from './is';

const formatStrDate = (
  strDate,
  dfValue
) => isNotEmptyStr(strDate)
  ? strDate
     .replace('T', ' ')
     .replace('Z', '')
  : dfValue || '';

export default formatStrDate
