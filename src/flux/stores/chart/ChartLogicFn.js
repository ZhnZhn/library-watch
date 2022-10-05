const _isArr = Array.isArray;
const _isObj = obj => typeof obj === 'object'
  && obj !== null;

export const toTopByKey = (
  slice,
  key
) => {
   if ( !_isObj(slice) ) {
     return false;
   }
   const _configs = slice.configs;
   if ( !_isArr(_configs) ) {
     return false;
   }
   const _index = _configs.findIndex(obj => obj.key === key)
   if (_index !== -1) {
     _configs.unshift(_configs[_index])
     _configs.splice(_index+1, 1)
     return true;
   } else {
     return false;
   }
}

export const removeAll = (
  slice,
  chartType
) => {
  const _slice = slice[chartType] || {};
  _slice.configs = []
  return _slice;
}
