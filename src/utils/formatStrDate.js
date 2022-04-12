const _isNotEmptyStr = str => str
  && typeof str === 'string';

const formatStrDate = (
  strDate,
  dfValue
) => _isNotEmptyStr(strDate)
  ? strDate
     .replace('T', ' ')
     .replace('Z', '')
  : dfValue || '';

export default formatStrDate
