//import csvtojson from 'csvtojson'

import LPA from '../flux/actions/LoadingProgressActions';

import fetchJson from './fetchJson'
import fetchCsvStream from './fetchCsvStream'

const CLICK_TIME_INTERVAL = 300
    , MIN_FREQUENCY = 3000
    , DONE = 'DONE'
    , ALERT_FREQUENCY = {
        errCaption : 'Load Frequency',
        message : `Exceed item load frequency restriction of ${MIN_FREQUENCY/1000}s`
    }
    , ALERT_IN_PROGRESS = {
         errCaption : 'Loading In Progress',
         message : 'Loading data for this item in progress.\nIt seems several clicks on button Load repeatedly happend.'
    };


const _crErr = ({ status, statusText }={}) => ({
  errCaption: 'Request Error',
  message : `${status}: ${statusText}`
});

const _crErrResp = () => ({
  errCaption: 'Response Error',
  message : `Response format is incorrect`
});

let _recentUri = DONE
  , _recentTime = Date.now() - MIN_FREQUENCY
  , _recentCall = _recentTime;

const _fnSetRecentCall = function(uri, time){
  _recentUri = uri;
  _recentCall = time
}
const _fnSetRecentDone = function(uri, time){
  _recentUri = uri;
  _recentTime = time;
}

const _starLoading = (uri, nowTime) => {
  _fnSetRecentCall(uri, nowTime);
  LPA.loadingProgress();
}

const _doneOk = (nowTime) => {
  _fnSetRecentDone(DONE, nowTime);
  LPA.loadingProgressComplete()
}

const _doneFailure = (nowTime) => {
  _fnSetRecentDone(DONE, nowTime);
  LPA.loadingProgressFailed();
}

export default (config) => {
   const {
      uri, option,
      onFailed, onCatch
    } = config;
  const _nowTime = Date.now();

  if (_nowTime - _recentCall < CLICK_TIME_INTERVAL){
    return void 0;
  } else if (uri === _recentUri){
    onCatch({ error : ALERT_IN_PROGRESS, option, onFailed });
  } else if (_nowTime - _recentTime < MIN_FREQUENCY){
    onCatch({ error : ALERT_FREQUENCY, option, onFailed });
  } else {

     const _configFetch = {
       ...config,
       _crErr, _crErrResp,
       _nowTime, _doneOk, _doneFailure
     };

    _starLoading(uri, _nowTime);

    const { fetchType } = option;
    if (fetchType === 'csv-stream') {
      fetchCsvStream(_configFetch)
    } else {
      fetchJson(_configFetch)
    }
  }
}
