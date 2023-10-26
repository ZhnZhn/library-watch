
// repos/:owner/:repo/releases/latest

//  repos/:owner/:repo/git/refs/tags

// GET /repos/:owner/:repo/releases/tags/:tag

// repo
// https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc


// commit descr url, (sha), html_url
//https://api.github.com/repos/lodash/lodash/commits/fc734a63717e2f29268eb79a161daaa6a9107d02

// /repos/:owner/:repo/issues

const GITHUB_API = 'https://api.github.com'
, URL_REPOS = `${GITHUB_API}/repos`
, _crReposRouteFn = (routePath) => (
  repo
) => `${URL_REPOS}/${repo}/${routePath}`;

const _rRequestTypeToUrl = {
  GH_RELEASE_RECENT : _crReposRouteFn("releases/latest"),
  GH_TAGS : _crReposRouteFn("tags"),

  GH_SEARCH_INFO : (
    repo
  ) => `${GITHUB_API}/search/repositories?q=repo:${repo}`,

  GH_COMMITS : _crReposRouteFn("commits"),
  GH_ISSUES : _crReposRouteFn("issues"),
  GH_PULL_REQUESTS : _crReposRouteFn("pulls")
}

const GitHubApi = {
   getRequestUrl(option){
     const fnFactory = _rRequestTypeToUrl[option.requestType];
     return fnFactory(option.repo);
   },
   getOnCheckResponse(){
     return GitHubApi.checkResponse;
   },
   crKey({ repo, requestType }){
     return `${repo}_${requestType}`;
   },
   checkResponse(){
     return true;
   }
};

export default GitHubApi
