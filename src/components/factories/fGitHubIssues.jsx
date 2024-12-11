import GitHubIssues from "../items/GitHubIssues";

const fGitHubCommits = ({
  option,
  json,
  parentProps,
  onCloseItem,
  onWatchItem
}) => (<GitHubIssues
   key={option.key}
   caption={option.repo}
   repo={option.repo}
   requestType={option.requestType}
   issues={json || []}
   onCloseItem={onCloseItem}
   onWatchItem={onWatchItem}
   {...parentProps}
/>);

export default fGitHubCommits
