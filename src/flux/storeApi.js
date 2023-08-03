import { createStore } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';
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
