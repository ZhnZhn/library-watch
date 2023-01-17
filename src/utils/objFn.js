import {
  findByPropNameInArrItem
} from './arrFn';

const _isArr = Array.isArray;
const _isRegularObj = (v) => v
  && typeof v === 'object'
  && !_isArr(v);

export const findInPropArrayByPropItem = (
  propNameArr,
  propNameItem,
  obj,
  value
) => findByPropNameInArrItem(
  propNameItem,
  _isRegularObj(obj) && obj[propNameArr],
  value
);
