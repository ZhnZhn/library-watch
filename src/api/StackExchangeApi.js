
import StringUtil from '../utils/StringUtil';

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
   getRequestUrl(option){
     const _option = option || {}
     , { requestType } = _option
     return _rRequestTypeToUrl[requestType || DF_REQUEST_TYPE](_option);
   },
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
          errCaption: StringUtil.setFirstToUpperCase(error_name.replace('_', ' ')),
          message: StringUtil.setFirstToUpperCase(error_message)
       };
     }
     return true;
   }
};

export default StackExchangeApi
