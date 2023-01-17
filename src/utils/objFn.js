import {
  isRegularObj
} from './is';
import {
  findByPropNameInArrItem
} from './arrFn';

export const findInPropArrayByPropItem = (
  propNameArr,
  propNameItem,
  obj,
  value
) => findByPropNameInArrItem(
  propNameItem,
  isRegularObj(obj) && obj[propNameArr],
  value
);
