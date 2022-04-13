import {
  LPAT_LOADING,
  LPAT_LOADING_COMPLETE,
  LPAT_LOADING_FAILED
} from '../actions/LoadingProgressActions'

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
    this.triggerLoadingProgress(LPAT_LOADING);
  },
  onLoadingProgressComplete(){
    this.triggerLoadingProgress(LPAT_LOADING_COMPLETE);
  },
  onLoadingProgressFailed(){
    this.triggerLoadingProgress(LPAT_LOADING_FAILED);
  }

};

export default WithLoadingProgress
