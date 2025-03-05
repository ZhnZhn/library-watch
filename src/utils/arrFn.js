import { isArr } from './isTypeFn';

const _fFindInArray = (
  propNameArrFn
) => (
  propName,
  arr,
  value
) => isArr(arr) ? arr[propNameArrFn](
  item => item[propName] === value
) : void 0;

export const findByPropNameInArrIndex = _fFindInArray('findIndex')
export const findByPropNameInArrItem = _fFindInArray('find')

export const isInArrByPropName = (
  propName,
  arr,
  value
) => {
  const _itemIndex = isArr(arr)
    ? findByPropNameInArrIndex(propName, arr, value)
    : -1;
  return _itemIndex !== -1;
}

export const calcSum = arr => arr
  .reduce((sum, value) => sum + value, 0)
