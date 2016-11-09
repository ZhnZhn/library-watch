import LoadingProgressActions from '../flux/actions/LoadingProgressActions';

const CLICK_TIME_INTERVAL = 300
    , MIN_FREQUENCY = 3000
    , LIMIT_REMAINING = 'X-RateLimit-Remaining'
    , DONE = 'DONE'
    , ALERT_FREQUENCY = {
        errCaption : 'Load Frequency',
        message : `Exceed item load frequency restriction of ${MIN_FREQUENCY/1000}s`
    }
    , ALERT_IN_PROGRESS = {
         errCaption : 'Loading In Progress',
         message : 'Loading data for this item in progress.\nIt seems several clicks on button Load repeatedly happend.'
    };


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

export default ({
   uri, option,
   onCheckResponse, onFetch, onCompleted,
   onFailed, onCatch
 }) => {
  const _nowTime = Date.now()

  if (_nowTime - _recentCall < CLICK_TIME_INTERVAL){
    return undefined;
  } else if (uri === _recentUri){
    onCatch({ error : ALERT_IN_PROGRESS, option, onFailed });
  } else if (_nowTime - _recentTime < MIN_FREQUENCY){
    onCatch({ error : ALERT_FREQUENCY, option, onFailed });
  } else {

    _fnSetRecentCall(uri, _nowTime);
    LoadingProgressActions.loadingProgress();

    fetch(uri)
      .then((response) => {
        const { status, statusText, headers } = response;
        option.limitRemaining = headers.get(LIMIT_REMAINING);
        if (status>=200 && status<=400){
          return response.json();
        } else if (status>400 && status<500){
           throw { errCaption : 'Request Error', message : `${status} : ${statusText}` }
        } else if (status>=500 && status<600){
           throw { errCaption : 'Response Error', message : `${status} : ${statusText}` }
        }
      })
      .then((json) => {
         if (onCheckResponse(json, option)){
           onFetch({ json, option, onCompleted });
         }

         _fnSetRecentDone(DONE, _nowTime);
         LoadingProgressActions.loadingProgressComplete();
      })
      .catch((error) => {
         onCatch({ error, option, onFailed })

         _fnSetRecentDone(DONE, _nowTime);
         LoadingProgressActions.loadingProgressFailed();
      })
  }
}
