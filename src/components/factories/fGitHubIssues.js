import { bindTo } from '../uiApi';
import GitHubIssues from '../items/GitHubIssues';

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
  return createElement(GitHubIssues, {
      key,
      repo,
      requestType,
      caption: repo,
      issues: json,
      onCloseItem: bindTo(onCloseItem, chartType, browserType, key),
      onWatchItem: onWatchItem,
      ...parentProps
  })
};

export default fGitHubCommits
