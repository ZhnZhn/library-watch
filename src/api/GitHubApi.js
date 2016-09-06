
// repos/:owner/:repo/releases/latest

//  repos/:owner/:repo/git/refs/tags

// GET /repos/:owner/:repo/releases/tags/:tag

// repo
// https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc


// commit descr url, (sha), html_url
//https://api.github.com/repos/lodash/lodash/commits/fc734a63717e2f29268eb79a161daaa6a9107d02

// /repos/:owner/:repo/issues

const _base = 'https://api.github.com'


const _rRequestTypeToUrl = {
  GH_RELEASE_RECENT : (option) => {
    return `${_base}/repos/${option.repo}/releases/latest`;
  },
  GH_TAGS : (option) => {
    return `${_base}/repos/${option.repo}/tags`;
  },
  GH_SEARCH_INFO : (option) => {
    return `${_base}/search/repositories?q=repo:${option.repo}`;
  },
  GH_COMMITS : (option) => {
    return `${_base}/repos/${option.repo}/commits`;
  },
  GH_ISSUES : (option) => {
    return `${_base}/repos/${option.repo}/issues`;
  },
  GH_PULL_REQUESTS : (option) => {
    return `${_base}/repos/${option.repo}/pulls`;
  }
}

const GitHubApi = {
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

export default GitHubApi
