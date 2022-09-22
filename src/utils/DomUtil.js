const HM_ENTITIES = {
  lt: 60,
  gt: 62,
  quot: 34,
  apos: 39,
  amp: 38
}
, REG_EX_CHAR_CODE = /&(#\d+|[a-z]+);/g
, {
  fromCharCode,
  fromCharPoint
} = String
, OUT_OF_BOUNDS_CHART = fromCharCode(65533)
, _replaceCharCodeByChar = (
  match,
  decodeCode
) => {
  let _decodeCode;
  if (decodeCode[0] === '#') {
    _decodeCode = parseInt(decodeCode.substring(1), 10)
    return _decodeCode - _decodeCode === 0
      ? _decodeCode >= 0x10ffff
          ? OUT_OF_BOUNDS_CHART
          : _decodeCode > 65535
              ? fromCharPoint(_decodeCode)
              : fromCharCode(_decodeCode)
     : `&${decodeCode};`
  }
  _decodeCode = HM_ENTITIES[decodeCode]
  return _decodeCode
    ? fromCharCode(_decodeCode)
    : `&${decodeCode};`
};

export const htmlDecode = (
  rawStr
) => typeof rawStr === 'string'
  ? rawStr.replace(REG_EX_CHAR_CODE, _replaceCharCodeByChar)
  : '';
