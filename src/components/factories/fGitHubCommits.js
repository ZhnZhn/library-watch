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
    key
  } = option;
  return createElement(GitHubCommits, {
    key,
    repo,
    requestType,
    caption: repo,
    commits: json,
    onCloseItem,
    onWatchItem,
    ...parentProps
  });
};

export default fGitHubCommits
