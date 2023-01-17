
const _isArr = Array.isArray;

const _fFindInArray = (
  propNameArrFn
) => (
  propName,
  arr,
  value
) => _isArr(arr) ? arr[propNameArrFn](
  item => item[propName] === value
) : void 0;

export const findByPropNameInArrIndex = _fFindInArray('findIndex')
export const findByPropNameInArrItem = _fFindInArray('find')

export const isInArrByPropName = (
  propName,
  arr,
  value
) => {
  const _itemIndex = _isArr(arr)
    ? findByPropNameInArrIndex(propName, arr, value)
    : -1;
  return _itemIndex !== -1;
}
