
import GitHubRecentRelease from '../items/GitHubRecentRelease';

const fGitHubRecentRelease = function({
  factory, option, json, parentProps, onCloseItem, onWatchItem
}) {
  const { repo, requestType, chartType, browserType } = option
      , { tag_name, name, published_at='empty', html_url } = json
      , _version = (tag_name)
           ? tag_name
           : (name)
           ? name
           : 'empty'
      , _published_at = published_at.replace('T', ' ').replace('Z', '')
      , key = `${repo}_${requestType}`
  return factory.createElement(GitHubRecentRelease, {
      key : key,
      repo : repo,
      requestType : requestType,
      caption : `${repo} ${_version} ${_published_at}`,
      version : _version,
      published_at : _published_at,
      html_url : html_url,
      onCloseItem : onCloseItem.bind(null, chartType, browserType, key),
      onWatchItem : onWatchItem,
      ...parentProps
  })
}

export default fGitHubRecentRelease
