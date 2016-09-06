

import GitHubSearchInfo from '../items/GitHubSearchInfo';

const fGitHubSearchInfo = function({
  factory, option, json, parentProps, onCloseItem
}){
  const { repo, requestType, chartType, browserType } = option
      , { items=[{}] } = json
      , library = items[0]
      , { full_name='empty', stargazers_count='', pushed_at='' } = library
      , _pushed_at = pushed_at.replace('T', ' ').replace('Z', '')
      , key = `${repo}_${requestType}`

  return factory.createElement(GitHubSearchInfo, {
      key : key,
      repo : full_name,
      stars_count : stargazers_count,
      pushed_at : _pushed_at,
      caption : `${full_name} ${stargazers_count} ${_pushed_at}`,
      library : library,
      onCloseItem : onCloseItem.bind(null, chartType, browserType, key),
      ...parentProps
  })
};

export default fGitHubSearchInfo
