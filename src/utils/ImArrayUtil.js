
const _isArr = Array.isArray;

export const  imArrPush = (
  arr,
  obj
) => _isArr(arr)
  ? [...arr, obj]
  : [obj]

export const imArrFilterByProp = (
  prop,
  arr,
  value
) =>  arr.filter(
  (obj, index) => obj[prop] !== value
)

  export const  imArrInsertItem = (
  item,
  index,
  arr=[]
) => index === 0
 ? [
     {...item},
     ...arr
   ]
 : [
     ...arr.slice(0, index),
     {...item},
     ...arr.slice(index)
   ]
