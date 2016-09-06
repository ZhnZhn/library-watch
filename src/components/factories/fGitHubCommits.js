import GitHubCommits from '../items/GitHubCommits';

const fGitHubCommits = function({
  factory, option, json=[], parentProps, onCloseItem, onWatchItem
}) {
  const { repo, requestType, chartType, browserType } = option
      , key = `${repo}_${requestType}`
  return factory.createElement(GitHubCommits, {
      key : key,
      repo : repo,
      requestType : requestType,
      caption : `${repo}`,
      commits : json,
      onCloseItem : onCloseItem.bind(null, chartType, browserType, key),
      onWatchItem : onWatchItem,
      ...parentProps
  })
}

export default fGitHubCommits
