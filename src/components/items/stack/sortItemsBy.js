import { isNumber } from '../../../utils/isTypeFn';
import { clearPrototypeOf } from '../../../utils/clearPrototypeOf';

import {
  PN_REPUTATION,
  PN_BOUNTY_AMOUNT
} from './config';

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

const _fCompareMaybeNumber = (
  getMaybeNumber
) => (
  a,
  b
) => {
  const bN = getMaybeNumber(b)
  , aN = getMaybeNumber(a)
  , _notNumberResult = _compareNotNumber(aN, bN);
  return _notNumberResult === DF_RESULT
    ? bN - aN
    : _notNumberResult;
};

const _getReputation = (
  item
) => {
  const { owner } = item || {};
  return (owner || {})[PN_REPUTATION] || 0;
}
, _compareByReputation = _fCompareMaybeNumber(_getReputation)
, _getBountyAmount = item => (item || {})[PN_BOUNTY_AMOUNT] || 0
, _routerCompare = {
  [PN_REPUTATION]: _compareByReputation,
  [PN_BOUNTY_AMOUNT]: _fCompareMaybeNumber(_getBountyAmount)
};

clearPrototypeOf(_routerCompare)

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
) => propName
  ? items.sort(_routerCompare[propName] || _fCompareBy(propName))
  : items;

export default sortItemsBy
