import { crErrMsg } from './apiFn';

const API_URL = "https://crates.io";
const _isArr = Array.isArray;

const CrateApi = {
  getRequestUrl({ repo }){
    return `${API_URL}/api/v1/crates/${repo}/downloads`;
  },
  getOnCheckResponse(){
    return CrateApi.checkResponse;
  },
  crKey({repo, requestType}){
    return `${repo}_${requestType}`;
  },
  checkResponse(json, option){
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
};

export default CrateApi
