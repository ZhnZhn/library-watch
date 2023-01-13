
export const findInPropArrayByPropItem = (
  propArr,
  propItem,
  obj,
  value
) => obj[propArr]
 .find(
   (item, index) => item[propItem] === value
 )
