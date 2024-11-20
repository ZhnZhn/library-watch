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
    key
  } = option;
  return createElement(GitHubIssues, {
    key,
    repo,
    requestType,
    caption: repo,
    issues: json,
    onCloseItem,
    onWatchItem,
    ...parentProps
  });
};

export default fGitHubCommits
