

import RouterApi from './RouterApi';

// repos/:owner/:repo/releases/latest

//  repos/:owner/:repo/git/refs/tags

// GET /repos/:owner/:repo/releases/tags/:tag

// repo
// https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc

/* npm
https://
http://registry.npmjs.org/-/package/babel-core/dist-tags
 {"latest":"6.14.0","old":"5.8.38"}
 {"latest":"4.14.0","rc":"4.0.0-rc4"}
*/

// commit descr url, (sha), html_url
//https://api.github.com/repos/lodash/lodash/commits/fc734a63717e2f29268eb79a161daaa6a9107d02

// /repos/:owner/:repo/issues

/*
const _base = 'https://api.github.com'

const _rRequestTypeToUrl = {
  RELEASE_RECENT : (option) => {
    return `${_base}/repos/${option.repo}/releases/latest`;
  },
  TAGS : (option) => {
    return `${_base}/repos/${option.repo}/tags`;
  },
  SEARCH_INFO : (option) => {
    return `${_base}/search/repositories?q=repo:${option.repo}`;
  },
  COMMITS : (option) => {
    return `${_base}/repos/${option.repo}/commits`;
  },
  ISSUES : (option) => {
    return `${_base}/repos/${option.repo}/issues`;
  },
  PULL_REQUESTS : (option) => {
    return `${_base}/repos/${option.repo}/pulls`;
  },

  NPM_RECENT_VERSION : (option) => {
    return `https://registry.npmjs.org/-/package/${option.repo}/dist-tags`
  },

  NPM_RECENT_MONTH : (option) => {
    return `https://api.npmjs.org/downloads/point/last-month/${option.repo}`
  }

}
*/

const RestApi = {
   getApi(option){
     const { requestType } = option
         , id = requestType.split('_')[0]
     return RouterApi[id];
   },
   
   getRequestUrl(option){
     const { requestType } = option
         , id = requestType.split('_')[0]
         , api = RouterApi[id]
     return api.getRequestUrl(option);

     //const fnFactory = _rRequestTypeToUrl[option.requestType];
     //return fnFactory(option);
   },

   getOnCheckResponse(option){
     const { requestType } = option
         , id = requestType.split('_')[0]
         , api = RouterApi[id]
     return api.getOnCheckResponse();
   },

   checkResponse(){
     return true;
   }
};

export default RestApi
