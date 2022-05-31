import {
  setAlertMsgTo,
  ALERT_SERVICE_UNAVAILABLE,
  ALERT_NETWORK_ERROR,
  ALERT_RUNTIME_ERROR
} from '../constants/Msg';

const _hasToken = (
  str,
  token
) => (str || '').indexOf(token) !== -1;

export default ({
  error,
  option,
  onFailed
}) => {
  const {
    errCaption,
    message
  } = error || {};
  if (error instanceof TypeError){
    if (_hasToken(message, 'code 503')){
       setAlertMsgTo(option, ALERT_SERVICE_UNAVAILABLE)
    } else if (_hasToken(message, 'fetch')) {
       setAlertMsgTo(option, ALERT_NETWORK_ERROR)
    } else {
       option.alertCaption = errCaption
         || ALERT_RUNTIME_ERROR.caption
       option.alertDescr = message;
    }
  } else {
     option.alertCaption = errCaption
        || ALERT_RUNTIME_ERROR.caption;
     option.alertDescr = message;
  }

  onFailed(option);
}
