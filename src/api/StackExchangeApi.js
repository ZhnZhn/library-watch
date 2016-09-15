
import StringUtil from '../utils/StringUtil';

const BASE = "https://api.stackexchange.com/2.2";

// /questions/{ids}/linked Get the questions that link to the questions identified by a set of ids.
// /questions/{ids}/related Get the questions that are related to the questions identified by a set of ids.

const _rRequestTypeToUrl = {
  SE_QUESTIONS : ({ repo, sort='week', fromdate, todate }) => {
    return `${BASE}/questions?page=1&pagesize=50&order=desc&fromdate=${fromdate}&todate=${todate}&sort=${sort}&tagged=${repo}&site=stackoverflow`;
  },
  SE_SEARCH_QUESTIONS : ({ repo='css', intitle='', sort='activity', fromdate, todate}) => {
    if (!repo && !intitle) { repo = 'css'; }
    return `${BASE}/search?page=1&pagesize=50&order=desc&fromdate=${fromdate}&todate=${todate}&sort=${sort}&tagged=${repo}&intitle=${intitle}&site=stackoverflow`;
  }
}

const StackExchangeApi = {
   getRequestUrl(option){
     const fnFactory = _rRequestTypeToUrl[option.requestType];
     return fnFactory(option);
   },
   getOnCheckResponse(){
     return this.checkResponse
   },

   checkResponse(json={}, option){
     const { error_message, error_name='' } = json
     if (error_message){
       throw {
          errCaption : StringUtil.setFirstToUpperCase(error_name.replace('_', ' ')),
          message : StringUtil.setFirstToUpperCase(error_message)
        }
     }
      return true;
   }
};

export default StackExchangeApi
