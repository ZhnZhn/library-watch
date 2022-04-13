import Reflux from 'reflux-core';

/*
export const LoadingProgressActionTypes = {
  LOADING : 'loadingProgress',
  LOADING_COMPLETE : 'loadingProgressComplete',
  LOADING_FAILED : 'loadingProgressFailed'
}
*/

export const LPAT_LOADING = 'loadingProgress'
export const LPAT_LOADING_COMPLETE = 'loadingProgressComplete'
export const LPAT_LOADING_FAILED = 'loadingProgressFailed'

export const LoadingProgressActions = Reflux.createActions({
  [LPAT_LOADING] : {},
  [LPAT_LOADING_COMPLETE] : {},
  [LPAT_LOADING_FAILED] : {}
})
