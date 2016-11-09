import Reflux from 'reflux';

export const LoadingProgressActionTypes = {
  LOADING : 'loadingProgress',
  LOADING_COMPLETE : 'loadingProgressComplete',
  LOADING_FAILED : 'loadingProgressFailed'
}

const LoadingProgressActions = Reflux.createActions({
  [LoadingProgressActionTypes.LOADING] : {},
  [LoadingProgressActionTypes.LOADING_COMPLETE] : {},
  [LoadingProgressActionTypes.LOADING_FAILED] : {}
})

export default LoadingProgressActions
