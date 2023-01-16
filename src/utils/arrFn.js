
export const findByPropNameInArrIndex = (
  propName,
  arr,
  value
) => arr.findIndex(
  item => item[propName] === value
)

const _isArr = Array.isArray;

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
