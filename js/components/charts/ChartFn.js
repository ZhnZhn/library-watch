"use strict";

exports.__esModule = true;
exports.formatTicks = void 0;
const ONE_THOUSAND = 1_000,
  ONE_MILLION = ONE_THOUSAND * ONE_THOUSAND,
  _getValue = item => (item || {}).value,
  _fIsValue = number => value => {
    const _remainder = value % number;
    return _remainder === 0 || _remainder * 10 % number === 0;
  },
  _fIsTicks = number => {
    const is = _fIsValue(number);
    return (item2, itemN) => {
      const _v2 = _getValue(item2),
        _vN = _getValue(itemN);
      return _v2 * 2 >= number && is(_v2) && is(_vN);
    };
  },
  _isMillionCase = _fIsTicks(ONE_MILLION),
  _isThousandCase = _fIsTicks(ONE_THOUSAND),
  _fCrTick = (number, suffix) => value => value ? (value / number).toFixed(1).replace(".0", "") + suffix : "0",
  _crThousandTick = _fCrTick(ONE_THOUSAND, "K"),
  _crMillionTick = _fCrTick(ONE_MILLION, "M");
const formatTicks = (value, index, values) => {
  const _item2 = values[1],
    _itemN = values[values.length - 1];
  return _isMillionCase(_item2, _itemN) ? _crMillionTick(value) : _isThousandCase(_item2, _itemN) ? _crThousandTick(value) : "" + value;
};
exports.formatTicks = formatTicks;
//# sourceMappingURL=ChartFn.js.map