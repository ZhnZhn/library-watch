import GitHubIssues from '../items/GitHubIssues';

const fGitHubCommits = function({
  factory, option, json=[], parentProps, onCloseItem, onWatchItem
}) {
  const { repo, requestType, chartType, browserType } = option
      , key = `${repo}_${requestType}`
  return factory.createElement(GitHubIssues, {
      key : key,
      repo : repo,
      requestType : requestType,
      caption : `${repo}`,
      issues : json,
      onCloseItem : onCloseItem.bind(null, chartType, browserType, key),
      onWatchItem : onWatchItem,
      ...parentProps
  })
}

export default fGitHubCommits
