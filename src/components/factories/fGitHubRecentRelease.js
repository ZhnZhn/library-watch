import GitHubRecentRelease from '../items/GitHubRecentRelease';
import formatStrDate from '../../utils/formatStrDate';

const fGitHubRecentRelease = function({
  createElement,
  option,
  json,
  parentProps,
  onCloseItem,
  onWatchItem
}) {
  const {
    repo,
    requestType,
    key
  } = option
  , {
    tag_name,
    name,
    published_at,
    html_url
  } = json
  , _version = tag_name || name || 'empty'
  , _published_at = formatStrDate(published_at, 'empty');
  return createElement(GitHubRecentRelease, {
    key,
    repo,
    requestType,
    html_url,
    caption: `${repo} ${_version} ${_published_at}`,
    version: _version,
    published_at: _published_at,
    onCloseItem,
    onWatchItem,
    ...parentProps
  });
};

export default fGitHubRecentRelease
