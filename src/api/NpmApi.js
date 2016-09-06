
const BASE = 'https://api.npmjs.org';
const REQUEST_PACKAGE = 'Request Package';

const _fnFirstToUpperCase = (msg) => {
  return msg.charAt(0).toUpperCase() + msg.substring(1);
}

const _rRequestTypeToUrl = {
  NPM_RECENT_VERSION : (option) => {
    return `https://registry.npmjs.org/-/package/${option.repo}/dist-tags`
  },

  NPM_RECENT_MONTH : (option) => {
    return `${BASE}/downloads/point/last-month/${option.repo}`
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
      const { error:msg='Empty error description.' } = json
      if (msg){
        throw {
           errCaption : REQUEST_PACKAGE,
           message : _fnFirstToUpperCase(msg)
         }
      }
      return true;
   }
};

export default NpmApi
