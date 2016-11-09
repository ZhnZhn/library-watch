import { LoadingProgressActionTypes } from '../actions/LoadingProgressActions'

const CHANNEL = 'WITH_LOADING_PROGRESS';

const WithLoadingProgress = {

  listenLoadingProgress(fnHandler){
    this.emitter.addListener(CHANNEL, fnHandler);
    return () => {
      this.emitter.removeListener(CHANNEL, fnHandler);
    }
  },

  triggerLoadingProgress(actionType){
    this.emitter.emit(CHANNEL, actionType);
  },

  onLoadingProgress(){
    this.triggerLoadingProgress(LoadingProgressActionTypes.LOADING);
  },
  onLoadingProgressComplete(){
    this.triggerLoadingProgress(LoadingProgressActionTypes.LOADING_COMPLETE);
  },
  onLoadingProgressFailed(){
    this.triggerLoadingProgress(LoadingProgressActionTypes.LOADING_FAILED);
  }

};

export default WithLoadingProgress
