import GitHubCommits from '../items/GitHubCommits';

const fGitHubCommits = function({
  createElement,
  option,
  json=[],
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
  } = option;
  return createElement(GitHubCommits, {
      key,
      repo,
      requestType,
      caption: repo,
      commits: json,
      onCloseItem: onCloseItem.bind(null, chartType, browserType, key),
      onWatchItem: onWatchItem,
      ...parentProps
  })
}

export default fGitHubCommits
