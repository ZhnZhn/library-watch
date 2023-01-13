
export const findArrIndexByProp = (
  propItem,
  arr,
  value
) => arr.findIndex(
  (item, index) => item[propItem] === value
)

export const checkInArrSameByProp = (
  propItem,
  arr,
  value
) => {
  const _itemIndex = arr
    ? arr.findIndex(
       (item, i) => item[propItem] === value
     )
    : -1 ;
  return _itemIndex !== -1;
}
