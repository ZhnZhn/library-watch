import { bindTo } from '../uiApi';
import GitHubRecentTag from '../items/GitHubRecentTag';
import fnFetchJson from '../../network/fnFetchJson';
import fnCatch from '../../network/fnCatch';

//uri, option, onCheckResponse, onFetch, onCompleted, onFailed, onCatch

const API_URL = 'https://api.github.com';

const fGitHubRecentTag = function({
  createElement,
  option,
  json=[{name: 'empty'}],
  parentProps,
  onCloseItem,
  onWatchItem
}){
  const {
    repo,
    requestType,
    key
  } = option
  , tagItem = json[0]
  , _onClickDetail = bindTo(fnFetchJson, {
      uri: `${API_URL}/repos/${option.repo}/commits/${tagItem.commit.sha}`,
      onCatch: fnCatch
    });
  return createElement(GitHubRecentTag, {
    key,
    repo,
    requestType,
    version: tagItem.name,
    caption: `${repo} ${tagItem.name}`,
    onClickDetail: _onClickDetail,
    onCloseItem,
    onWatchItem,
    ...parentProps
  });
};

export default fGitHubRecentTag
