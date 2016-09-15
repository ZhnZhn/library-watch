
const BASE = "https://api.stackexchange.com/2.2";

// /questions/{ids}/linked Get the questions that link to the questions identified by a set of ids.
// /questions/{ids}/related Get the questions that are related to the questions identified by a set of ids.

const _rRequestTypeToUrl = {
  SE_QUESTIONS : ({ repo, sort='week', fromdate, todate }) => {
    return `${BASE}/questions?page=1&pagesize=50&order=desc&fromdate=${fromdate}&todate=${todate}&sort=${sort}&tagged=${repo}&site=stackoverflow`;
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

   checkResponse(){
      return true;
   }
};

export default StackExchangeApi
