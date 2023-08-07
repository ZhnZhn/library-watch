import { createStore } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

import { useReducer } from '../components/uiApi';
import useSubscribe from '../components/hooks/useSubscribe';

export const createStoreWithSelector = (
  crStore
) => createStore(
  subscribeWithSelector(crStore)
)

export const fCrUse = (
  store,
  select
) => useSubscribe.bind(null, store, select);

const _isFn = v => typeof v === 'function'
, _reducerUseAtomValue = (
  value,
  crOrValue
) => _isFn(crOrValue)
  ? crOrValue(value)
  : crOrValue;
export const atom = (initialValue) => {
   const _atom = Object.create(null);
   _atom.value = initialValue
   return {
     useAtomValue: () => {
       const [
         value,
         dispatch
       ] = useReducer(
         _reducerUseAtomValue,
         initialValue
       );
       _atom.dispatch = dispatch
       return value;
     },
     setValue: (crOrValue) => {
       _atom.value = _reducerUseAtomValue(_atom.value, crOrValue)
       const _dispatch = _atom.dispatch;
       if (_isFn(_dispatch)) {
         _dispatch(crOrValue)
       }
     }
   };
}
