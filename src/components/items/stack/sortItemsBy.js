import { isNumber } from '../../../utils/isTypeFn';

const DF_RESULT = 2;
const _compareNotNumber = (
  a,
  b,
  dfR=DF_RESULT
) => {
  const isB = isNumber(b)
  , isA = isNumber(a);

  if (!isB && !isA) return 0;
  if (isB && !isA) return 1;
  if (!isB && isA) return -1;
  return dfR;
}

const _getReputation = (
  item
) => {
  const { owner } = item || {};
  return (owner || {}).reputation || 0;
}

const _compareByReputation = (
  a,
  b
) => {
  const bN = _getReputation(b)
  , aN = _getReputation(a)
  , _notNumberResult = _compareNotNumber(aN, bN);
  return _notNumberResult === DF_RESULT
    ? bN - aN
    : _notNumberResult;
};


const _fCompareBy = (
  propName
) => (a, b) => {
  const bN = b[propName]
  , aN = a[propName]
  , _notNumberResult = _compareNotNumber(aN, bN);
  // guard for not numbers
  if (_notNumberResult !== DF_RESULT) {
    return _notNumberResult;
  }
  // secondary sort
  if (bN === aN) {
    return _compareByReputation(a, b);
  }
  return bN - aN;
};

const sortItemsBy = (
  items,
  propName
) => {
  if (!propName) return items;
  const _compare = propName === 'reputation'
     ? _compareByReputation
     : _fCompareBy(propName);
  return items.sort(_compare);
};

export default sortItemsBy
