import { crErrMsg } from './apiFn';

const PROVIDER_URL = "https://crates.io"
, API_URL = `${PROVIDER_URL}/api/v1/crates`
, _isArr = Array.isArray;

const CrateApi = {
  getRequestUrl(option){
    const { repo } = option;
    option.sourceLink = `${PROVIDER_URL}/crates/${repo}`
    return [
      `${API_URL}/${repo}`,
      `${API_URL}/${repo}/downloads`
    ];
  },

  crKey({repo, requestType}){
    return `${repo}_${requestType}`;
  },

  checkResponse(json, option){
    if (option.json1) {
      const { meta } = json || {}
      , { extra_downloads } = meta || {};

       if (!_isArr(extra_downloads)) {
         throw crErrMsg(
           "Request Crate",
           "Incorrect response"
         );
       }
       return true;
    }
    return true;    
  }
};

export default CrateApi
