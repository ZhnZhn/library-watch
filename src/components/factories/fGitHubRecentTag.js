
import GitHubRecentTag from '../items/GitHubRecentTag';
import fnFetchJson from '../../network/fnFetchJson';
import fnCatch from '../../network/fnCatch';

//uri, option, onCheckResponse, onFetch, onCompleted, onFailed, onCatch

const _base = 'https://api.github.com';

const fGitHubRecentTag = function({
  factory, option, json=[{name: 'empty'}], parentProps, onCloseItem, onWatchItem
}){
  const { repo, requestType, chartType, browserType, key } = option
      , tagItem = json[0]
      , _onClickDetail = fnFetchJson.bind(null, {
          uri : `${_base}/repos/${option.repo}/commits/${tagItem.commit.sha}`,
          onCatch : fnCatch
        });
  return factory.createElement(GitHubRecentTag, {
      key : key,
      repo : repo,
      requestType : requestType,
      version : tagItem.name,
      caption : `${repo} ${tagItem.name}`,
      onCloseItem : onCloseItem.bind(null, chartType, browserType, key),
      onClickDetail : _onClickDetail,
      onWatchItem : onWatchItem,
      ...parentProps
  });
};

export default fGitHubRecentTag
