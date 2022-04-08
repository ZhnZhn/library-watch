
import GitHubRecentRelease from '../items/GitHubRecentRelease';

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
    chartType,
    browserType,
    key
  } = option
  , {
    tag_name,
    name,
    published_at='empty',
    html_url
  } = json
  , _version = tag_name || name || 'empty'
  , _published_at = published_at
      .replace('T', ' ')
      .replace('Z', '');
  return createElement(GitHubRecentRelease, {
      key,
      repo,
      requestType,
      html_url,
      caption: `${repo} ${_version} ${_published_at}`,
      version: _version,
      published_at: _published_at,
      onCloseItem : onCloseItem.bind(null, chartType, browserType, key),
      onWatchItem : onWatchItem,
      ...parentProps
  })
}

export default fGitHubRecentRelease
