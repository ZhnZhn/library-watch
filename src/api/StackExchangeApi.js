import { setFirstToUpperCase } from '../utils/strFn';
import { fGetRequestUrl } from './apiFn';

const BASE_URL = "https://api.stackexchange.com/2.2"
, DF_REQUEST_TYPE = 'SE_QUESTIONS';

// /questions/{ids}/linked Get the questions that link to the questions identified by a set of ids.
// /questions/{ids}/related Get the questions that are related to the questions identified by a set of ids.

const _rRequestTypeToUrl = {
  [DF_REQUEST_TYPE] : ({
    repo,
    sort='week',
    fromdate,
    todate
  }) => {
    return `${BASE_URL}/questions?page=1&pagesize=50&order=desc&fromdate=${fromdate}&todate=${todate}&sort=${sort}&tagged=${repo || 'css'}&site=stackoverflow`;
  },
  SE_SEARCH_QUESTIONS : ({
    repo='css',
    intitle='',
    sort='activity',
    fromdate,
    todate
  }) => {
    if (!repo && !intitle) { repo = 'css'; }
    return `${BASE_URL}/search?page=1&pagesize=50&order=desc&fromdate=${fromdate}&todate=${todate}&sort=${sort}&tagged=${repo}&intitle=${intitle}&site=stackoverflow`;
  }
};

const StackExchangeApi = {
   getRequestUrl: fGetRequestUrl(_rRequestTypeToUrl, DF_REQUEST_TYPE),

   getOnCheckResponse(){
     return this.checkResponse;
   },
   crKey({ repo, requestType }){
     return `${repo}_${requestType}`;
   },

   checkResponse(json, option){
     const { error_message, error_name='' } = json || {}
     if (error_message){
       throw {
          errCaption: setFirstToUpperCase(error_name.replace('_', ' ')),
          message: setFirstToUpperCase(error_message)
       };
     }
     return true;
   }
};

export default StackExchangeApi
