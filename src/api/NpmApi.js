
import { setFirstToUpperCase } from '../utils/strFn';

const API_URL = 'https://api.npmjs.org';
const NPM = 'https://www.npmjs.com';
const NPM_PACKAGE = `${NPM}/package/`;
const REQUEST_PACKAGE = 'Request Package';

//https://api.npmjs.org/downloads/range/last-month

const _crPackageLink = name => name
  ? `${NPM_PACKAGE}${name}`
  : NPM;

const _addPackageLinkTo = (option) => {
  const { repo } = option;
  option.packageLink = _crPackageLink(repo);
};

const _crVersionPackage = repo => repo.replace('/', '%2F')
const _rRequestTypeToUrl = {
  NPM_RECENT_VERSION : (option) => {
    return `https://registry.npmjs.org/-/package/${option.repo}/dist-tags`;
  },

  NPM_DOWNLOADS_RECENT_MONTH : (option) => {
    _addPackageLinkTo(option);
    return `${API_URL}/downloads/range/last-month/${option.repo}`;
  },
  NPM_DOWNLOADS : (option) => {
    const { fromDate, toDate, repo } = option;
    _addPackageLinkTo(option)
    return `${API_URL}/downloads/range/${fromDate}:${toDate}/${repo}`;
  },
  NPM_TOP_VERSIONS: (option) => {
    _addPackageLinkTo(option);
    return `${API_URL}/versions/${_crVersionPackage(option.repo)}/last-week`;
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
      const { error } = json;
      if (error){
        throw {
           errCaption: REQUEST_PACKAGE,
           message: setFirstToUpperCase(error)
         };
      }
      return true;
   }
};

export default NpmApi
