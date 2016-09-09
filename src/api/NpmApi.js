
const BASE = 'https://api.npmjs.org';
const REQUEST_PACKAGE = 'Request Package';

//https://api.npmjs.org/downloads/range/last-month

const _fnFirstToUpperCase = (msg) => {
  return msg.charAt(0).toUpperCase() + msg.substring(1);
}

const _rRequestTypeToUrl = {
  NPM_RECENT_VERSION : (option) => {
    return `https://registry.npmjs.org/-/package/${option.repo}/dist-tags`;
  },

  NPM_DOWNLOADS_RECENT_MONTH : (option) => {
    return `${BASE}/downloads/range/last-month/${option.repo}`;
  }
}

const NpmApi = {
   getRequestUrl(option){
     const fnFactory = _rRequestTypeToUrl[option.requestType]
     return fnFactory(option);
   },
   getOnCheckResponse(){
     return this.checkResponse
   },

   checkResponse(json={}, option){
      const { error } = json
      if (error){
        throw {
           errCaption : REQUEST_PACKAGE,
           message : _fnFirstToUpperCase(error)
         }
      }
      return true;
   }
};

export default NpmApi
