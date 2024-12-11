import GitHubCommits from "../items/GitHubCommits";

const fGitHubCommits = ({
  option,
  json,
  parentProps,
  onCloseItem,
  onWatchItem
}) => (<GitHubCommits
   key={option.key}
   commits={json || []}
   caption={option.repo}
   repo={option.repo}
   requestType={option.requestType}
   onCloseItem={onCloseItem}
   onWatchItem={onWatchItem}
   {...parentProps}
/>);

export default fGitHubCommits
