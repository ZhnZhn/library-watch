
import StringUtil from '../utils/StringUtil';

const BASE = 'https://api.npmjs.org';
const REQUEST_PACKAGE = 'Request Package';

//https://api.npmjs.org/downloads/range/last-month

const _rRequestTypeToUrl = {
  NPM_RECENT_VERSION : (option) => {
    return `https://registry.npmjs.org/-/package/${option.repo}/dist-tags`;
  },

  NPM_DOWNLOADS_RECENT_MONTH : (option) => {
    return `${BASE}/downloads/range/last-month/${option.repo}`;
  },
  NPM_DOWNLOADS : (option) => {
    const { fromDate, toDate, repo } = option
    return `${BASE}/downloads/range/${fromDate}:${toDate}/${repo}`;
  }
}

const NpmApi = {
   getRequestUrl(option){
     const fnFactory = _rRequestTypeToUrl[option.requestType]
     return fnFactory(option);
   },
   getOnCheckResponse(){
     return NpmApi.checkResponse;
   },
   crKey({repo, requestType, fromDate=''}){
     return `${repo}_${requestType}_${fromDate}`;
   },

   checkResponse(json={}, option){
      const { error } = json
      if (error){
        throw {
           errCaption: REQUEST_PACKAGE,
           message: StringUtil.setFirstToUpperCase(error)
         };
      }
      return true;
   }
};

export default NpmApi
