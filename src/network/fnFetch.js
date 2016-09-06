const LIMIT_REMAINING = 'X-RateLimit-Remaining'
    , DONE = 'DONE';

/*
const _defaultOption = {
  method: 'GET',
  headers : new Headers(),
  mode : 'cors',
  cache: 'default'
}
*/

let _recentUri = DONE;

export default ({
   uri, option, onCheckResponse, onFetch, onCompleted, onFailed, onCatch
 }) => {
  if (uri === _recentUri){
    onCatch({
      error : {
        errCaption : 'Loading In Progress',
        message : 'Loading data for this item in progress.\nIt seems several clicks on button Load repeatedly happend.'
      },
      option, onFailed
    })
  } else {
    _recentUri = uri;
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
         _recentUri = DONE;
      })
      .catch((error) => {
         onCatch({ error, option, onFailed })
         _recentUri = DONE;
      })
  }
}
